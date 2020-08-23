import React from "react";
import "./Feed";
import TweetBox from "../tweetBox/TweetBox"

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
        <TweetBox/>
      </div>
    </div>
  );
};

export default Feed;
