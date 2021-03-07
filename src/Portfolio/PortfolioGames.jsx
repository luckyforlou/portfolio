import {
Link
} from "react-router-dom";

export default function PortfolioGames() {
return (

<div className="portfolioFiltre">
    <ul className="uk-subnav uk-subnav-pill flex content-center justify-center">
        <li className="filtreNav">
            <Link to="/portfolio">All</Link>
        </li>
        <li className="filtreNav">
            <Link to="/illustration">Illustration</Link>
        </li>
        <li className="filtreNav">
            <Link to="/games">Games</Link>
        </li>
        <li className="filtreNav">
            <Link to="/3d">3D</Link>
        </li>
    </ul>
    <ul className=" portfolioImg flex content-center justify-center">

    <li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif">
        <img src="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif" alt="1" />
    </a>
</div>

</li>

    </ul>
</div>




);
}