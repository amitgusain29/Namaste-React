import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Hello World</span>

const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX😎
    </h1>
);

const Title = () => (
    <div>
        <h2 className="title">Hello Title</h2>
    </div>
)

const number = 1000;

const HeadingComponent3 = () => (
    <div id="container">
        <h2>{number}</h2>
        <h2>{100 + 200}</h2>
        {console.log("hello Amit")}
        {heading}
        {elem}
        <Title />
        <Title /> 
        {/* or we can use <Title></Title> both are same we can write how many times we want */}
        {Title()} 
        {/* or we can call a function as well */}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

// Even if any API passes some malicious data into your code JSX will escape it or sanitize it, Any data which is coming inside the curly braces it won't blindly run it, it will sanitize it and then pass it.

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent3 />)

