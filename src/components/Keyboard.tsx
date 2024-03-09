import {KEYS} from '../constant/index'


type Props = {
  activeLetter: string[]
  disabled?: boolean
  inActiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({activeLetter, inActiveLetters, addGuessedLetter, disabled = false}:Props) => {
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
      gap: ".5rem",
    }}
    // className='grid auto-rows-2fr gap-2'
    >
      {
        KEYS.map(key => {
          const isActive = activeLetter.includes(key)
          const isInactive = inActiveLetters.includes(key)
          return (
            <button key={key}
            className={`w-full border border-solid border-black bg-none aspect-square text-xl uppercase p-1 font-bold cursor-pointer text-black hover:bg-sky-300 ${isActive ? 'bg-sky-500 text-white': 'opacity-30'} `}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive || disabled}
            >{key}</button>
          )
        })
      }
    
    </div>
  )
}

export default Keyboard