import { useState } from "react";

const Contact = () => {
    // Correct destructuring for useState
    const [counter, setCounter] = useState(1);  // Initialized to 0 for counting

    const addValue = () => {
        setCounter(previous => previous + 1)
        setCounter(previous => previous + 1)
    }

    return (
        <div>
            <h1>Contact Us</h1>
            <p>Current Count: {counter}</p>
            <button onClick={addValue}>Count2: {counter}</button>
            <br />
            <button onClick={addValue}>Count1: {counter}</button>
        </div>
    );
}

export default Contact;
