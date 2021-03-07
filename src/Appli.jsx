import './Appli.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './Index/Index';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
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
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>

      <Footer></Footer>
    </Router>


  );
}


// You can think of these components as "pages"
// in your app.

// function Home() {
//   return (
//     <div>
//      <Index/>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h2>Contact</h2>
//     </div>
//   );
// }
 