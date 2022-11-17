import { useDispatch, useSelector } from "react-redux"
import trashCan from './trash-can-solid.svg'
import pen from './pen-solid.svg'
import { useState } from "react"
import { deleteMessage, updateMessage } from "../../store/messages";
import { useEffect } from "react";

export default function MessageListItem( {message, clickedMatchId} ) {

  const dispatch = useDispatch();
  
  const matchedUser = useSelector( state => state.entities.users[clickedMatchId] )

  const currentUser = useSelector( state => state.session.user._id )

  const messageSender = useSelector( state => state.entities.users[message.user_from] )

  const messageDateTime = Date(message.createdAt).toLocaleString().split(' G')[0]

  const editable = message.user_from === currentUser

  const [showLinks, setShowLinks] = useState(false)
  const [editingMsg, setEditingMsg] = useState(false)
  const [editedMessage, setEditedMessage] = useState('');

  const newMessage = {
    _id: message._id,
    user_from: currentUser,
    user_to: clickedMatchId,
    body: editedMessage
  }

  const clickOut = () => {
    setShowLinks(false)
    setEditingMsg(false)
  }

  const Send = e => {
    e.preventDefault();
    dispatch(updateMessage(newMessage) )
    clickOut()
  }

  useEffect( () => {
    if (editingMsg) setShowLinks(false)
  }, [editingMsg]  )
  // document.getElementById('root').addEventListener('click', clickOut)

  return(
    <div className="singleMsgContainer">
      <li 
      onClick={ e => setShowLinks( showLinks ? false : true ) }
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
              placeholder={message.body}
              onChange={(e) => setEditedMessage(e.target.value) }
              required
            />
            <button
              className="sendMessageButton"
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