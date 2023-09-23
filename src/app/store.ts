import { configureStore } from "@reduxjs/toolkit";
import quizeSlice from "../features/quiz/quizSlice";
const store = configureStore({
  reducer: {
    quiz: quizeSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;