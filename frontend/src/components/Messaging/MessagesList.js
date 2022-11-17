import { useEffect } from "react";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { deleteMessage } from "../../store/messages";
import MessageListItem from "./MessageListItem";
import './Messaging.css'

export default function MessagesList( {clickedMatchId, messageArray} ) {

  // const dispatch = useDispatch();

  // const onDelete = (messageId) => {
  //   dispatch( deleteMessage(messageId) )
  // }

  const messageList = messageArray.map(message =>
    <MessageListItem
      key={message._id}
      message={message}
      clickedMatchId={clickedMatchId}
      // onDelete={onDelete}
    />
  )
  const bottomRef = useRef(null);

  useEffect( () => {
    bottomRef.current?.scrollIntoView()
  }, [messageArray])

  return(
    <ul className="messageUl" >
      {messageList}
      <div ref={bottomRef}></div>
    </ul>
  )
}