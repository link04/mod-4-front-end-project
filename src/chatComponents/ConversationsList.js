import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from '../constants';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';
import ConversationRoom from './ConversationRoom'

class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null
  };

  componentDidMount = () => {
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations => this.setState({ conversations }));
  };

  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;

    this.setState({
      conversations: [...this.state.conversations, conversation]
    }, () => console.log(this.state));
  };

  handleReceivedMessage = response => {
    // debugger
    const { message } = response;
    const conversations = [...this.state.conversations];

    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];

    this.setState({ conversations });
  };

  render = () => {
    const { conversations, activeConversation } = this.state;

    return (
      <React.Fragment>
        <div className="conversationsList column">
          <ActionCableConsumer
            channel={{ channel: 'ConversationsChannel' }}
            onReceived={this.handleReceivedConversation}
          />
          {this.state.conversations.length ? (
            <Cable
              conversations={conversations}
              handleReceivedMessage={this.handleReceivedMessage}
            />
          ) : null}
          <NewConversationForm />
          <h2>ChatRooms</h2>
          {mapConversations(conversations, this.handleClick)}
        </div>
        <div className="messagesArea column">
          {activeConversation ? (
            <MessagesArea
              conversation={findActiveConversation(
                conversations,
                activeConversation
              )}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  };
}

export default ConversationsList;

/////////////////////////////////////////////////////////////////
// --------------------------- HELPERS ----------------------- //
/////////////////////////////////////////////////////////////////

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <ConversationRoom
        key={conversation.id}
        conversation={conversation}
        handleClick={() => handleClick(conversation.id)}
      />
    );
  });
};
