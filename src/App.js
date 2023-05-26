
import { Fragment } from 'react';
import './App.css';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <CssBaseline/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
      }}>
        <Box>
          <Header/>
        </Box>

      </Box>
    </Fragment>
  );
}

export default App;
