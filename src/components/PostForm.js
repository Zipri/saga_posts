import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import Alert from "./Alert";

const PostForm = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.app.alert);
  const [title, setTitle] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) {
      return dispatch(showAlert('Empty post'));
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    dispatch(createPost(newPost));
    setTitle('');
  };

  return <form onSubmit={handlerSubmit}>
    <div className="form-group">
      <label htmlFor="title">New Post: </label>
      {alert && <Alert text={alert}/> }
      <input type="text"
             className="form-control"
             id="title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <button className="btn btn-success" type="submit">Add</button>
  </form>
};

export default PostForm;
