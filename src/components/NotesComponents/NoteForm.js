import React from 'react';
import { Button, Typography, TextField, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
const NoteForm = ({ handleNewNote, addNote, note }) => {
  const { t } = useTranslation();
  return (
    <form
      component="form"
      sx={{ width: '100%' }}
      onChange={(e) => handleNewNote(e)}
      onSubmit={(e) => addNote(e)}
    >
      <Typography variant="h5" component="h5" sx={{ margin: 2, padding: 1 }}>
        {t('app_note_title')}
      </Typography>{' '}
      <Divider sx={{ width: '80%' }} />
      <TextField
        sx={{ margin: 2, padding: 1 }}
        id="note-title"
        variant="standard"
        label={t('app_note_label_title')}
        name="title"
        value={note.title}
      />
      <br />
      <TextField
        id="note-content"
        variant="standard"
        label={t('app_note_label_note')}
        name="noteData"
        onChange={handleNewNote}
        value={note.noteData}
        sx={{ margin: 2, padding: 1 }}
      />
      <Button type="submit" variant="outlined" sx={{ m: 2, minWidth: '55%' }}>
        {t('app_note_button')}
      </Button>
    </form>
  );
};

export default NoteForm;
