import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton } from "react-twitter-embed";
import { Search } from "@material-ui/icons";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <Search className="widgetsSearchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ width: "300px", height: "400px" }}
        />
        <TwitterShareButton
          url="http://google.com"
          options={{ text: "build with #react", via: "safak" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
