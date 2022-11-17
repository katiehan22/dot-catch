import { useDispatch, useSelector } from "react-redux"
import trashCan from './trash-can-solid.svg'
import pen from './pen-solid.svg'
import { useState } from "react"
import { deleteMessage } from "../../store/messages";

export default function MessageListItem( {message, clickedMatchId} ) {

  const dispatch = useDispatch();
  
  const matchedUser = useSelector( state => state.entities.users[clickedMatchId] )

  const currentUser = useSelector( state => state.session.user._id )

  const messageSender = useSelector( state => state.entities.users[message.user_from] )

  const messageDateTime = Date(message.createdAt).toLocaleString().split(' G')[0]

  const editable = message.user_from === currentUser

  const [showLinks, setShowLinks] = useState(false)

  return(
    <div className="singleMsgContainer">
      <li 
      onClick={ e => setShowLinks( showLinks ? false : true ) }
      className={messageSender === matchedUser ? 'leftMessage' : 'rightMessage'}>
        {/* <h4>{messageDateTime}</h4> */}
        {/* <h3>{messageSender.firstName}:</h3> */}
        <p>{message.body}</p>
      </li>
      {editable && showLinks &&
      <div className="messageLinkContainer">
        <img
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