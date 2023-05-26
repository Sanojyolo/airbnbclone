import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from '../src/themes/AppThemeProvider'
import AppThemeProvider from '../src/themes/AppThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppThemeProvider>
<App />
</AppThemeProvider>
   
  

);


