import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewMessageForm extends React.Component {
  state = {
    text: '',
    conversation_id: this.props.conversation_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${API_ROOT}/messages`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ text: '' });
  };

  render = () => {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            className="text"
            type="text"
            placeholder="Type a message..."
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input className="submit" type="submit" />
        </form>
      </React.Fragment>
    );
  };
}

export default NewMessageForm;
