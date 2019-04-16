import React from "react";
import { Redirect } from "react-router-dom";
import PostList from "./PostList";


const Home = props => {
  console.log(props.user);
  return (
    <div>
      {!!props.user ? (
        props.user.role === 'Student' ?

          (
  
            <PostList posts={props.user.posts} />
          )

          :

          (
            <PostList posts={props.posts} />
          )


      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
