import { useState, useEffect } from "react";


const User = ({ name, location }) => {


    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Function Interval");
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("Function Clear");
        }
    }, [])



    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {name}</h2>
            <button onClick={() => {
                setCount(count + 1)
                setCount2(count2 + 1)
            }}>
                Count Increase
            </button>
            <h3>Location: {location}</h3>
            <h4>Contact: @amitgusain29</h4>
        </div>
    )
};

export default User;