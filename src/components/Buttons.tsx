
const Buttons = ({checkAnswer, handleCheckAnswer}: {checkAnswer: boolean, handleCheckAnswer: () => void}) => {
  return (
    <div className="flex justify-center mt-10">
      { checkAnswer ? <button 
        className='bg-pink-500 
        px-8 py-2 rounded-md
        text-white hover:bg-transparent 
        hover:border border-pink-500 hover:scale-105 
        transition-all capitalize' 
        onClick={handleCheckAnswer}
       >
        play again?
       </button>
      :  <button 
          className='bg-pink-500 
          px-8 py-2 rounded-md
          text-white hover:bg-transparent 
          hover:border border-pink-500 hover:scale-105 
          transition-all capitalize' 
          onClick={handleCheckAnswer}
     >
      check answers
     </button>
    }
   </div>
  )
}

export default Buttons