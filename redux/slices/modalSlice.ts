import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logInModalOpen: false,
  signUpModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLogInModal: (state) => {
      state.logInModalOpen = true;
    },
    closeLogInModal: (state) => {
      state.logInModalOpen = false;
    },
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModalOpen = false;
    },
  },
});

export const {
  openLogInModal,
  closeLogInModal,
  openSignUpModal,
  closeSignUpModal,
} = modalSlice.actions;

export default modalSlice.reducer;
