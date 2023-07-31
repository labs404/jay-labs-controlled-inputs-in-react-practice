import React, { useState } from "react";

const ControlledInput = () => {
    const [input, setInput] = useState("");

    function handleInput() {
        if (input == "") {
            alert("Input cannot be empty!")
        };
        if (input.toLowerCase() == "steve") {
            alert("nope! not today, Steve!!")
        }
    };

    return (
        <>
            <h1>Value that you are inputting: {input}</h1>
            <input 
                type="text" 
                className="controlled-input"
                onChange= {(e) => setInput(e.target.value)}
                value={input}
            />
            <button 
                className="validate"
                onClick={handleInput}
            >Validate</button>
        </>
    );
};

export default ControlledInput;