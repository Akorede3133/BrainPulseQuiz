import { useAppSelector } from '../app/hook';

const ScoreBoard = () => {
  const { questions, correctCount } = useAppSelector((state) => state.quiz);  

  return (
    <div>
      <p>Your score is: {correctCount} / {questions.length}</p>
    </div>
  )
}

export default ScoreBoard