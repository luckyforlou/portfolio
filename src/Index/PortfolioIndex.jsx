import './PortfolioIndex.scss';
import Banner from '../media/banner.png';
import {
  Link
} from "react-router-dom";


export default function Header() {
return (
<section id="portfolio" className="flex">

  <h1>View Projects</h1>

<div className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Banner} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove"><Link to="/games">Games</Link></p>
            </div>
        </div>
    </div>
    
<div className=" typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Banner} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove"><Link to="/illustration">Illustration</Link></p>
            </div>
        </div>
    </div>
    
<div className=" typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Banner} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove"><Link to="/3d">3D</Link></p>
            </div>
        </div>
    </div>

  
</section>
);
}