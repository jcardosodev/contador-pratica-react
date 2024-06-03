import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //essa eh uma funcao nativa do react
  //sempre quando tratar estados ela vai ser usada
  // isso eh um array com duas posicoes[estado 0, estado 1]]
  const [contador, setContador] = useState(0)
  const [nome, setNome] = useState('Gabriel')
  const [novoValor, setNovoValor] = useState(0)
}
  function cliqueDoBotao() {
    const [contador, setContador] = useState(0)
    
    const handleDecrementarClick = () => {
      setContador(contador - 1)
    }

    const handleResetClick = () => {
      setContador(0)
    }

    const handleIncrementarClick = () => {
      setContador(contador + 1)
    }

    const handleInputChange = (e) => {
      setNovoValor(Number(e.target.value))
    }

    const handleAlterarClick = () => {
      setContador(novoValor)
    }

  return (
    <>
      <p>{contador}</p>
      <button onClick={handleIncrementarClick}>Incrementar</button>
      <button onClick={handleDecrementarClick}>Decrementar</button>
      <button onClick={handleResetClick}>Resetar</button>
      <hr />
      <input type='number' onChange={handleInputChange} />
      <button onClick={handleAlterarClick}>Alterar</button>
    </>
  )
}

export default App
