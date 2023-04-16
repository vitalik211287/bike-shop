import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import { UserProvider } from './UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="bike-shop">
      <ThemeProvider theme={theme}>
      <UserProvider>
        <App />
       </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode> 
);
