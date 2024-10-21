import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React 😎")

// console.log(heading);

// JSX (transpiled before it reaches the JS engine: Transpile means this code is converted to the code that browsers can understand, that react can understand), JSX is like HTML or XML , transpiled by parcel and done by babel package (babel is a JS compiler and transpiler, take jsx converts into code that js and react understands) (babel is not created by facebook)


// JSX =>Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)


// Babel: Babel transpiles ES6 code to a code that older browsers understand, babel is a npm package, that takes a piece of code and different type of code converts into others. 
// Parses a code token and create a abstract syntax tree(AST) and then converts it is a huge algorithm.

// JSX: jsx is like html but not same as html when using attributes in jsx we use camelCase, and when jsx code is written if it is in oneline then it is normal but if using multiple lines then have to write inside () round brackets.

const jsxHeading = <h1 id="heading" className="head" tabIndex="5">Namaste React using JSX😎</h1>
// const jsxHeading = (<h1 id="heading">
//     Namaste React using JSX😎
// </h1>);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading) 