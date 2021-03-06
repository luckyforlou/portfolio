import './Appli.scss';
import Header from './Header';
import AboutIndex from './AboutIndex';
import AboutIndexText from './AboutIndexText';
import Portfolio from './Portfolio';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Appli() {
  return (
    <Router>
          <div className="Appli">
      <Header/>
      <div className="about flex"> <AboutIndex></AboutIndex> <AboutIndexText></AboutIndexText></div> 
      <Portfolio></Portfolio>
      <Footer>
      </Footer>
    </div>

    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      
    </Router>


  );
}


// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}
 