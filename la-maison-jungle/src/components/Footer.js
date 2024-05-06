import { useState} from 'react'
import '../styles/Footer.css'

function Footer () {
  const [inputValue, setInputValue] = useState ('')

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        Pour les passionné(e)s des plantes 🍀 🌵 🌿
      </div>
      <div className='lmj-footer-elem'>Laisser nous votre email : </div>
    </footer>
  )
}

export default Footer