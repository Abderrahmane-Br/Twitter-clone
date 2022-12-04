import React from "react";
import TweetHeading from "../feed/tweet/TweetHeading";

function FollowProfile({
    profilePicUrl,
    profileName,
    username,
    isVerified
}) {
    return (
        <div className="followProfile">
            <TweetHeading
                profilePicUrl={profilePicUrl}
                profileName={profileName}
                username={username}
                isVerified={isVerified}
            />
            <button className="followBtn">Follow</button>
        </div>
    )
}

export default FollowProfile