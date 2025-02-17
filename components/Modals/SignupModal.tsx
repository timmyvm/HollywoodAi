"use client";

import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { openSignUpModal, closeSignUpModal, switchToLogInModal } from "@/redux/slices/modalSlice";
import { auth, googleAuthProvider } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function SignUpModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const isOpen = useSelector((state: RootState) => state.modals.signUpModalOpen);
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

  return (
    <>
      <button className="text-[#320580] underline" onClick={() => dispatch(openSignUpModal())}>
        <span> Sign Up</span>
      </button>

      <Modal open={isOpen} onClose={() => dispatch(closeSignUpModal())} className="flex justify-center items-center">
        <div className=" h-full w-full flex flex-col xs:w-full xs:max-w-[400px] xs:h-[700px] p-8 border border-transparent rounded-xl bg-white outline-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
          {/* Close Button */}
          <button onClick={() => dispatch(closeSignUpModal())} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
            ✕
          </button>
          
          <h3 className="text-center mb-5 text-[32px] font-bold text-[#1f2328]">Sign Up</h3>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form className="flex flex-col gap-4">
            <label className="text-[13px] font-500 text-[#667085]">Email Address</label>
            <input type="email" placeholder="your@email.com" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="text-[13px] font-500 text-[#667085]">Password</label>
            <input type="password" placeholder="Your password" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]" required value={password} onChange={(e) => setPassword(e.target.value)} />

            <label className="text-[13px] font-500 text-[#667085]">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button type="button" onClick={handleSignUp} className="mt-4 p-3 bg-[#320580] text-white rounded-full hover:bg-purple-700 transition duration-200">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="#" onClick={() => dispatch(switchToLogInModal())} className="text-[#320580] underline">
              Log in
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
