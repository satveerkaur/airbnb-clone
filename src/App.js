import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card'
import card1 from './images/katie-zaferes.png'
// import star from './images/star.png'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card
        img ={card1}
        star ="star.png"
        rating="5.0"
        reviews={6}
        country="USA"
        title="Life lessons with Kaite Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
