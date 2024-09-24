import { useState } from 'react'

import './App.css'
import Board from './Board'
import { nanoid } from 'nanoid'

function App() {
  const generateNewDice = () => {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }))
  }

  const [dice, setDice] = useState(generateNewDice())

  const rollNewDie = () => ({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() })

  const handleRoll = () => {
    if (dice.every(item => item.value === dice[0].value && item.isHeld === true)) {
      setDice(generateNewDice())
    } else {
      setDice(prevState =>
        prevState.map(die => {
          return die.isHeld ? die : rollNewDie()
        })
      )
    }
  }

  console.log(dice)

  const toggleHold = id => {
    setDice(prevState => prevState.map(die => (die.id === id ? { ...die, isHeld: !die.isHeld } : die)))
  }

  return (
    <div className="bg-cyan-800 h-screen pt-[15rem]">
      <Board toggleHold={toggleHold} values={dice} roll={handleRoll} />
    </div>
  )
}

export default App
