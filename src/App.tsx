import { useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing } from './constant'

function App() {
const [wordToGuess, setWordToGuess] = useState<string>(() => {
  return words[Math.floor(Math.random() * words.length)]
})

  return (
    <>
     <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
    <div className="text-center text-3xl">Lose Win</div>
    <HangmanDrawing/>
     </div>
    </>
  )
}

export default App
