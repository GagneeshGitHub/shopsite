import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import CartCheckout from './components/CartCheckout';
import { useState } from 'react';
import ThankYouPage from './components/ThankYouPage';

function App() {

  const [myCart, setCart] = useState([])

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<MainPage myCart={myCart} setCart={setCart}/> }>
        </Route>
        <Route path='/checkout' element={<CartCheckout myCart={myCart} setCart={setCart}/>}>
        </Route>
        <Route path="/thankyou" element={<ThankYouPage/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
