import './PortfolioIndex.scss';
import Games from '../media/games.png';
import Illu from '../media/illu.png';
import Aster from '../media/Aster2.png'
import {
  Link
} from "react-router-dom";


export default function Header() {
return (
<section id="portfolio" className="flex">

  <h1>View Projects</h1>

<div uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Games} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove"><Link to="/games">Games</Link></p>
            </div>
        </div>
    </div>
    
<div uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Illu} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove"><Link to="/illustration">Illustration</Link></p>
            </div>
        </div>
    </div>
    
<div uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Aster} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove"><Link to="/3d">3D</Link></p>
            </div>
        </div>
    </div>

  
</section>
);
}