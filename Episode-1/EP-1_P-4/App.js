const root = ReactDOM.createRoot(document.getElementById("root"))

const heading = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "Im a h1 tag")));

// React.createElement is object -> which HTML(Browsers understands)
console.log(heading);

root.render(heading)

const root2 = ReactDOM.createRoot(document.getElementById("root2")) //createRoot is responsible for assigning root inside react.

// tedious and complicated way
const heading2 = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Im a h1 tag"),
        React.createElement("h2", {}, "Im a h2 tag")]),

    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Im a h1 tag"),
        React.createElement("h2", {}, "Im a h2 tag")])])

console.log(heading2);

root2.render(heading2) //if any tags are already present inside the root tag, the render will replace the tag with the new tags. 

// JSX

