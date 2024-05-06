import React from 'react';
import '../styles/App.css';
import Banner from './Banner';
import Cart from './cart';
import ShoppingList from './ShoppingList';

function App() {
  return (<React.Fragment>
   <Banner />
   <Cart />
   </React.Fragment>
  );
}

export default App;
