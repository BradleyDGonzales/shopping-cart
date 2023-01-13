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
import { useEffect, useState } from "react";
const App = () => {

  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([{}])

  const sendItemToCart = (item, amt, price) => {
    console.log('myprice', price);
    const itemImg = document.getElementById(item);
    if (cartItems.length === 1) {
      setCartItems(
        [
          ...cartItems,
          {
            img: itemImg.src,
            quantity: amt,
            price: price,
            subtotal: price * amt,
          }
        ]
      )
    }
    else {
      if (cartItems.some(e => e.img === itemImg.src)) {
        const updatedQuantity = cartItems.map(existingItem => {
          if (existingItem.img === itemImg.src) {
            return {
              ...existingItem,
              quantity: existingItem.quantity + amt,
              price: price,
              subtotal: price * (existingItem.quantity + amt)
            }
          }
          else {
            return existingItem;
          }
        })
        setCartItems(updatedQuantity)
      }
      else {
        setCartItems(
          [
            ...cartItems,
            {
              img: itemImg.src,
              quantity: amt,
              price: price,
              subtotal: price * amt,
            }
          ]
        )
      }
    }
  }

  const handleImgClickOnCart = (itemToChange) => {
    const itemID = itemToChange.target.id.slice(-1);
    const originalPrice = document.getElementById(`price${itemID}`);
    console.log(originalPrice);
    console.log(itemID)
    if (itemToChange.target.alt === "minus") {
      const selectInput = document.getElementById(`input${itemID}`);
      selectInput.value = Number(selectInput.value) - 1;
      const selectKnifeImg = document.getElementById(`item${itemID}`)
      console.log(selectKnifeImg.src)
      setCount(count - 1);
      const updatedCartItem = cartItems.map(existingItem => {
        if (existingItem.img === selectKnifeImg.src) {
          return {
            ...existingItem,
            quantity: existingItem.quantity - 1,
            price: existingItem.price,
            subtotal: existingItem.price * (existingItem.quantity - 1)
          }
        }
        else {
          return existingItem;
        }
      });
      setCartItems(updatedCartItem);
    }
    else if (itemToChange.target.alt === "plus" ) {
      const selectInput = document.getElementById(`input${itemID}`);
      selectInput.value = Number(selectInput.value) + 1;
      const selectKnifeImg = document.getElementById(`item${itemID}`)
      console.log(selectKnifeImg.src)
      setCount(count + 1);
      const updatedCartItem = cartItems.map(existingItem => {
        if (existingItem.img === selectKnifeImg.src) {
          return {
            ...existingItem,
            quantity: existingItem.quantity + 1,
            price: existingItem.price,
            subtotal: existingItem.price * (existingItem.quantity + 1)
          }
        }
        else {
          return existingItem;
        }
      });
      setCartItems(updatedCartItem);
    }
  }
  const handleClick = (item) => {
    const priceToAdd = document.getElementsByClassName("knives-price")[item.target.id.slice(-1)].innerHTML.slice(1);
    const itemToAdd = document.getElementsByClassName("knives-images")[item.target.id.slice(-1)].id;
    console.log(`the item is ${itemToAdd}`)
    const amountToAdd = document.getElementById(`input${item.target.id.slice(-1)}`)
    console.log('amt:', amountToAdd.value);
    if (Number(amountToAdd.value) !== 0) {
      setCount(count + Number(amountToAdd.value))
      sendItemToCart(itemToAdd, Number(amountToAdd.value), Number(priceToAdd));
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation count={count} />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/bowie-knives' element={<BowieKnives handleClick={handleClick}/>} />
          <Route path='/butterfly-knives' element={<ButterflyKnives handleClick={handleClick} />} />
          <Route path='/stiletto-knives' element={<StilettoKnives handleClick={handleClick} />} />
          <Route path='/tactical-knives' element={<TacticalKnives handleClick={handleClick} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} handleImgClickOnCart={handleImgClickOnCart}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
