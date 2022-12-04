import React from "react";

function Trend({ title, hashtag, tweets }) {
    return (
        <div className={`trend`}>
            <span className="trend__title">{title}</span>
            <span className="trend__hashtag">{hashtag}</span>
            <span className="trend__tweets">{tweets} Tweets</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="trend__option --gray-icon r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></g></svg>
        </div>
    )
}

export default Trend