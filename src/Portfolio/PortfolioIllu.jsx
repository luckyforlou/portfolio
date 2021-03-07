import {
    Link
  } from "react-router-dom";
  
  export default function PortfolioIllu() {
      return (
  
   <div id="filtrage" uk-filter="target: .js-filter" className="uk-animation-slide-bottom-small portfolioFiltre">
       <h1>YOU ARE IN ILLU</h1>

  <ul className="uk-subnav uk-subnav-pill uk-animation-slide-right">
         <li uk-filter-control="[data-tags*='Tous']"><Link to="/portfolio/all">All</Link></li>
         <li className="uk-active" uk-filter-control="[data-tags*='Illus']"><Link to="/portfolio/illustration">Illustration</Link></li>
         <li uk-filter-control="[data-tags*='Games']"><Link to="/portfolio/games">Games</Link></li>
         <li uk-filter-control="[data-tags*='3D']"><Link to="/portfolio/3d">3D</Link></li>
         </ul> 
         <ul className="js-filter">
            <li data-tags="Tous Illus">
             
                <img src="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif" alt="1"/>
              
            </li>
            <li data-tags="Tous Games">
             
             <img src="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif" alt="1"/>
           
         </li>
         <li data-tags="Tous 3D">
             
             <img src="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif" alt="1"/>
           
         </li>
            
          </ul>
          </div>
  
  
    
    
      );
      }