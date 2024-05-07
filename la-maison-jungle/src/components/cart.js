import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const monsteraPrice = 8
    /*const ivyPrice = 10
    const flowerPrice = 15*/
    const [cart, updateCart]= useState(0)

    const [isOpen, setIsOpen]= useState(true)

    return isOpen ? (
      <div className='lmj-cart'>
        <button className='lmj-cart-toggle-button' onClick={()=> setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
           {/*<ul>
            <li>Monstera :{ monsteraPrice } euros</li>
            <li>Lierre :{ ivyPrice } euros</li>
            <li>Bouquet de fleurs :{ flowerPrice } euros</li>
          </ul>
          Total: {monsteraPrice + ivyPrice + flowerPrice } euros*/}

        <div className='lmj-cart'>
          Monstera : {monsteraPrice} €
          <button className='lmj-cart-add-button' onClick={()=> updateCart(cart + 1)}>
            ➕
          </button>
          <button className='lmj-cart-add-button' onClick={()=> updateCart(cart - 1)}>
            ➖
          </button>
        </div>
        <h3>
          Total : {monsteraPrice * cart} €
        </h3>
        <div>
          <button className='lmj-cart-toggle-button' onClick={()=> updateCart (0) }>
            Vider le panier
          </button>
        </div>

      </div>
      ) : (
        <div className='lmj-cart-closed'>
        <button className='lmj-cart-toggle-button' onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>
        </div>
      )
}

export default Cart