import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import BowieKnives from './/BowieKnives'
const Shop = () => {
    return (
        <div className='knives-list'>
            <Link to='/bowie-knives'>
                <div>Shop for Bowie Knives</div>
            </Link>
            <Link to='/butterfly-knives'>
                <div>Shop for Butterfly Knives</div>
            </Link>
            <Link to='/stiletto-knives'>
                <div>Shop for Stiletto Knives</div>
            </Link>
            <Link to='/tactical-knives'>
                <div>Shop for Tactical Knives</div>
            </Link>
        </div>
    )
}


/*
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
*/
export default Shop;