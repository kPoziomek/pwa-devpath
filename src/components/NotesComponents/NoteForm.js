import React from 'react';
import { Button, Typography, TextField, Divider } from '@mui/material';

const NoteForm = ({ handleNewNote, addNote, note }) => {
  return (
    <form
      component="form"
      sx={{ width: '100%' }}
      onChange={(e) => handleNewNote(e)}
      onSubmit={(e) => addNote(e)}
    >
      <Typography variant="h5" component="h5" sx={{ margin: 2, padding: 1 }}>
        New Note
      </Typography>{' '}
      <Divider sx={{ width: '80%' }} />
      <TextField
        sx={{ margin: 2, padding: 1 }}
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
        sx={{ margin: 2, padding: 1 }}
      />
      <Button type="submit" variant="outlined" sx={{ m: 2, minWidth: '55%' }}>
        Add
      </Button>
    </form>
  );
};

export default NoteForm;
