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
    switchToSignUpModal: (state) => {
      state.logInModalOpen = false;
      state.signUpModalOpen = true;
    },
    switchToLogInModal: (state) => {
      state.signUpModalOpen = false;
      state.logInModalOpen = true;
    },
  },
});

export const {
  openLogInModal,
  closeLogInModal,
  openSignUpModal,
  closeSignUpModal,
  switchToLogInModal,
  switchToSignUpModal
} = modalSlice.actions;

export default modalSlice.reducer;
