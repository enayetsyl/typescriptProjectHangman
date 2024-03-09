
type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string
  reveal?: boolean

}

const HangmanWord = ({guessedLetters, wordToGuess, reveal= false}: HangmanWordProps) => {
  
  return (
    <div className='flex justify-center items-center gap-2 text-6xl font-bold uppercase '>
      {
        wordToGuess?.split("").map((letter,index) => (
          <span key={index} className='border-black border-solid border-b-8'>
            <span 
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal 
                  ? "visible"
                  : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
            }}
            // className={`${
            //   guessedLetters.includes(letter) ? "visible" : "hidden"
            // }`}
            >
            {letter}
            </span>
          </span>
        ))
      }
    </div>
  )
}

export default HangmanWord