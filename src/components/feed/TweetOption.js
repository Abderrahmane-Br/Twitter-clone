import React from 'react'

function TweetOption({ icon, number, hoverColor }) {
    return (
        <div className={`tweet__option option ${hoverColor}`}>
            {icon}
            {number && <span className="option__number">{number}</span>}
        </div>
    )
}

export default TweetOption