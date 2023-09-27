import { useAppSelector, useAppDispatch } from "../app/hook";
import { selectAnswer } from '../features/quiz/quizSlice';

function decodeHtmlEntities(input: string) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
const QuizQuestions = ({ checkAnswer }: {checkAnswer: boolean}) => {
  const { questions } = useAppSelector((state) => state.quiz);  
  const dispatch = useAppDispatch();
  const handleChoseOption = (id: string, value: string) => {    
    dispatch(selectAnswer({id, value}));
  }
  return (
    <div>
       <ul className=" text-white px-4 min-h-screen grid place-content-start gap-4">
        {
          questions.map((quest) => {
            const {question, options, id, selected, correct_answer } = quest;
            const decodedCorrrectAnswer = decodeHtmlEntities(correct_answer);            
            return (
              <li key={id} className=" border-b border-b-pink-700 pb-5">
                <p className=" pb-4 text-2xl">{decodeHtmlEntities(question)}</p>
                <ul className=" flex flex-wrap gap-4">
                  {
                    checkAnswer ?
                    options.map((option, index) => {
                      const decodedOption = decodeHtmlEntities(option);                      
                      if (decodedOption) {
                        return (
                          <li key={index}>
                            <button className={` ${decodedCorrrectAnswer === decodedOption && 'bg-green-500'} ${selected === decodedOption && selected !== decodedCorrrectAnswer && 'bg-red-400'} text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1`}>{decodedOption}</button>
                          </li>
                        )
                      }
                   
                    })
                    :
                    options.map((option, index) => {
                      const decodedOption = decodeHtmlEntities(option);
                      if (decodedOption) {
                        return (
                          <li key={index} onClick={()=> dispatch(() => handleChoseOption(id, decodedOption))}>
                            <button className={`${selected === decodedOption && 'bg-pink-500'} text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1`}>{decodedOption}</button>
                          </li>
                        )
                      }
                   
                    })
                    
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