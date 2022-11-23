import React from "react";

function Entries(prop) {

    const handleChange = (id) => {
        const checkedEntry = prop.entries.map((entry) => {
            if (entry.id == id) {
                entry.complete = !entry.complete;
            }

            return entry;
        });

        prop.setEntries(checkedEntry);
    };

    return (
        <section className="toDoEntries">
            <ul>
                {prop.entries.map((entry) => (

                    <li 
                        key={entry.id} 
                        className={entry.complete ? "true" : "false"}
                    >
                        <input 
                            type="checkbox" 
                            onChange={() => {handleChange(entry.id)}}
                            id={entry.id}
                        />
                        <label className="toDoSingleEntries" htmlFor={entry.id}>{entry.name}</label>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries