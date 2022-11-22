import React from "react";

function Entries(prop) {

    const LSKEY = "MyTodoApp";

    const handleChange = () => {
        // const checkedEntry = {
        //     name : prop.saveEntries.name,
        //     complete : !prop.saveEntries.complete
        // }

        // const updateEntries = JSON.parse(JSON.stringify(prop.saveEntries));
        // updateEntries.push(checkedEntry);
        // prop.setEntries(updateEntries);

        // const newEntries = [...prop.saveEntries];
        // prop.saveEntries.complete = !prop.saveEntries.complete;
        // console.log(newEntries);
        // prop.setEntries(newEntries);
        // localStorage.setItem(LSKEY, JSON.stringify(prop.setEntries));
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