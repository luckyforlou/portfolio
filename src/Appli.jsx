import './Appli.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './Index/Index';
import About from './About/About';
import Contact from './Contact/Contact';
import PortfolioAll from './Portfolio/PortfolioAll';
import PortfolioIllu from './Portfolio/PortfolioIllu';
import Portfolio3D from './Portfolio/Portfolio3d';
import PortfolioGames from './Portfolio/PortfolioGames';
import Footer from './Commun/Footer';
import Nav from './Commun/Nav'


export default function Appli() {
  return (
    <Router>
          <div className="Appli">
          <Nav></Nav>
 
      <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/about"><About></About></Route>
          <Route exact path="/portfolio" component={PortfolioAll}/>
          <Route exact path="/illustration" component={PortfolioIllu}/>
          <Route exact path="/games" component={PortfolioGames}/>
          <Route exact path="/3d" component={Portfolio3D}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>

      <Footer></Footer>
    </Router>


  );
}
