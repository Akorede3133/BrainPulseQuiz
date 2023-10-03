import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProp, QuizResponseProp } from "../../types";
const initialState: InitialStateProp = {
  questions: [],
  correctCount: 0,
  disableCheckBtn: true,
  loading: true,
  error: '',
};

export const getQuestions = createAsyncThunk('quiz/getQuestions', async () => {
  const url ='https://opentdb.com/api.php?amount=10&category=9&type=multiple';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
})

export const quizeSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { id, value } = action.payload;
      const question = state.questions.find((question) => question.id === id);
      if (question) {
        question.selected = value;
      }
    },
    countCorrectAnswers: (state) => {      
      const count = state.questions.reduce((acc, item) => {
        if (item.correct_answer === item.selected) {
          acc += 1;
        }
        return acc;
      }, 0)
      state.correctCount = count;
    },
    playAgain: (state) => {
      state.correctCount = 0;
      state.disableCheckBtn = true;
    },
    handleDisableCheckBtn: (state) => {
      const condition = state.questions.every((question) => question.selected)
      state.disableCheckBtn = condition ? false : true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action: PayloadAction<QuizResponseProp>) => {
        state.loading = false;
        const { results } = action.payload;
        const questionsWithId = results.map((quest) => {
          const { correct_answer, incorrect_answers, question } = quest
          const options = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)
          return {id: nanoid(), question, correct_answer, incorrect_answers, options, selected: ''}
        })
        state.questions = questionsWithId;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})
export const { selectAnswer, countCorrectAnswers, playAgain, handleDisableCheckBtn } = quizeSlice.actions;
export default quizeSlice.reducer;
