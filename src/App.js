import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';
import BowieKnives from './components/BowieKnives';
import ButterflyKnives from './components/ButterflyKnives'
import StilettoKnives from './components/StilettoKnives';
import TacticalKnives from './components/TacticalKnives';
import Cart from "./components/Cart";
import { useEffect, useState} from "react";
const App = () => {

  const [count, setCount] = useState(0);

  const handleClick = (item) => {
    const itemToAdd = document.getElementById(`input${item.target.id.slice(-1)}`)
    setCount(count + parseInt(itemToAdd.value))
  }
  console.log(count);
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation count={count}/>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/bowie-knives' element={<BowieKnives />} />
          <Route path='/butterfly-knives' element={<ButterflyKnives handleClick={handleClick}/>} /> 
          <Route path='/stiletto-knives' element={<StilettoKnives />} />
          <Route path='/tactical-knives' element={<TacticalKnives />} /> 
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
