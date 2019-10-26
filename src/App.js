import React from 'react';
import Navbar from './components/Nav';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">

            <Navbar/>
            <section className="container">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </section>

        </div>
      </Router>
  );
}

export default App;
