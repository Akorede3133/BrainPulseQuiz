import { useAppSelector, useAppDispatch } from '../app/hook';
import { selectAnswer } from '../features/quiz/quizSlice';
function decodeHtmlEntities(input: string) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
const Quiz = () => {
  const { questions } = useAppSelector((state) => state.quiz);
  console.log(questions);
  
  const dispatch = useAppDispatch();
  
  return (
    <div className="w-[95%] md:w-[700px] py-5 mx-auto min-h-screen bg-center bg-cover bg-no-repeat">
      <ul className=" text-white px-4 min-h-[90vh] grid place-content-start gap-4">
        {
          questions.map((quest) => {
            const {question, options, id, selected } = quest;
            return (
              <li key={id} className=" border-b border-b-pink-700 pb-5">
                <p className=" pb-4 text-2xl">{decodeHtmlEntities(question)}</p>
                <ul className=" flex flex-wrap gap-4">
                  {
                    options.map((option, index) => <li key={index} onClick={()=> dispatch(selectAnswer({id, value: decodeHtmlEntities(option)}))}>
                      <button className={`${selected === option && 'bg-pink-500'} text-sm cursor-pointer hover:bg-pink-600 border hover:border-0 border-pink-700 rounded-md px-4 py-1`}>{decodeHtmlEntities(option)}</button>
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