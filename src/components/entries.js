import React from "react";

function Entries(prop) {
    const LSKEY = "MyTodoApp";

    const handleChange = (id) => {
        const checkedEntry = prop.entries.map((entry) => {
            if (entry.id == id) {
                entry.complete = !entry.complete;
            }

            return entry;
        });

        prop.setEntries(checkedEntry);
    };

    const handleRemove = id => {
        const newEntries = [...prop.entries].filter(entry => entry.id !== id);
        prop.setEntries(newEntries);
        localStorage.setItem(LSKEY + ".entries", JSON.stringify(newEntries))
    }

    return (
        <section className="toDoEntries">
            <ul>
                {prop.entries.map((entry) => (
                    <li 
                        key={entry.id} 
                        className={entry.complete ? "true" : "false"}
                    >
                        <input 
                            type="checkbox" checked={entry.complete}
                            onChange={() => {handleChange(entry.id)}}
                            id={entry.id}
                        />
                        <label className="toDoSingleEntries" htmlFor={entry.id}>{entry.name}</label>
                        <button 
                            className="deleteButton" 
                                onClick={() => handleRemove(entry.id)}
                        >x</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Entries