import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone' ;

const Message = (props) => {

  return (
    <div className="message-box">
      <div className="user-icon">
        <div className="icon"></div>
      </div>
      <div className="content-box">
        <div className="content-info">
          <p className="username">{props.message.user.name}</p>
          <p className="timestamp">
            <Moment format="lll">
              {props.message.created_at}
            </Moment>
          </p>
        </div>
        <div className="content-message">
          <p>{props.message.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
