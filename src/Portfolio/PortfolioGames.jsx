import {
Link
} from "react-router-dom";

export default function PortfolioGames() {
return (

<div className="portfolioFiltre">
    <ul className="uk-subnav uk-subnav-pill flex content-center justify-center">
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
    <ul className="flex content-center justify-center">

        <li>

            <img src="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif" alt="1" />

        </li>

    </ul>
</div>




);
}