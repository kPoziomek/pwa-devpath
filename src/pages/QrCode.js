import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Box, Typography, Grid } from '@mui/material';
export const QrCode = () => {
  const [data, setData] = useState('No result');

  return (
    <>
      <Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h5">
            Capture your qr !
          </Typography>
          <Box
            sx={{
              margin: 'auto',
              justifyContent: 'center',
              width: '50%',
            }}
            border={3}
          >
            <QrReader
              constraints={{
                facingMode: 'environment',
              }}
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
              style={{
                margin: 'auto',
                justifyContent: 'center',
                width: '50%',
              }}
            />
          </Box>

          <Typography>{data}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export { QrCode as default } from './QrCode.js';
