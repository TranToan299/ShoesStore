import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './Component/Modal';
import Shopshoes from 
'./Component/Shopshoes';
import ShopShoesTemplate from './Component/ShopShoesTemplate';
import Cart from './Component/Cart';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='' element={<ShopShoesTemplate/>}>
      <Route index element= {<Shopshoes/>}/>
      {/* <Route path='cart' element = {<Cart/>}/> */}
    </Route>
  </Routes>
  </BrowserRouter>
);

