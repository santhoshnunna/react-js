/**
 *  <div id="parent">
 *     <div id="child1">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h2>
 *     </div>
 *      <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h2 tag</h2>
 *      </div>
 *   </div>
 * 
 * ReactElement(Object) => HTML(Browser understands)
 * 
 */
//React.createElement() => Object => HTMLElement(render)

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{ id: "parent" },
    [
    React.createElement(
        "div",{ id: "child1" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
        ),
    React.createElement(
        "div",{ id: "child2" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h2 tag")
        ]
    )
    ]
);

//JSX creates our life is easy to create elements 

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //It will replace with the root

//JSX => Java Script syntax for creating React Elements
//JSX => is not HTML inside JS ; HTML like or XML like syntax
//JSX (transpiled before it reaches the Java Script Engine) - PARCEL - Babel package
//JSX => React.createElement() => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = <h1> Welcome to React!</h1>;
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(jsxHeading); //It will replace with the root
