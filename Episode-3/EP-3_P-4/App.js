import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// const heading = <h1 id="heading">Namaste React using JSX😎</h1>

const Heading = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX😎
    </h1>
);

// JSX Attributes
{/* <div data-custom-attribute="someValue">Custom Attribute</div> */}
{/* <div className="container"></div> */}
{/* <label htmlFor="name">Name:</label> */}
{/* <input type="checkbox" checked={true} /> */}
{/* <button disabled={true}>Submit</button> */}

// const message = "Hello";
{/* <input value={message} /> */}


// const divStyle = {
//     backgroundColor: 'blue',
//     fontSize: '14px',
//   };
//   <div style={divStyle}></div>


{/* <button onClick={handleClick}>Click Me</button> */}


// Spread attributes
// const props = {
//     type: "text",
//     value: "Name",
//     placeholder: "Enter your name",
//   };
//   <input {...props} />
  

// const userName = "John";
// <h1>Hello, {userName}!</h1>

  

// React Component
// 1. Class based component - OLD
// 2. Functional Based Component - NEW

// React Functional Component - Just a normal JS function, React component starts with Capital Letter.
// Definition: A function which is returning some piece of code of jsx is a Functional component.


// Every syntax are valid syntax
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}

const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>


// component composition: When composing to components in one another is known as component composition.
const HeadingComponent3 = () => (
    <div id="container">
        <Heading />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

// if the variable is in this <variable/> type of tags only then babel knows it and understands it. 
root.render(<HeadingComponent3 />)

