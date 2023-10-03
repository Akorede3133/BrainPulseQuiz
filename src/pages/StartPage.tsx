import { Link } from "react-router-dom"

const StartPage = () => {
  return (
    <section className="w-[90%] mx-auto flex justify-center flex-col min-h-screen">
      <article>
        <h2 className="text-pink-600 text-4xl text-center">Welcome To BrainPulse Quiz</h2>
        <p className="text-pink-300 text-center pt-2 text-base">Answer the questions and test your knowledge!</p>
      </article>
      <form action="" className="full grid gap-4 mt-5">
        <section className="">
          <li className="grid grid-cols-[0.3fr,1fr]">
            <p className="text-white text-2xl">Category:</p>
            <select name="" id="" className="px-4 py-2 cursor-pointer outline-none rounded-md">
              <option value="any">Any</option>
            </select>
          </li>
        </section>
        <section className="">
          <li className="grid grid-cols-[0.3fr,1fr]">
            <p className="text-white text-2xl">Difficulty:</p>
            <select name="" id="" className=" px-4 py-2 cursor-pointer outline-none rounded-md">
              <option value="any">Any</option>
            </select>
          </li>
        </section>
        <section className="">
          <li className="grid grid-cols-[0.3fr,1fr]">
            <p className="text-white text-2xl whitespace-nowrap">Type:</p>
            <select name="" id="" className="px-4 py-2 cursor-pointer outline-none rounded-md">
              <option value="any">Any</option>
            </select>
          </li>
        </section>
      </form>
      <Link to='quiz' className="flex justify-center mt-10">
        <button type="button" className=" px-10 py-3 rounded-md text-white capitalize bg-pink-600 hover:bg-transparent hover:border border-pink-600 transition-all">Start quiz</button>
      </Link>
    </section>
  )
}

export default StartPage