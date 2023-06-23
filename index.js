import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Cont from './Cont';
import Footer from './Footer';
import Content from './Content';
import Product from './Product';
import Class from './Class';
import Api from './Api'
import {BrowserRouter,Route,Routes} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
const WebName='Ship'
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Cont/>
    <Routes>
    <Route path="/product" element={<Api/>} />
    <Route path="/product/:id" element={<Product />}/>
    </Routes>
    </BrowserRouter>
   <Footer/>
   <Class/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
