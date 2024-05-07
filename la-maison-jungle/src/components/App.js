import React from 'react';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer';
import Cart from './cart';
import '../styles/App.css';
import { useState } from 'react'

function App() {
	const [cart, updateCart] = useState([])

  return (<React.Fragment>
   <Banner>
			<img src={logo} alt='La maison jungle' className='lmj-logo' />
			<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>

			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>

			<Footer />
   </React.Fragment>
  );
}

export default App;
