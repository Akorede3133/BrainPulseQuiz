import { useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './app/hook';
import { getQuestions } from './features/quiz/quizSlice';
import Quiz from "./components/Quiz";
import Loading from './components/Loading';
import Error from './components/Error';
import StartPage from './pages/StartPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<StartPage />} />
    <Route path='/quiz' element={<Quiz />} />
  </Route>
))
const App = () => {
  const dispatch = useAppDispatch();  
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch])

  return (
    <div className=" bg-gradient-to-r from-purple-900 to-pink-900">
    <RouterProvider router={router} />
    </div>
  )
}

export default App
