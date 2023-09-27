import { useAppSelector } from "../app/hook";

const Buttons = ({checkAnswer, handleCheckAnswer, handlePlayAgain }: {checkAnswer: boolean, handleCheckAnswer: () => void, handlePlayAgain: () => void }) => {
  const {disableCheckBtn } = useAppSelector((state) => state.quiz);
  return (
    <div className="flex justify-center mt-10">
      { checkAnswer ? <button 
        className='bg-pink-500 
        px-8 py-2 rounded-md
        text-white hover:bg-transparent 
        hover:border border-pink-500 hover:scale-105 
        transition-all capitalize' 
        onClick={handlePlayAgain}
       >
        play again?
       </button>
      :  <button
          className={`bg-pink-500 
          px-8 py-2 rounded-md
          text-white hover:bg-transparent 
          hover:border border-pink-500 hover:scale-105 
          transition-all capitalize ${disableCheckBtn && ' opacity-40 pointer-events-none'} `} 
          onClick={handleCheckAnswer}
          disabled={disableCheckBtn}
        >
          check answers
        </button>
    }
   </div>
  )
}

export default Buttons