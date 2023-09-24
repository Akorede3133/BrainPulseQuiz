import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateProp } from "../../types";
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
  reducers: {}
})


export default quizeSlice.reducer
