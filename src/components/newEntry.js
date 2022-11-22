import React, { useRef } from "react";

function Newentry(prop) {
    const inputRef = useRef();

    function clickHandler() {

        const inputElement = inputRef.current;
        const newEntries = {
            name : inputElement.value,
            complete : false
        }

        const newInitialEntries = JSON.parse(JSON.stringify(prop.entries));
        newInitialEntries.push(newEntries);
        prop.setEntries(newInitialEntries);
    }

    return(
        <section className="form">
            <input ref={inputRef} type="text" placeholder="New task"></input>
            <div>
                <button onClick={clickHandler}>Submit</button>
            </div>
        </section>
    )
}

export default Newentry