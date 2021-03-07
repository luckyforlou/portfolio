import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArtstation, faInstagram, faItchIo, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
        <section id="footer" className="flex">
        <footer className="container">
            <div className="flex justify-between">

        <p>&copy; Sabrina Ales 2021</p>

        <ul id="footerNav" className="flex flex-row">
          <li>
              <a  target="blank" href="https://www.instagram.com/pxales/"><FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          <li>
              <a target="blank"href="https://www.artstation.com/pxales"><FontAwesomeIcon icon={faArtstation} /></a>
          </li>
          <li>
              <a target="blank" href="https://pxales.itch.io/"><FontAwesomeIcon icon={faItchIo} /></a>
          </li>
          <li>
              <a target="blank" href="https://twitter.com/pxales"><FontAwesomeIcon icon={faTwitter} /></a>
          </li>
        
        </ul>
        </div>
        </footer>
      </section>
    );
}