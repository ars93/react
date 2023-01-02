import React from "react";
import ReactDOM from "react-dom/client";

const heaading = React.createElement("h1", { id: "title", key: "h1" }, "Hello All");
const heaading2 = React.createElement("h2", { id: "title", key: "h2" }, "Hello All");
const container = React.createElement("div", { key: "h3" }, [heaading, heaading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);