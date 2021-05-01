import React from 'react';
import Header from "./components/Header/Header";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route component ={About} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
