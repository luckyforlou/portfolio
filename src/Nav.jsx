import React, { Component } from 'react';
 
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Nav.scss';
 
export default class Nav extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<MenuIcon/>}
        menuCloseButton={<CloseIcon/>}
        changeMenuOn="500px"
        largeMenuClassName="flex largeMenu"
        smallMenuClassName="flex smallMenu"
        menu={
            <ul>
              <li><a>About</a></li>
              <li><a>Porfolio</a></li>
              <li><a>Contact</a></li>
            </ul>
        }
      />
    );
  }
}