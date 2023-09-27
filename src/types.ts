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
  checkAnswer: boolean;
}
export interface InitialStateProp {
  questions: QuestionProp[];
  disableCheckBtn: boolean;
  correctCount: number;
  loading: boolean;
  error: string | undefined;
}
export interface QuizResponseProp {
  response_code: number;
  results: QuestionProp[];
}