

const head = (
  <div className="w-9 h-9 rounded-full absolute border-[7px] border-red-700 top-9 -right-[14px]"/>
)
const body = (
  <div className="w-2 h-16 absolute top-[70px] bg-red-700 right-0"/>
)
const rightArm = (
  <div className="w-2 h-12 absolute top-[55px] bg-red-700 right-0 rotate-[45deg] transform origin-bottom-left"/>
)
const leftArm = (
  <div className="w-2 h-12 absolute top-[55px] bg-red-700 right-0 -rotate-[45deg] transform origin-bottom-right"/>
)
const rightLeg = (
  <div className="w-2 h-16 absolute top-[130px] bg-red-700 right-0 rotate-[45deg] transform origin-top-left"/>
)

const leftLeg = ( 
  <div className="w-2 h-16 absolute top-[130px] bg-red-700 right-0 -rotate-[45deg] transform origin-top-right"/>
)

const body_parts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}


const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return (
    <div className="relative ">
      <div className="bg-black w-24 h-2 absolute top-0 right-0"/>
      <div className="bg-black w-2 h-10 absolute top-0 right-0"/>
      {
        body_parts.slice(0, numberOfGuesses)
      }
      <div className="w-2 bg-black h-60 ml-24"/>
      <div className="w-48 h-2 bg-black"/>

    </div>
  )
}

export default HangmanDrawing