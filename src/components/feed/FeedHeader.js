import React from "react";
import TweetInput from "./TweetInput";


function FeedHeader() {


    return (
        <div className="feedHeader">
            <div className="feedHeader__tweet">
                <img alt="" draggable="true" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" className="feedHeader__profile" />
                <TweetInput />
            </div>
            <div className="feedHeader__options">

            </div>
        </div>
    )
}

export default FeedHeader