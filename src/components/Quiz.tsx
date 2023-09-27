import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hook';
import { countCorrectAnswers } from '../features/quiz/quizSlice';
import QuizQuestions from './QuizQuestions';
import ScoreBoard from './ScoreBoard';
import Buttons from './Buttons';
const Quiz = () => {  
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
      <Buttons checkAnswer={checkAnswer} handleCheckAnswer={handleCheckAnswer} />
    </div>
  )
}

export default Quiz