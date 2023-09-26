export interface QuestionProp {
  id?: string
  question: string;
  correct_answer: string;
  options: string[];
  incorrect_answers: string[];
  selected?: string
}
export interface InitialStateProp {
  questions: QuestionProp[];
  questionsWithId:  QuestionProp[];
  loading: boolean;
  error: string | undefined;
}
export interface QuizResponseProp {
  response_code: number;
  results: QuestionProp[];
}