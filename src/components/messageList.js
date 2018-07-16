import React from 'react';
import Message from "./message"

const MessageList = ({messages, toggleStar, toggleSelected}) => {
  return (
    <div>
      {messages.map(message => {
          return (
            <Message
              key = {message.id}
              message = {message}
              toggleStar = {toggleStar}
              toggleSelected = {toggleSelected}
            />
          )
        })
      }
    </div>
  )
}

export default MessageList
