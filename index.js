
const root = document.querySelector("#root");

const element = React.createElement("h1", { id: "titulo principal", className: "teste" }, "Hello World com React JS");

ReactDOM.render(element, root);

const t1 = React.createElement("h1", { id: "titulo principal" }, "Hello World com React JS");
const t2 = React.createElement("h4", { id: "titulo complementar" }, "Subtítulo");

const headLine = React.createElement("div", null, t1, t2)

ReactDOM.render(headLine, root)
