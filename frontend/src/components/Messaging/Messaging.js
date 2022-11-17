import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createMessage, fetchUserMessages } from "../../store/messages";
import MessagesList from "./MessagesList";

export default function Messaging({matchedUser}) {
  
  const dispatch = useDispatch();
  
  const [message, setMessage] = useState('');
  
  const currentUserId = useSelector( state => state.session.user._id );
  const clickedMatchId = matchedUser._id
  
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
      <div className="messagesHeaderContainer">
        <Link
          className="messagesHeaderLink"
          to={ {pathname: `/profile/${matchedUser._id}`, state: { user: matchedUser, fromApp: true } } }
          >
            <img className={'profile-pic label'} src='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'></img>
            <h2 className="messagingMatchedUser">{matchedUser.firstName}</h2>
        </Link>
      </div>
      <MessagesList messageArray={messageArray} clickedMatchId={clickedMatchId} />
      <form className="messageInputForm">
        <p className="formPlaceholder">{`>`}</p>
        <input
          type='text'
          name="message"
          id="messageInput"
          placeholder={`Send a message!`}
          cols="30"
          rows="3"
          onChange={(e) => setMessage(e.target.value) }
          required
        />
        <button
          className="sendMessageButton"
          type="submit"
          onClick={Send}>Send
        </button>
      </form>
    </section>
  )
}