import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function Note({ id, title, content, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
