import { Link } from "react-router-dom";
import NavBar from "../Commun/NavBurger";
import "./Nav.scss";
import Logo from "../media/logo.gif";
export default function HeaderIndex() {
  return (
    <div className="w-full navBar container">
      <nav
        uk-sticky="show-on-up: true; animation: uk-animation-slide-top;"
        className=" w-full flex justify-between"
      >
        <div>
          <Link to="/">
            <img className="w-20" src={Logo} alt="Ales" />
          </Link>
        </div>
        <NavBar></NavBar>
      </nav>
    </div>
  );
}
