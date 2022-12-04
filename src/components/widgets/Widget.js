import React from "react";

function Widget({ name, title, content }) {
    return (
        <div className={`widget ${name}`}>
            <h3>{title}</h3>
            {content}
        </div>
    )
}

export default Widget