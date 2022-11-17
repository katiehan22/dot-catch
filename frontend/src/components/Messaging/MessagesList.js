import { useEffect } from "react";
import { useRef } from "react";
import MessageListItem from "./MessageListItem";
import './Messaging.css'

export default function MessagesList( {clickedMatchId, messageArray} ) {

  const messageList = messageArray.map(message =>
    <MessageListItem
      key={message._id}
      message={message}
      clickedMatchId={clickedMatchId}
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