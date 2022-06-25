import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("flashcards")
  ? [...JSON.parse(localStorage.getItem("flashcards"))]
  : [];

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    saveInfo: (state, action) => {
      state.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.splice(action.payload, 1);
    },
    deleteAll: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const selectFlashcards = (state) => state.content;
export const { saveInfo, deleteCard, deleteAll } = contentSlice.actions;
