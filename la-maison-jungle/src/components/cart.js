import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const monsteraPrice = 8
    /*const ivyPrice = 10
    const flowerPrice = 15*/
    const [cart, updateCart]= useState(0)

    return (
      <div className='lmj-cart'>
        <h2>Panier</h2>
           {/*<ul>
            <li>Monstera :{ monsteraPrice } euros</li>
            <li>Lierre :{ ivyPrice } euros</li>
            <li>Bouquet de fleurs :{ flowerPrice } euros</li>
          </ul>
          Total: {monsteraPrice + ivyPrice + flowerPrice } euros*/}

        <div>
          Monstera : {monsteraPrice} €
          <button onClick={()=> updateCart(cart + 1)}>
            ➕
          </button>
          <button onClick={()=> updateCart(cart - 1)}>
            ➖
          </button>
        </div>
        <h3>
          Total : {monsteraPrice * cart} €
        </h3>

      </div>
      )
}

export default Cart