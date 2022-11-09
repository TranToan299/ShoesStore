import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shopshoes from 
'./Component/Shopshoes';
import ShopShoesTemplate from './Component/ShopShoesTemplate';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='' element={<ShopShoesTemplate/>}>

    </Route>
  </Routes>
  </BrowserRouter>
);

