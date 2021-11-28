import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

export default function Loading() {
  return (
    <Box position="fixed" width="100%" height="100%">
      <Box position="fixed" left="50%" top="50%" translate="translate(-50%, -50%)">
        <CircularProgress/>
      </Box>
    </Box>
  );
}
