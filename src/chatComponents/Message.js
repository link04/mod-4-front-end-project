import React from 'react';

const Message = (props) => {
  return (
    <div className="room">
      <div className="room-icon">
        <div className="icon"></div>
      </div>
      <div className="room-content">
        <p>{props.message.text}</p>
      </div>
    </div>
  )
}

export default Message
