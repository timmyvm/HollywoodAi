"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { openLogInModal, closeLogInModal, openSignUpModal } from "../../redux/slices/modalSlice";
import { auth, googleAuthProvider } from "@/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

interface LogInModalProps {
  style: string;
  text: string;
  style2?: string;
  icon?: React.ReactNode;
}

export default function LogInModal({
  style,
  text,
  style2,
  icon,
}: LogInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const dispatch = useDispatch();

  const handleLogIn = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(closeLogInModal());
    } catch (error: any) {
      console.error("Error logging in:", error);
      setError(error.message);
    }
  };

  const handleGuestLogIn = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(
        auth,
        "guestuser@gmail.com",
        "guestPassword123"
      );
      dispatch(closeLogInModal());
    } catch (error: any) {
      console.error("Error logging in as guest:", error);
      setError("Guest login failed. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleAuthProvider);
      dispatch(closeLogInModal());
    } catch (error: any) {
      console.error("Error logging in with Google:", error);
      setError("Google login failed. Try again.");
    }
  };

  return (
    <>
      <button className={style} onClick={() => dispatch(openLogInModal())}>
        {icon && <div className={style2}>{icon}</div>}
        <span>{text}</span>
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div className="h-full w-full flex flex-col xs:w-full xs:max-w-[400px] xs:h-[640px] p-8 border border-transparent rounded-xl bg-white outline-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
          <h3 className="text-center mb-5 text-[32px] font-bold text-[#1f2328]">
            Log in
          </h3>

          {error && <p className="text-red-500 text-sm ">{error}</p>}

          <div
            onClick={handleGoogleLogin}
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
            Log in with Google
          </div>

          <div
            onClick={handleGuestLogIn}
            className="flex justify-start items-center gap-3 rounded-xl text-[14px] font-semibold py-3 px-5 text-[#404654] border-2 border-[#ebebeb] bg-white transition duration-300 hover:translate-y-[-2px] cursor-pointer"
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Log in as Guest
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
            <a href="#" className="text-[#320580] text-sm text-right">
              Forgot Password?
            </a>
            <button
              type="button"
              onClick={handleLogIn}
              className="mt-4 p-3 bg-[#320580] text-white rounded-full hover:bg-purple-700 transition duration-200"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Don't have an account yet?{" "}
            <a
              href="#"
              onClick={() => {
                dispatch(closeLogInModal());
                dispatch(openSignUpModal());
              }}
              className="text-[#320580] underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
