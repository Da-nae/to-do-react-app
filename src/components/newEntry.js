import React, { useRef } from "react";

function Newentry() {
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;

        // Do something with inputElement...
        console.log(inputElement.value);
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