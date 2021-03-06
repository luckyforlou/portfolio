import './Footer.scss';

export default function Footer(){
    return(
        <section id="footer" className="flex">
        <footer>
        <ul id="footerNav" className="flex flex-row">
          <li>
              <a href="">inst</a>
          </li>
          <li>
              <a href="">art</a>
          </li>
          <li>
              <a href="">twitt</a>
          </li>
        
        </ul>
        </footer>
      </section>
    );
}