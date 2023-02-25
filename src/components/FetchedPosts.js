import React from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loader = useSelector((state) => state.app.loading);

  if (loader) return <div className="spinner-grow text-primary" role="status">
    <span className="sr-only">Loading...</span>
  </div>

  if (!posts.length) {
    return <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
      Get Posts
    </button>;
  }

  return posts.map(post => <Post post={post} key={post + Math.random()}/>);
};

export default FetchedPosts;
