import { Box, IconButton, Typography, Grid, Input } from '@mui/material';
import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export const Camera = () => {
  const [source, setSource] = useState('');
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  return (
    <Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5">
          Capture your image
        </Typography>
        {source && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }} border={1}>
            <img src={source} alt="from camera"></img>
          </Box>
        )}
        <Input
          sx={{ display: 'none' }}
          accept="image/*"
          id="icon-button-file"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <CameraAltIcon fontSize="large" color="primary" />
          </IconButton>
        </label>
      </Grid>
    </Grid>
  );
};
export { Camera as default } from './Camera.js';
