import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home';
import GlobalStyles from './styles/globalStyles';

// retrieve root container element
const mainRoot = document.getElementById('root');

// render app
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  mainRoot,
);
