import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    isOpenModal: false
  },
  reducers: {
    changeShowModal: (state, action) => {
      state.isOpenModal = action.payload
    }
  },
})


export const { changeShowModal } = headerSlice.actions
export const selectIsOpenModal = (state) => state.header.isOpenModal

