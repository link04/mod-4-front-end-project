import React from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { Button, Form, FormGroup, Label, Input, FormText , Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewConversationForm extends React.Component {
  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ title: '' });
  };

  render = () => {
    return (
      <div className="newConversationForm">
        <Form autoComplete="off" className="text-center" onSubmit={this.handleSubmit}>

          <FormGroup>
            <label>Add New Conversation Topic:</label>
            <Input
              required
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>

        <Button type="submit" color="primary" > Create Topic</Button>
        </Form>
      </div>
    );
  };
}

export default NewConversationForm;
