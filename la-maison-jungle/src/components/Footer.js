import '../styles/Footer.css'
import Email from './Email'

function Footer () {

  return (
    <footer className='lmj-footer'>
      <div className='lmj-footer-elem'>
        Pour les passionné(e)s des plantes 🍀 🌵 🌿
      </div>
      <div className='lmj-footer-elem'>Laisser nous votre email : 
      <Email />
      </div>
    </footer>
  )
}

export default Footer