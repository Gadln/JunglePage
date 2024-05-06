import React from 'react';
import '../styles/App.css';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
/*import QuestionForm from './QuestionForm';*/
import Footer from './Footer';

/*function handleSubmit (e) {
	e.preventDefault()
	alert(e.target['my_input'].value)
}*/

function App() {
  return (<React.Fragment>
   <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
			{/*<form onSubmit={handleSubmit}>
				<input type='text' name='my_input' defaultValue='Tapez votre texte' />
				<button type='submit'>Entrer</button>
	</form>*/}
			{/*<QuestionForm />*/}
			<Footer />
   </React.Fragment>
  );
}

export default App;
