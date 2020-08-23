import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";

const Post = ({displayName, username, verified, avatar, text, image}) => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src={avatar} />
      </div>
      <div className="postBody">
        <div className="postBodyHeader">
          <div className="postBodyHeaderText">
            <h3>
              {displayName}
              <span className="postHeaderSpecial">
                {verified && <VerifiedUser className="postBadge" />}
                @{username}
              </span>
            </h3>
          </div>
          <div className="postBodyHeaderDesc">
            <p>{text}</p>
          </div>
        </div>
        <img
          src={image}
          alt=""
        />
        <div className="postFooter">
            <ChatBubbleOutline fontSize="small"/>
            <Repeat fontSize="small"/>
            <FavoriteBorder fontSize="small"/>
            <Publish fontSize="small"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
