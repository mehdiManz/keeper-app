import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (note.title !== "" || note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write down a thought"
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">➕</button>
      </form>
    </div>
  );
}

export default CreateArea;
