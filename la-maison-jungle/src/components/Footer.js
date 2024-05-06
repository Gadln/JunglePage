import '../styles/Footer.css'
import { useState } from 'react'

function Footer () {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    if (!inputValue.includes('@)')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
  }

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        Pour les passionné(e)s des plantes 🍀 🌵 🌿
      </div>
      <div className='lmj-footer-elem'>Laisser nous votre email : 
      </div>
      <input
        placeholder='Entrez votre email'
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur} //Qd on click en dehors du champ
        />
    </footer>
  )
}

export default Footer