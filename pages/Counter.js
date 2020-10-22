import { func } from "prop-types";
import React, { useState } from "react";

export function Counter() {
    // Const [ state, setState ] = useState(default state)
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}