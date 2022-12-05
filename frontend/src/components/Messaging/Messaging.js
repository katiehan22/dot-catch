import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearMessageErrors, createMessage, fetchUserMessages } from "../../store/messages";
import { updateUser } from '../../store/users';
import MessagesList from "./MessagesList";
import { BsFlagFill } from 'react-icons/bs';
import { receiveCurrentUser } from "../../store/session";

export default function Messaging({matchedUser}) {
  
  const dispatch = useDispatch();
  
  const [message, setMessage] = useState('');
  
  const currentUser = useSelector( state => state.session.user );
  const currentUserId = currentUser._id;
  const clickedMatchId = matchedUser._id
  
  const messageArray = useSelector( state => Object.values(state.entities.messages) )
  
  useEffect( () => {
    dispatch( fetchUserMessages(currentUserId, clickedMatchId) );
    return () => dispatch( clearMessageErrors() );
  }, [dispatch, clickedMatchId, messageArray.length] )

  // useEffect( () => {
  //   const updateMessages = setInterval( () => dispatch( fetchUserMessages(currentUserId, clickedMatchId)), 1000)
  //   return () => clearInterval(updateMessages)
  // }, [dispatch])

  useEffect(() => {
    if (messageArray.length === 0 && matchedUser.bio === "You're getting the hang of it! I am Tom. I like everyone. Match with me :)") dispatch(createMessage({user_from: clickedMatchId, user_to: currentUserId, body: 'Are you an exception? Let me catch you ;)'}));
  }, [dispatch])

  const newMessage = {
    user_from: currentUserId,
    user_to: clickedMatchId,
    body: message
  }

  const Send = e => {
    e.preventDefault();
    dispatch( clearMessageErrors() )
    dispatch(createMessage(newMessage) )
    document.getElementById("messageInput").value='';
    setMessage('')
  }

  const msgError = useSelector( state => state.errors.messages )

  const unmatchUser = () => {
    const newMatches = { ...currentUser.matches };
    delete newMatches[clickedMatchId];
    if (matchedUser.bio === "You're getting the hang of it! I am Tom. I like everyone. Match with me :)") dispatch(updateUser({ ...matchedUser, likedUserId: currentUser._id }));
    dispatch(updateUser({ ...currentUser, deleteMatcherId: clickedMatchId }));
    dispatch(updateUser({ ...matchedUser, deleteMatcherId: currentUserId }));
    dispatch(receiveCurrentUser({ ...currentUser, matches: newMatches }));
  }
  
  // if ( matchedUser === {}) return null;

  return(
    <section className="messagingContainer">
      <div className="messagesHeader">
        <div className="messagesHeaderContainer">
          <Link
            className="messagesHeaderLink"
            to={ {pathname: `/profile/${matchedUser._id}`, state: { user: matchedUser, fromApp: true } } }
            >
              <img className={'profile-pic label'} src={matchedUser.photos[0]}></img>
              <h2 className="messagingMatchedUser">{matchedUser.firstName}</h2>
          </Link>
        </div>
        <div className="unmatch-dropdown">
          <div>
            <BsFlagFill className="unmatch-icon" />
            <Link to='/' className="unmatch-dropdown-content" onClick={unmatchUser}>
              <span className="hover-green">Unmatch User</span>
            </Link>
          </div>
        </div>
      </div>
      <MessagesList messageArray={messageArray} clickedMatchId={clickedMatchId} />
      <form className="messageInputForm">
        <p className="formPlaceholder">{`>`}</p>
        <input
          type='text'
          name="message"
          id="messageInput"
          className={ msgError ? `msgInputWithError` : ``}
          placeholder={ msgError ? msgError.body : `Send a message!`}
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