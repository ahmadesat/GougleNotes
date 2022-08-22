import React, { useState } from "react";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNote(note);
  }

  return (
    <div className="rounded border shadow-sm my-3 mx-auto container w-50">
      <form onSubmit={handleSubmit} className="my-3 p-3">
        <input
          className="form-control my-3 w-25"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          className="form-control mb-3 w-50"
          name="content"
          placeholder="Content"
          onChange={handleChange}
          value={note.content}
        />
        <button className="btn btn-dark mb-3">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
