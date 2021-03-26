import {
Link
} from "react-router-dom";
import{entriesAll} from '../services/contentfulConfig'




export default function PortfolioAll() {
console.log(entriesAll);
return (
<div className="portfolioFiltre">
    <ul className="uk-subnav uk-subnav-pill flex content-center justify-center ">
        <li className="filtreNav">
            <Link to="/portfolio">Tout</Link>
        </li>
        <li className="filtreNav">
            <Link to="/illustration">Illustrations</Link>
        </li>
        <li className="filtreNav">
            <Link to="/games">Jeux</Link>
        </li>
        <li className="filtreNav">
            <Link to="/3d">3D</Link>
        </li>
    </ul>

    <ul className="portfolioImg flex content-center justify-center flex-wrap">
      
         {entriesAll.map(entry => <li uk-lightbox="animation: fade">  <div>
                <a href={entry.file.url}>
                    <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src={entry.file.url} alt="1" />
                </a>
            </div></li>)}
     
    </ul>
</div>
);
}