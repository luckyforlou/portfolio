import React, { Component } from "react";

import ResponsiveMenu from "react-responsive-navbar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./NavBurger.scss";

import { Link } from "react-router-dom";
const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
export default class Nav extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<MenuIcon />}
        menuCloseButton={<CloseIcon />}
        changeMenuOn="600px"
        largeMenuClassName="flex largeMenu"
        smallMenuClassName="flex smallMenu"
        menu={
          <ul>
            <li>
              <Link to="/about">À Propos</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li id="contactLink">
              <Mailto email="sabrina-ales@hotmail.com">
                Contact<span uk-icon="mail"></span>
              </Mailto>
            </li>
          </ul>
        }
      />
    );
  }
}
