import React from 'react';
import './Post.css';

const Post = (props) => (
  <div className="card card-default post-body">
    <div className="card-body">
      <div className="card-title">Post</div>
      <div className="post-content">
        { 
          props.postBody
        }
      </div>
      <button className="btn btn-primary post-like-button">Like</button>
    </div>
  </div>
)

export default Post;
