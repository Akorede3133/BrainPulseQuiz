import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hook';
import { countCorrectAnswers } from '../features/quiz/quizSlice';
import QuizQuestions from './QuizQuestions';
import ScoreBoard from './ScoreBoard';
const Quiz = () => {  
  const { questions, correctCount } = useAppSelector((state) => state.quiz);  
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const handleCheckAnswer = () => {
    setCheckAnswer(true)
    dispatch(countCorrectAnswers());
  }
  
  return (
    <div className="w-[95%] md:w-[700px] py-5 mx-auto min-h-screen bg-center bg-cover bg-no-repeat">
      <QuizQuestions checkAnswer={checkAnswer} />
      { checkAnswer &&  <ScoreBoard />}
      <div className="flex justify-center mt-10">
       { checkAnswer ? <button className='bg-pink-500 px-8 py-2 rounded-md text-white hover:bg-transparent hover:border border-pink-500 hover:scale-105 transition-all capitalize' onClick={handleCheckAnswer}>play again?</button>
        : <button className='bg-pink-500 px-8 py-2 rounded-md text-white hover:bg-transparent hover:border border-pink-500 hover:scale-105 transition-all capitalize' onClick={handleCheckAnswer}>check answers</button>
      }
      </div>
    </div>
  )
}

export default Quiz