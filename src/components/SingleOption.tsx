import { selectAnswer } from '../features/quiz/quizSlice';
import { useAppDispatch } from "../app/hook";
import { decodeHtmlEntities } from '../utils/decoder';
import { SingleOptionProp } from '../types';
const SingleOption = ({index, id, option, selected, correct_answer}: SingleOptionProp) => {
  const dispatch = useAppDispatch();
  const handleChoseOption = (id: string, value: string) => {    
    dispatch(selectAnswer({id, value}));
  }
  const decodedOption = decodeHtmlEntities(option);
  const decodedCorrrectAnswer = decodeHtmlEntities(correct_answer)                      

  return (
    <li key={index} onClick={()=> dispatch(() => handleChoseOption(id, decodedOption))}>
      <button 
        className={`
        ${selected === decodedOption && 'bg-pink-500'}
        ${decodedCorrrectAnswer === decodedOption && 'bg-green-500'} 
        ${selected === decodedOption && selected === decodedCorrrectAnswer && 'bg-green-400'} 
        text-sm cursor-pointer 
        hover:bg-pink-600 
        border 
        hover:border-0 
        border-pink-700 
        rounded-md px-4 py-1`}
      >
      {decodedOption}
      </button>
  </li>
  )
}

export default SingleOption;