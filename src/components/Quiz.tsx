import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hook';
function decodeHtmlEntities(input: string) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
const Quiz = () => {
  const { questions } = useAppSelector((state) => state.quiz);
  
  return (
    <div className="w-[95%] md:w-[700px] py-5 mx-auto min-h-screen bg-center bg-cover bg-no-repeat">
      <ul className=" text-white px-4 min-h-[90vh] grid place-content-start gap-4">
        {
          questions.map((quest) => {
            const {question, correct_answer, incorrect_answers } = quest;
            const options = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
            return (
              <li className=" border-b border-b-pink-700 pb-5">
                <p className=" pb-4 text-2xl">{decodeHtmlEntities(question)}</p>
                <ul className=" flex flex-wrap gap-4">
                  {
                    options.map((option) => <li className="">
                      <button className="text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1">{decodeHtmlEntities(option)}</button>
                      </li>)
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
      <div className="flex justify-center">
      <button className='bg-pink-500 px-8 py-2 rounded-md text-white hover:bg-transparent hover:border border-pink-500 hover:scale-105 transition-all capitalize'>check answers</button>
      </div>
    </div>
  )
}

export default Quiz