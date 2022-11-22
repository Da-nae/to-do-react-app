import React from "react";

function Entries(prop) {

    const handleChange = () => {
        // setEntries(!entries);
    };
    return (
        <section className="toDoEntries">
            <ul>
                {prop.entries.map((entry, index) => (

                    <li key={index}>
                        <input type="checkbox" defaultChecked={entry.complete} onChange={handleChange} id={index}/>
                        <label className="toDoSingleEntries" htmlFor={index}>{entry.name}</label>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries