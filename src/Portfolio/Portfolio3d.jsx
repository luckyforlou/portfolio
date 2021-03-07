import {
    Link
  } from "react-router-dom";
  
  export default function Portfolio3D() {
      return (
<div className="portfolioFiltre">
    <ul className="uk-subnav uk-subnav-pill">
        <li>
            <Link to="/portfolio">All</Link>
        </li>
        <li>
            <Link to="/illustration">Illustration</Link>
        </li>
        <li>
            <Link to="/games">Games</Link>
        </li>
        <li>
            <Link to="/3d">3D</Link>
        </li>
    </ul>
    <ul>

      <li>
          
          <img src="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif" alt="1"/>
        
      </li>

    </ul>
</div>
    
      );
      }