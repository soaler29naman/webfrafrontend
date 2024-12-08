import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';
import SimilarItems from './components/SimilarItems';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SimilarItems/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
