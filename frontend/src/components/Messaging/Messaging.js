import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createMessage, fetchUserMessages } from "../../store/messages";
import MessagesList from "./MessagesList";

export default function Messaging({clickedMatchId}) {
  
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const matchedUser = useSelector( state => state.entities.users[clickedMatchId] )

  const currentUserId = useSelector( state => state.session.user._id );

  const messageArray = useSelector( state => Object.values(state.entities.messages) )

  useEffect( () => {
    dispatch( fetchUserMessages(currentUserId, clickedMatchId) )
  }, [dispatch, clickedMatchId, messageArray.length] )


  const newMessage = {
    user_from: currentUserId,
    user_to: clickedMatchId,
    body: message
  }

  const Send = e => {
    e.preventDefault();
    dispatch(createMessage(newMessage) )
    document.getElementById("messageInput").value='';
  }
  
  // if ( matchedUser === {}) return null;
  return(
    <section className="messagingContainer">
      <Link
        className="matchItemContainer"
        to={ {pathname: `/profile/${matchedUser._id}`, state: { user: matchedUser, fromApp: true } } }
        >
          <img className="matchedUserImg" src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" alt="matched user" />
          <h2 className="matchedUserName">{matchedUser.firstName}</h2>
      </Link>
      <MessagesList messageArray={messageArray} clickedMatchId={clickedMatchId} />
      <form className="messageInputForm">
        <input
          type='text'
          name="message"
          id="messageInput"
          placeholder="Send a message!"
          cols="30"
          rows="3"
          onChange={(e) => setMessage(e.target.value) }
          required
        />
        <button
          type="submit"
          onClick={Send}>Send
        </button>
      </form>
    </section>
  )
}