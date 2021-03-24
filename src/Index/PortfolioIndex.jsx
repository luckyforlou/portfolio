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

    <h1>Voir Projets</h1>
    <Link to="/games">
    <div uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Games} alt="" />
            <div
                className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">Jeux</p>
            </div>
        </div>
    </div>
    </Link>
    <Link to="/illustration">
    <div uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Illu} alt="" />
            <div
                className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">Illustrations</p>
            </div>
        </div>
    </div>
    </Link>
    <Link to="/3d">
    <div uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Aster} alt="" />
            <div
                className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">3D</p>
            </div>
        </div>
    </div>
    </Link>

</section>
);
}