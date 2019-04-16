import React, {Component}  from 'react'
import { Redirect } from "react-router-dom";

export default class PostCard extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.post.content}</h4>
      </div>
    )
  }
}
