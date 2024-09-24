import { useState, useEffect } from 'react'

const Board = ({ values, roll, toggleHold }) => {
  const [isWon, setIsWon] = useState(true)

  useEffect(() => {
    const allValuesAreSame = values.every(item => item.value === values[0].value && item.isHeld === true)
    if (allValuesAreSame) {
      setIsWon(true)
    } else {
      setIsWon(false)
    }
  }, [values])

  return (
    <div className="h-[20rem] w-[35rem] bg-gray-200 rounded-md m-auto">
      <h1 className="font-bold text-l text-center text-cyan-800 pt-2">
        Roll until all dice are the same. Click each die to freeze it!
      </h1>
      {isWon && <div className="text-center text-green-600 font-bold text-2xl">You won!</div>}

      <div className="flex flex-wrap w-[19rem] m-auto mt-4 gap-6 font-extrabold text-cyan-700 ">
        {values.map(item => (
          <button
            className={
              item.isHeld
                ? ' w-10 h-10 rounded-md bg-green-400 shadow-xl font-bold'
                : 'w-10 h-10 bg-stone-100 rounded-md shadow-xl font-bold'
            }
            key={item.id}
            onClick={() => toggleHold(item.id)}
          >
            {item.value}
          </button>
        ))}
      </div>

      <div className="text-center mt-16">
        <button onClick={roll} className="bg-cyan-800 rounded-md py-2 px-4 font-bold text-xl text-gray-300">
          {isWon ? 'Play Again!' : 'Roll'}
        </button>
      </div>
    </div>
  )
}

export default Board
