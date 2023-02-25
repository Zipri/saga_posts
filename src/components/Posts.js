import React from 'react';
import Post from "./Post";
import {useSelector} from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);

  if (!posts.length) return <h4>No posts yet</h4>;
  return posts.map(post => <Post post={post} key={post.id}/>);
};

export default Posts;
