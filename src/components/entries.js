import React, { useState } from "react";

function Entries() {
    const initialEntries = [
        {name :'Style this page', complete : false},
        {name :'Learn React', complete : false},
        {name :'Be cool', complete : true}
    ];
    const [entries, setEntries] = useState(initialEntries);
    const handleChange = () => {
        console.log(entries);
        // setEntries(!entries);
    };
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
                {entries.map((entry, index) => (

                        <li key={index}>
                            <input type="checkbox" defaultChecked={entry.complete} onChange={handleChange} id="opt-in"/>
                            <label className="toDoSingleEntries" for="opt-in">{entry.name}</label>
                        </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries