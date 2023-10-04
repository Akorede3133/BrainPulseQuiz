import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { countCorrectAnswers, playAgain } from '../features/quiz/quizSlice';
import QuizQuestions from './QuizQuestions';
import ScoreBoard from './ScoreBoard';
import Buttons from './Buttons';
import Loading from './Loading';
import Error from './Error';
const Quiz = () => {  
  const { loading, error } = useAppSelector((state) => state.quiz);
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  const handleCheckAnswer = () => {
    setCheckAnswer(true)
    dispatch(countCorrectAnswers());
  }
  const handlePlayAgain = () => {
    setCheckAnswer(false);
    dispatch(playAgain());
  }

  if (loading) {
    return <Loading />
  }
  if (error) {    
    return <Error />
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