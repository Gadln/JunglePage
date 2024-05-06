import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div className='lmj-cart'>
      <h2>Panier</h2>
        <ul>
          <li>Monstera :{ monsteraPrice } euros</li>
          <li>Lierre :{ ivyPrice } euros</li>
          <li>Bouquet de fleurs :{ flowerPrice } euros</li>
      </ul>
      Total: {monsteraPrice + ivyPrice + flowerPrice } euros
      </div>
      )
}

export default Cart