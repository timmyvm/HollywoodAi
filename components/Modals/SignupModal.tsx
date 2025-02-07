"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { openSignUpModal, closeSignUpModal, openLogInModal, switchToLogInModal } from "@/redux/slices/modalSlice";
import { auth, googleAuthProvider } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

interface SignUpModalProps {
  style: string;
  text: string;
  style2?: string;
  icon?: React.ReactNode;
}

export default function SignUpModal({
  style,
  text,
  style2,
  icon,
}: SignUpModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(closeSignUpModal());
    } catch (error: any) {
      console.error("Error signing up:", error);
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleAuthProvider);
      dispatch(closeSignUpModal());
    } catch (error: any) {
      console.error("Error signing up with Google:", error);
      setError("Google sign-up failed. Try again.");
    }
  };

  return (
    <>
      <button className={style} onClick={() => dispatch(openSignUpModal())}>
        {icon && <div className={style2}>{icon}</div>}
        <span>{text}</span>
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="h-full w-full flex flex-col xs:w-full xs:max-w-[400px] xs:h-[640px] p-8 border border-transparent rounded-xl bg-white outline-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
          <h3 className="text-center mb-5 text-[32px] font-bold text-[#1f2328]">
            Sign Up
          </h3>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div
            onClick={handleGoogleSignUp}
            className="flex justify-start mb-2 items-center gap-3 rounded-xl text-[14px] font-semibold py-3 px-5 text-[#404654] border-2 border-[#ebebeb] bg-white transition duration-300 hover:translate-y-[-2px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            Sign up with Google
          </div>

          <div className="my-6 flex items-center gap-8 text-black text-opacity-60">
            <div className="h-[1px] w-full bg-black bg-opacity-10"></div>
            <div className="text-[13px]">or</div>
            <div className="h-[1px] w-full bg-black bg-opacity-10"></div>
          </div>

          <form className="flex flex-col gap-4">
            <label className="text-[13px] font-500 text-[#667085]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-[13px] font-500 text-[#667085]">
              Password
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="text-[13px] font-500 text-[#667085]">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={handleSignUp}
              className="mt-4 p-3 bg-[#320580] text-white rounded-full hover:bg-purple-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a
              href="#"
              onClick={() => {
                dispatch(switchToLogInModal());
              }}
              className="text-[#320580] underline"
            >
              Log in
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
