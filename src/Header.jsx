import './Header.scss';
import NavBar from './Nav';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default function Header() {
return (
  <Router>
<section id="header">

  

  <div className=" navBar container mx-auto p-5">
    <nav uk-sticky="show-on-up: true; animation: uk-animation-slide-top;" className="flex justify-between">
      <div>
      <Link to="/">Logo</Link>
      </div>
      <NavBar></NavBar>
      
     
    </nav> 
  </div>

  <div uk-parallax="bgy: -200" className="image"></div>

</section></Router>
);
}