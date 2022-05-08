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
      img ={item.coverImg}
      rating={item.stats.rating}
      reviews={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
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
