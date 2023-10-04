import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hook"
import { category } from "../utils/api-params"
import { getQuestions } from "../features/quiz/quizSlice"
import { paramsProp } from "../types"
const StartPage = () => {
  const dispatch = useAppDispatch();  
  const [params, setParams] = useState<paramsProp>({
    category: '',
    difficulty: '',
    type: '',
  })  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    setParams((prevParams) => ({
      ...prevParams,
      [name]: value
    }))
    
  }
  return (
    <section className="w-[90%] md:w-[600px] mx-auto flex justify-center flex-col min-h-screen">
      <article>
        <h2 className="text-pink-600 text-4xl text-center">Welcome To BrainPulse Quiz</h2>
        <p className="text-pink-300 text-center pt-2 text-base">Answer the questions and test your knowledge!</p>
      </article>
      <form action="" className="full grid gap-4 mt-5">
        <section className="">
          <li className="grid gap-4 md:grid-cols-[0.3fr,1fr] items-center">
            <p className="text-white text-2xl">Category:</p>
            <select name="category" value={params.category} id="" className="px-2 md:px-4 py-4 cursor-pointer outline-none rounded-md capitalize" onChange={(e) => handleChange(e)}>
              {
                category.map((cat) => <option key={cat.id} value={cat.id} className="capitalize">{cat.type}</option>)
              }
            </select>
          </li>
        </section>
        <section className="">
          <li className="grid gap-4 md:grid-cols-[0.3fr,1fr] items-center">
            <p className="text-white text-2xl">Difficulty:</p>
            <select name="difficulty" value={params.difficulty} id="" className="px-2 md:px-4 py-4 cursor-pointer outline-none rounded-md capitalize" onChange={(e) => handleChange(e)}>
              <option value="" className="capitalize">Any difficulty</option>
              <option value="easy" className="capitalize">easy</option>
              <option value="medium" className="capitalize">medium</option>
              <option value="hard" className="capitalize">hard</option>
            </select>
          </li>
        </section>
        <section className="">
          <li className="grid gap-4 md:grid-cols-[0.3fr,1fr] items-center">
            <p className="text-white text-2xl whitespace-nowrap">Type:</p>
            <select name="type" value={params.type} id="" className="px-2 md:px-4 py-4 cursor-pointer outline-none rounded-md capitalize" onChange={(e) => handleChange(e)}>
              <option value="" className="capitalize">Any type</option>
              <option value="multiple" className=" capitalize">multiple choice</option>
              <option value="boolean" className="capitalize">true / false</option>
            </select>
          </li>
        </section>
      </form>
      <Link to='quiz' 
      className="self-center justify-center mt-12"
      onClick={()=> dispatch(getQuestions(params))}
      >
        <button type="button" 
        className="px-10 py-3 rounded-md text-white 
        capitalize bg-pink-600 hover:bg-transparent hover:border 
        border-pink-600 transition-all">Start quiz</button>
      </Link>
    </section>
  )
}

export default StartPage