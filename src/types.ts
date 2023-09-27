export interface QuestionProp {
  id: string
  question: string;
  correct_answer: string;
  options: string[];
  incorrect_answers: string[];
  selected: string
}
export interface SingleOptionProp {
  index: number;
  id: string;
  option: string;
  selected: string;
  correct_answer: string;
}
export interface InitialStateProp {
  questions: QuestionProp[];
  correctCount: number;
  questionsWithId:  QuestionProp[];
  loading: boolean;
  error: string | undefined;
}
export interface QuizResponseProp {
  response_code: number;
  results: QuestionProp[];
}