import { useEffect } from 'react';
import { useAppDispatch } from './app/hook';
import { getQuestions } from './features/quiz/quizSlice';
import Quiz from "./components/Quiz";

const App = () => {
  // bg-gradient-to-r from-purple-900 to-pink-900
  const dispatch = useAppDispatch();  
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch])
  return (
    <div className=" bg-gradient-to-r from-purple-900 to-pink-900">
      <Quiz />
    </div>
  )
}

export default App
