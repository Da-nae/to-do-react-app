import React, { useRef } from "react";
const { v4: uuidv4 } = require('uuid')

function Newentry(prop) {
    const inputRef = useRef();

    function clickHandler() {

        const inputElement = inputRef.current;
        const newEntries = {
            name : inputElement.value,
            complete : false,
            id: uuidv4()
        }

        const newInitialEntries = JSON.parse(JSON.stringify(prop.entries));
        newInitialEntries.push(newEntries);
        prop.setEntries(newInitialEntries);
    }

    return(
        <section className="form">
            <input className="inputText" ref={inputRef} type="text" placeholder="New task" 
            onKeyPress={(e) => {if(e.key == "Enter") {
                clickHandler();
            }}}
            />
            <input className="formButton" type ="submit" onClick={clickHandler} />
        </section>
    )
}

export default Newentry