import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact'







function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
