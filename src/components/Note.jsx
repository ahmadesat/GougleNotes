import React from "react";
import DeleteIcon from "./DeleteIcon";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        type="button"
        className="btn"
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
