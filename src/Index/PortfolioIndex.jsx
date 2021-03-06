import './PortfolioIndex.scss';
import Banner from '../media/banner.png';


export default function Header() {
return (
<section id="portfolio" className="flex">

  <h1>View Projects</h1>

<div className="typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Banner} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">Games</p>
            </div>
        </div>
    </div>
    
<div className=" typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Banner} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">Illustration</p>
            </div>
        </div>
    </div>
    
<div className=" typeProject uk-text-center">
        <div className="uk-inline-clip uk-transition-toggle">
            <img src={Banner} alt=""/>
            <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                <p className="uk-h4 uk-margin-remove">3D</p>
            </div>
        </div>
    </div>

  {/* <div uk-lightbox="animation: fade">
    <div>
      <a href="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif">
         <img src="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif" alt=""/>
         </a>
    </div>
  </div>

  <div uk-lightbox="animation: fade">
    <div>
      <a href="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif">
         <img src="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif" alt=""/>
         </a>
    </div>
  </div>

  <div uk-lightbox="animation: fade">
    <div>
      <a href="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif">
         <img src="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif" alt=""/>
         </a>
    </div>
  </div> */}

</section>
);
}