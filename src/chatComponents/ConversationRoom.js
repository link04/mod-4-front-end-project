import React from 'react'

const ConversationRoom = (props) => {

  return (
    <div className="room" onClick={props.handleClick}>
      <div className="room-icon">
        <div className="icon"></div>
      </div>
      <div className="room-content">
        <p># {props.conversation.title}</p>
      </div>
    </div>
  )
}
export default ConversationRoom
