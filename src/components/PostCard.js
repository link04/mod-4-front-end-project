import React, {Component}  from 'react'

export default class PostCard extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.post.content}</h4>
      </div>
    )
  }
}
