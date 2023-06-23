import React from 'react'
import './Style.css';
import Logo from './img/logo.png'
import Product from './Product';
import {Link} from "react-router-dom"
export default function Cont() {
  return (
    <div>
         <div className="head">
        <header className="App-header">
          <nav>
              <span className="logo"> <a href='#'>My Sh 
              <img src={Logo} alt="logo"/> P</a> </span>
           
  
            <span className='cat'>
              <ul>
                <li><Link to={'Product'}>Electronic</Link></li>
                <li className='clothe-option-container'><a href='#clothes'>Clothes</a>
                  <ul className='clothe-option'>
                    <li>Men's</li>
                    <li>Women's</li>
                  </ul>
                </li>
                <li><a href='#jewelery'>Jewelery</a></li>
              </ul>
  
            </span>
  
            <span className='searchbx'>
              <input type="search" placeholder='search...'></input>
              <button><i className="fa fa-magnifying-glass"></i></button>
            </span>
  
            <span className='gen'>
              <ul>
                <li title='You' className='dropdown-container'> <i className="fa fa-user"></i>
                  <ul className='dropdown-content'>
                    <li>SignUp/Login</li>
                    <li>Your Profile</li>
                    <li>Your Orders</li>
                    <li>Rewards</li>
                  </ul>
                </li>
                <li title='Your Wishlist'><i className="fa fa-heart"></i> </li>
                <a href="">
                  <span className="cart-icon">
                    <li title='Your Cart'><i className="far fa-cart-plus"></i> </li>
                  </span>
                </a>
  
              </ul>
            </span>
          </nav>
        </header>
      </div>






      <div className="content">
        <section className='banner'>
          <div className='banner-imgs'>
            <span className='img-container'>
              <img src='https://i.postimg.cc/QMDQKwHp/myshop-banner2-01.jpg'></img>
            </span>
  
            <span className='img-container'>
              <img src='https://i.postimg.cc/L8fD1HXQ/myshop-banner-01.jpg'></img>
            </span>
  
            <span className='img-container'>
              <img src='https://i.postimg.cc/1RKXzL4q/Untitled-1-01.jpg'></img>
            </span>
          </div>
        </section>

      
      </div>



    </div>
  )
}
