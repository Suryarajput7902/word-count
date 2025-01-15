import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Wordcounter from './components/Wordcounter'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CakeSection from './components/CakeSection';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#864301',
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wordcounter />
  </React.StrictMode>
);

