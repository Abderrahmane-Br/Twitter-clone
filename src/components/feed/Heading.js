import React from 'react'

function Heading({ leftComponent, rightComponent }) {
    return (
        <div className="heading">
            {leftComponent}
            {rightComponent}
        </div>
    )
}

export default Heading