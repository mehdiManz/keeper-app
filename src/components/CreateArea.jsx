import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleContentClick() {
    setExpanded(true);
  }

  function submitNote(event) {
    if (note.title.trim() !== "" || note.content.trim() !== "") {
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: ""
    });
    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleContentClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} // Adjust the number of rows based on isExpanded state
        />
        <Zoom in={isExpanded}>
          <Fab color="primary" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
