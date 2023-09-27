import { useAppSelector } from "../app/hook";
import SingleOption from "./SingleOption";
import { decodeHtmlEntities } from "../utils/decoder";
const QuizQuestions = ({ checkAnswer }: {checkAnswer: boolean}) => {
  const { questions } = useAppSelector((state) => state.quiz);   
  return (
    <div>
       <ul className=" text-white px-4 min-h-screen grid place-content-start gap-4">
        {
          questions.map((quest) => {
            const {question, options, id, selected, correct_answer } = quest;           
            return (
              <li key={id} className=" border-b border-b-pink-700 pb-5">
                <p className=" pb-4 text-2xl">{decodeHtmlEntities(question)}</p>
                <ul className=" flex flex-wrap gap-4">
                  {
                    checkAnswer ?
                    options.map((option, index) => <SingleOption index={index} id={id} option={option} selected={selected} correct_answer={correct_answer} />)
                    :
                    options.map((option, index) => <SingleOption index={index} id={id} option={option} selected={selected} correct_answer='' />) 
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default QuizQuestions