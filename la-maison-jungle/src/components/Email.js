import { useState} from 'react'

const isInputError = inputValue.includes('@')

function Email() {
  const [inputValue, setInputValue] = useState('Indiquez votre email')
  return (
    <div>
      <input 
        value={inputValue}
        onChange={e => checkValue(e.target.value)} />
        <button onBlur={() => 
        alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide")}> Alertez moi </button>
          {isInputError}
    </div>

  )
}

function checkValue(value) {
  if (!value.includes('@')) {
    setInputValue(value)
  }
}

export default Email