import React from 'react'

const ConversationRoom = (props) => {

  return (
    <div onClick={props.handleClick}>
      {props.conversation.title}
    </div>
  )
}
export default ConversationRoom
