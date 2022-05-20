import React from 'react';
import { Button, Typography, TextField, Divider } from '@mui/material';

const NoteForm = ({ handleNewNote, addNote, note }) => {
  return (
    <form
      component="form"
      sx={{ p: 2, width: '100%' }}
      onChange={(e) => handleNewNote(e)}
      onSubmit={(e) => addNote(e)}
    >
      <Typography variant="h5" component="h5">
        New Note
      </Typography>{' '}
      <Divider sx={{ width: '80%' }} />
      <TextField
        id="note-title"
        variant="standard"
        label="Note Title"
        name="title"
        value={note.title}
      />
      <br />
      <TextField
        id="note-content"
        variant="standard"
        label="Write Your Note"
        name="noteData"
        onChange={handleNewNote}
        value={note.noteData}
      />
      <Button
        type="submit"
        variant="outlined"
        sx={{ mt: 2, pr: 1, minWidth: '55%' }}
      >
        Add
      </Button>
    </form>
  );
};

export default NoteForm;
