import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Container,
  Box,
  Stack,
  Paper,
  Drawer,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import image from '../static/images/markus-spiske-qhgtBITGZeI-unsplash.jpg';
import NoteForm from '../components/NotesComponents/NoteForm';
import key from 'weak-key';
import DialogAlert from '../helpers/DialogAlert';

const handleNoteLocalStorage = () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    return JSON.parse(savedNotes);
  }
  return [];
};

const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({ id: '', title: '', noteData: '' });
  const [notes, setNotes] = useState(() => handleNoteLocalStorage());
  const [error, setError] = useState(null);
  ///modal
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  const handleNewNote = (event) => {
    setNote({
      ...note,
      id: Math.random(),
      [event.target.name]: event.target.value,
    });
  };
  const addNote = (event) => {
    event.preventDefault();
    if (note.title === '' && note.noteData === '') {
      setOpenModal(true);
      return setError('Fill up all inputs');
    }
    setNotes([...notes, note]);
    setNote({ title: '', noteData: '' });
    setIsOpen(false);
  };

  const handleNoteDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Container sx={{ width: '100%' }}>
      {error ? (
        <DialogAlert
          error={error}
          openModal={openModal}
          handleModalClose={handleModalClose}
        />
      ) : null}{' '}
      {notes &&
        notes.map((note) => {
          return (
            <Card key={key(note)} sx={{ margin: 'auto', minWidth: '25%' }}>
              <CardMedia component="img" height="140" image={image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {note.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {note.noteData}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small">
                  <DeleteIcon onClick={() => handleNoteDelete(note.id)} />
                </Button>
              </CardActions>
            </Card>
          );
        })}
      <Box sx={{ margin: 'auto', paddingTop: '10px', minWidth: '25%' }}>
        <Stack>
          <Button
            sx={{ p: 0, minWidth: '100%' }}
            onClick={() => setIsOpen(true)}
          >
            <Paper sx={{ minWidth: '100%' }}>
              <Add />
            </Paper>
          </Button>
        </Stack>
      </Box>
      <Drawer
        sx={{ width: '25%' }}
        anchor={'right'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <NoteForm
          sx={{ m: 2 }}
          handleNewNote={handleNewNote}
          note={note}
          addNote={addNote}
        />
      </Drawer>
    </Container>
  );
};

export default Notes;
