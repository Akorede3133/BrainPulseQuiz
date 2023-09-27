import { useAppSelector } from '../app/hook';

const ScoreBoard = () => {
  const { questions, correctCount } = useAppSelector((state) => state.quiz);  

  return (
    <div className="mt-2 px-4">
      <p className='text-2xl text-pink-500'>Your score is: {correctCount} / {questions.length}</p>
    </div>
  )
}

export default ScoreBoard