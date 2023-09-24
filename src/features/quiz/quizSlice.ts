import { createSlice } from "@reduxjs/toolkit";
import { InitialStateProp } from "../../types";
const initialState: InitialStateProp = {
  questions: [],
  loading: true,
  error: '',
};


export const quizeSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {}
})


export default quizeSlice.reducer
