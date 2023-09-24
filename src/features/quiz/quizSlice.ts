import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProp, QuizResponseProp } from "../../types";
const initialState: InitialStateProp = {
  questions: [],
  loading: true,
  error: '',
};

export const getQuestions = createAsyncThunk('quiz/getQuestions', async () => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
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
        state.questions = results;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})


export default quizeSlice.reducer
