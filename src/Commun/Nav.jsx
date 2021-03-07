
import {
  Link
} from "react-router-dom";
import NavBar from '../Commun/NavBurger';

export default function HeaderIndex() {
return (



<div className=" navBar container mx-auto p-5">
    <nav uk-sticky="show-on-up: true; animation: uk-animation-slide-top;" className="flex justify-between">
      <div>
      <Link to="/">Logo</Link>
      </div>
      <NavBar></NavBar>
      
     
    </nav> 
  </div>
);
}