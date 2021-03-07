
import {
  Link
} from "react-router-dom";
import NavBar from '../Commun/NavBurger';
import './Nav.scss';

export default function HeaderIndex() {
return (



<div className=" navBar container">
    <nav uk-sticky="show-on-up: true; animation: uk-animation-slide-top; width:100%;" className="flex justify-between">
      <div>
      <Link to="/">Logo</Link>
      </div>
      <NavBar></NavBar>
      
     
    </nav> 
  </div>
);
}