import React, { Component } from 'react';
 
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Nav.scss';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <Router>
      <ResponsiveMenu
        menuOpenButton={<MenuIcon/>}
        menuCloseButton={<CloseIcon/>}
        changeMenuOn="500px"
        largeMenuClassName="flex largeMenu"
        smallMenuClassName="flex smallMenu"
        menu={
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        }
      />
    </Router>
  );
}
}


