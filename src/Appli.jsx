import './Appli.scss';
import Header from './Header';
import About from './About';
import AboutText from './AboutText';
import Footer from './Footer';

export default function Appli() {
  return (
    <div className="Appli">
      <Header/>
      <div uk-parallax="bgy: -200" className="about flex"> <About></About> <AboutText></AboutText></div> 
      <Footer>
      </Footer>
    </div>
  );
}
