import { selectAnswer, handleDisableCheckBtn } from '../features/quiz/quizSlice';
import { useAppDispatch } from "../app/hook";
import { decodeHtmlEntities } from '../utils/decoder';
import { SingleOptionProp } from '../types';
const SingleOption = ({index, id, option, selected, correct_answer, checkAnswer}: SingleOptionProp) => {
  const dispatch = useAppDispatch();
  const handleChoseOption = (id: string, value: string) => {    
    dispatch(selectAnswer({id, value}));
    dispatch(handleDisableCheckBtn());
  }
  const decodedOption = decodeHtmlEntities(option);
  const decodedCorrrectAnswer = decodeHtmlEntities(correct_answer)                        
  return (
    <li key={index} >
      <button 
        className={`
        ${!checkAnswer && selected === decodedOption && 'bg-pink-600'}
        ${checkAnswer && selected === decodedOption && 'bg-red-600'}
        ${decodedCorrrectAnswer === decodedOption && 'bg-green-600 border-green-600'} 
        ${selected === decodedOption && selected === decodedCorrrectAnswer && 'bg-green-600 border-green-600'}
        ${checkAnswer && 'pointer-events-none'} 
        text-sm cursor-pointer 
        hover:bg-pink-600 
        border 
        hover:border-0 
        border-pink-700 
        rounded-md px-4 py-1`}
        disabled={checkAnswer}
        onClick={()=> dispatch(() => handleChoseOption(id, decodedOption))}
      >
      {decodedOption}
      </button>
  </li>
  )
}

export default SingleOption;