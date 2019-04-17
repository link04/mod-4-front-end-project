import React from 'react'

const ConversationRoom = (props) => {

  const hypenedText = props.conversation.title.toLowerCase().split(' ').join('-')

  return (
    <div className="room" onClick={props.handleClick}>
      <div className="room-icon">
        <div className="icon"></div>
      </div>
      <div className="room-content">
        <p># {hypenedText}</p>
      </div>
    </div>
  )
}
export default ConversationRoom
