import React from 'react';
import NewMessageForm from './NewMessageForm';
import Message from './Message';

class MessagesArea extends React.Component {


  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render(){
    console.log(this.props.conversation);
    return (
      <div className="chat-container">
        <h2>{this.props.conversation.title}</h2>
        <div className="chat-box">
          {orderedMessages(this.props.conversation.messages)}
          <div style={{ float:"left", clear: "both" }}
               ref={(el) => { this.messagesEnd = el; }}>
          </div>
        </div>
        <NewMessageForm user={this.props.user} conversation_id={this.props.conversation.id} />
      </div>
    )
  }

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
