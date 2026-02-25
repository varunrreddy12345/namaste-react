
const parent = React.createElement("div",{id: "parent"},[
React.createElement("div",{id: "child"},[
React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag"),    
]),


React.createElement("div",{id: "child2"}, [
    React.createElement("h1",{}, "I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag"),
]),
]);

 //jsx



const heading = React.createElement("h1", 
    {id: "heading", xyzz: "abcd"},"hello world to react");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);