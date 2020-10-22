import React, { useState } from 'react'

export function Accordion() {
    const [ isToggled, setIsToggled ] = useState(false);
    const showMe = isToggled ? <h3>Show me</h3> : ''

    return (
        <div>
            {/* {isToggled && <h3>Show me</h3>} */}
            {/* { isToggled ? <h3>Show me</h3> : ''} */}
            {showMe}
            <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
        </div>
    )
}