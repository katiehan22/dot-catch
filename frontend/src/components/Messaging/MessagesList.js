import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import MessageListItem from "./MessageListItem";
import './Messaging.css'

export default function MessagesList( {clickedMatchId, messageArray} ) {



  // const [convoLength, setConvoLength] = useState(0);

  // setConvoLength(messageArray.length)

  const messageList = messageArray.map(message =>
    <MessageListItem
      key={message._id}
      message={message}
      clickedMatchId={clickedMatchId}
    />
  )

  return(
    <ul className="messageUl">
      {messageList}
    </ul>
  )
}