
import { Fragment } from 'react';
import './App.css';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container'
import Header from './components/Header';
import OptionTab from './components/OptionTab';
import LocationCard from './components/LocationCard';
import Footer from './components/Footer';


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
          <OptionTab/>
          </Box>
          <Box sx={{
            display:'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll'
          }}>
          <Container maxWidth='xl' sx={{mb:3}}>
          <LocationCard/>
          </Container>

          </Box>
          <Footer/>
          
        </Box>

      
    </Fragment>
  );
}

export default App;
