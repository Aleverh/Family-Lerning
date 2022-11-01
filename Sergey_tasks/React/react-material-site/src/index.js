import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { typography } from '@mui/system';
import { grey, orange } from '@mui/material/colors';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: '#64ff1d',
        },
    },
    typography: {
        myVar: {
            fontSize: '4rem',
            color: grey[500],
        },
    },
});

root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    // </React.StrictMode>
);
