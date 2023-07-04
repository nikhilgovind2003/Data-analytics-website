import './App.css';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import HeroSecion from './components/HeroSecion';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSecion />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
