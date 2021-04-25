import './App.css';

import Header from "./components/Header/Header";
import css from "./components/Header/Header.css"
import MainPage from './components/MainPage/MainPage';
import MAINCSS from './components/MainPage/MainCSS.css';
import ContactForm from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>

    <Header />
    <MainPage />
    <ContactForm />
   
   
    </div>
  );
}

export default App;
