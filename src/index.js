import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Appli from './Appli';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Appli />
  </React.StrictMode>,
  document.getElementById('racine')
);
