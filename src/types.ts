export interface QuestionProp {
  question: string;
  correct_answer: string;
  incorret_answers: string[];
}
export interface InitialStateProp {
  questions: QuestionProp[];
  loading: boolean;
  error: string | undefined;
}
export interface QuizResponseProp {
  response_code: number;
  results: QuestionProp[];
}