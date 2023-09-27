import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { getQuestions } from '../features/quiz/quizSlice';
import { countCorrectAnswers, playAgain } from '../features/quiz/quizSlice';
import QuizQuestions from './QuizQuestions';
import ScoreBoard from './ScoreBoard';
import Buttons from './Buttons';
import Loading from './Loading';
const Quiz = () => {  
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const handleCheckAnswer = () => {
    setCheckAnswer(true)
    dispatch(countCorrectAnswers());
  }
  const handlePlayAgain = () => {
    setCheckAnswer(false);
    dispatch(getQuestions());
    dispatch(playAgain());
  }
  
  return (
    <div className="w-[95%] md:w-[700px] py-5 mx-auto min-h-screen bg-center bg-cover bg-no-repeat">
      <QuizQuestions checkAnswer={checkAnswer} />
      { checkAnswer &&  <ScoreBoard />}
      <Buttons checkAnswer={checkAnswer} handleCheckAnswer={handleCheckAnswer} handlePlayAgain={handlePlayAgain} />
    </div>
  )
}

export default Quiz