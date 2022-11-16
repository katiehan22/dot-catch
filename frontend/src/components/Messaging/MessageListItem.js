import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

export default function MessageListItem( {message, clickedMatchId} ) {
  // const matchedUserId = useParams();

  const matchedUser = useSelector( state => state.entities.users[clickedMatchId] )

  // const currentUser = useSelector( state => state.session.user._id )

  const messageSender = useSelector( state => state.entities.users[message.user_from] )

  const messageDateTime = message.createdAt.toLocaleString()

  return(
    <li className={messageSender === matchedUser ? 'leftMessage' : 'rightMessage'}>
      <h4>{messageDateTime}</h4>
      <h3>{messageSender.firstName}:</h3>
      <p>{message.body}</p>
    </li>
  )
}