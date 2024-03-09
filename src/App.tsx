import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'
import { HangmanDrawing, HangmanWord, Keyboard } from './constant'

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}


function App() {

  const [wordToGuess, setWordToGuess] = useState<string>(getWord())

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))


  const addGuessedLetter = useCallback(
    (letter: string) => {
      if(guessedLetters.includes(letter) || isWinner || isLoser) return
  
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key !== 'Enter') return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters])


  return (
    <>
     <div className="container mx-auto flex flex-col gap-8 items-center">
    <div className="text-center text-3xl">
      {isWinner && 'Winner - Refresh to try again'}
      {isLoser && 'Nice Try - Refresh to try again'}
      </div>
    <HangmanDrawing
    numberOfGuesses={incorrectLetters.length}
    
    />
    <HangmanWord
    reveal={isLoser}
    guessedLetters={guessedLetters}
    wordToGuess={wordToGuess}
    />
   
     <div className='self-stretch '>
      <Keyboard 
      disabled={isWinner || isLoser}
      activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
      inActiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
      />
    </div>
     </div>
    </>
  )
}

export default App
