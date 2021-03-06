import './Appli.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Index from './Index/Index';


export default function Appli() {
  return (
    <Router>
          <div className="Appli">
     <Index/>
    </div>

    <Switch>
          <Route exact path="/">
          <Home/>
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
     <Index/>
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
 