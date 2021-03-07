import './Footer.scss';
import Artstation from '../media/icons/artstation.png'
import Instagram from '../media/icons/instagram.png'
import Itch from '../media/icons/itch.png'
import Twitter from '../media/icons/twitter.png'

export default function Footer(){
    return(
        <section id="footer" className="flex">
        <footer className="container">
            <div className="flex justify-between">

        <p>&copy; Sabrina Ales 2021</p>

        <ul id="footerNav" className="flex flex-row">
          <li>
              <a  target="blank" href="https://www.instagram.com/pxales/"><img src={Instagram} alt="link to instagram profile"/></a>
          </li>
          <li>
              <a target="blank"href="https://www.artstation.com/pxales"><img src={Artstation} alt="link to artstation profile"/></a>
          </li>
          <li>
              <a target="blank" href="https://pxales.itch.io/"><img src={Itch} alt="link to itch.io profile"/></a>
          </li>
          <li>
              <a target="blank" href="https://twitter.com/pxales"><img src={Twitter} alt="link to twitter profile"/></a>
          </li>
        
        </ul>
        </div>
        </footer>
      </section>
    );
}