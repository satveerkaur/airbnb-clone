import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data'
// import card1 from './images/katie-zaferes.png'
// import star from './images/star.png'

function App() {
  const cards = data.map(item => {
      return (<Card
      key={item.id}
      // item={item}  //while using this props.item.property
      {...item}  //this automatically created items like item.id, item.coverImg
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='cards__list'>
      {cards}
      </section>
      
    </div>
  );
}

export default App;
