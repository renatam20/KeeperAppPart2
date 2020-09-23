import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import notes from "./notes";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

const newNotes = notes.map(function (notesRendered) {
  return notesRendered;
});

console.log(newNotes);
