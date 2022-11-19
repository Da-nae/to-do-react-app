import Checkboxes from './checkboxes.js';
import React, { useState } from "react";

function Entries() {
    const firstEntries = ['Style this page','Learn React','Be cool'];
    const [toDoEntries, doneEntries] = useState(firstEntries);
        /* 
        * useState returns two values inside an array
        -> const myState = useState(...);
        * The first value is always the current state - In our case, the current list of todos
        -> const todos = myState[0];
        * The second value is always a function that let's me update the current state
        -> const setTodos = myState[1];
        */

    return (
        <section className="toDoEntries">
            <ul>
                {firstEntries.map((entry) => (
                    <li>
                        <Checkboxes />
                        <p className="toDoSingleEntries">{entry}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries