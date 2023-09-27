import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hook';
import { getQuestions } from './features/quiz/quizSlice';
import Quiz from "./components/Quiz";
import Loading from './components/Loading';

const App = () => {
  const dispatch = useAppDispatch();  
  const { loading } = useAppSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch])

  return (
    <div className=" bg-gradient-to-r from-purple-900 to-pink-900">
      {loading && <Loading />}
      {!loading && <Quiz />}
    </div>
  )
}

export default App
