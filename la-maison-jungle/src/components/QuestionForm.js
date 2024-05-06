/*import { useState } from 'react'

const isInputError = inputValue.includes('f')

function QuestionForm() {
	const [inputValue, setInputValue] = useState('Poser votre question')
	return (
		<div>
			<textarea
				value={inputValue}
				onChange={e => checkValue(e.target.value)}
			/> 
      <button onClick={() => alert(inputValue)}>Alertez moi 💣</button>
      {isInputError && (
    <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
)}
		</div>
	)
}

function checkValue(value) {
  if (!value.includes('f')) {
    setInputValue(value)
  }
}
export default QuestionForm*/