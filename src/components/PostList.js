import React, {Component} from 'react'
import { Redirect } from "react-router-dom";

import PostCard from './PostCard'


export default class PostList extends Component {

  render(){
    let mappedPosts
    if(this.props.posts){
       mappedPosts = this.props.posts.map(post => {
        return <PostCard post={post} />
      })
    }

    return(
      <div>
      <h1>PostList</h1>
      {this.props.posts ?
        mappedPosts
        :
        <Redirect to="/login" />
      }

      </div>

    )
  }

}
