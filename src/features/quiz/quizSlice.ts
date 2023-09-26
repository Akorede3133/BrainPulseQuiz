import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProp, QuizResponseProp } from "../../types";
const initialState: InitialStateProp = {
  questions: [],
  questionsWithId: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action: PayloadAction<QuizResponseProp>) => {
        state.loading = false;
        const { results } = action.payload;
        const questionsWithId = results.map((question) => {
          return {id: nanoid(), ...question}
        })
        state.questions = questionsWithId;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default quizeSlice.reducer
