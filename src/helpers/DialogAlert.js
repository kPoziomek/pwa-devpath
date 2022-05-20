import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import React from 'react';

const DialogAlert = ({ error, openModal, handleModalClose }) => {
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={() => handleModalClose()}
        aria-labelledby="alert-dialog"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog">{'fill up all data'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalClose()} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogAlert;
