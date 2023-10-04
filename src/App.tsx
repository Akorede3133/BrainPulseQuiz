import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Quiz from "./components/Quiz";
import StartPage from './pages/StartPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<StartPage />} />
    <Route path='/quiz' element={<Quiz />} />
  </Route>
))
const App = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-900 to-pink-900 min-h-screen">
    <RouterProvider router={router} />
    </div>
  )
}

export default App
