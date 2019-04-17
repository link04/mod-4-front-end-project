import React from 'react';
import NewMessageForm from './NewMessageForm';
import Message from './Message';

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {
  return (
    <div className="chat-container">
      <div className="chat-box">
        {orderedMessages(messages)}
      </div>
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <Message key={message.id} message={message} />
  });
};
