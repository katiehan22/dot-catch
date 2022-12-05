import { useDispatch, useSelector } from "react-redux"
import trashCan from './trash-can-solid.svg'
import pen from './pen-solid.svg'
import { useState } from "react"
import { clearMessageErrors, deleteMessage, updateMessage } from "../../store/messages";
import { useEffect } from "react";
import closeButton from './closeButton.svg'

export default function MessageListItem( {message, clickedMatchId} ) {

  const dispatch = useDispatch();
  
  const matchedUser = useSelector( state => state.entities.users[clickedMatchId] )

  const currentUser = useSelector( state => state.session.user._id )

  const messageSender = useSelector( state => state.entities.users[message.user_from] )

  // const messageDateTime = Date(message.createdAt).toLocaleString().split(' G')[0]

  const editable = message.user_from === currentUser
  // const editedMsgError = useSelector( state => state.errors.editedMessages )
  // const prevMsg = editedMsgError ? editedMsgError.body : message.body

  // console.log('editedMsgError is ', editedMsgError)
  // console.log('prevMsg is ', prevMsg)
  const [showLinks, setShowLinks] = useState(false)
  const [editingMsg, setEditingMsg] = useState(false)
  const [editedMessage, setEditedMessage] = useState(message.body);

  const newMessage = {
    _id: message._id,
    user_from: currentUser,
    user_to: clickedMatchId,
    body: editedMessage
  }

  const clickOut = () => {
    if (showLinks) setShowLinks(false);
    setEditingMsg(false)
  }

  const Send = e => {
    e.preventDefault();
    dispatch( clearMessageErrors() )
    if ( newMessage.body === '' ) {
      return dispatch( deleteMessage(message._id) );
    }
    dispatch(updateMessage(newMessage) )
    clickOut();   
  }

  useEffect( () => {
    if (editingMsg) setShowLinks(false)
  }, [editingMsg]  )

  return(
    <div className="singleMsgContainer">
      <li 
      onClick={ e => {if (!editingMsg) return setShowLinks( showLinks ? false : true )} }
      className={messageSender === matchedUser ? 'leftMessage' : 'rightMessage'}>
        {/* <h4>{messageDateTime}</h4> */}
        {/* <h3>{messageSender.firstName}:</h3> */}
        {!editingMsg &&
          <p>{message.body}</p>
        }
        {editingMsg &&
          <form className="messageEditForm">
            <input
              type='text'
              name="editedMessage"
              id="messageEdit"
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value) }
              required
            />
            <img onClick={ () => setEditingMsg(false) } className="editMsgCloseButton" src={closeButton} alt="x" />
            <button
              className="sendEditMessageButton"
              type="submit"
              onClick={Send}>Send
            </button>
          </form>
        }
      </li>
      {editable && showLinks &&
      <div className="messageLinkContainer">
        <img
          onClick={ () => setEditingMsg( editingMsg ? false : true) }
          className="editMsg"
          src={pen} alt="pen" />
        <img
            onClick={ () => {
              dispatch( deleteMessage(message._id) )} }
            className="editMsg"
            src={trashCan} alt="trash can"
        >
        </img>

      </div>
      }
    </div>
  )
}