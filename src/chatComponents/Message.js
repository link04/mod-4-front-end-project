import React from 'react';

const Message = (props) => {
  return (
    <div className="message-box">
      <div className="room-icon">
        <div className="icon"></div>
      </div>
      <div className="content-box">
        <div className="content-info">
          <p>Username</p>
          <p>4:26PM</p>
        </div>
        <div className="content-message">
          <p>{props.message.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
