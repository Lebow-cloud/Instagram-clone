import React from "react";
import "../css/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="" src="./DSC04737.jpg" />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageURL} />

      <h4 className="post__text">
        <strong>Lebow</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
