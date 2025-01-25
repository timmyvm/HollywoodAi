"use client";

import React from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { openLogInModal, closeLogInModal } from "@/redux/slices/modalSlice";

interface LogInModalProps {
  style: string;
}

export default function LogInModal({ style }: LogInModalProps) {
  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button className={style} onClick={() => dispatch(openLogInModal())}>
        Sign up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center "
      >
        <div
          className="h-full w-full flex flex-col xs:w-full xs:max-w-[400px] xs:h-[640px] p-8 border
         border-transparent rounded-xl bg-white outline-none absolute 
         top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1"
        >
          <h3 className="text-center mb-5 text-[32px] font-bold text-[#1f2328]">
            Log in
          </h3>
          <div className="flex flex-col gap-4">
            <div
              className="flex justify-start items-center gap-3 
            rounded-xl text-[14px] font-semibold py-3 px-5 text-[#404654] 
            border-2 border-[#ebebeb] bg-white transition duration-300 hover:translate-y-[-2px]"
            >
              Log in with Google
            </div>
            <div
              className="flex justify-start items-center gap-3 
            rounded-xl text-[14px] font-semibold py-3 px-5 text-[#404654] 
            border-2 border-[#ebebeb] bg-white transition duration-300 hover:translate-y-[-2px]"
            >
              Log in as Guest
            </div>
          </div>
          <div className="my-6 flex items-center gap-8 text-black text-opacity-60">
            <div className="h-[1px] w-full bg-black bg-opacity-10"></div>
            <div className="text-[13px]">or</div>
            <div className="h-[1px] w-full bg-black bg-opacity-10"></div>
          </div>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]"
              required
            />
            <input
              type="password"
              placeholder="Your password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#320580]"
              required
            />
            <a href="#" className="text-[#320580] text-sm text-right">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="mt-4 p-3 bg-[#320580] text-white rounded-full hover:bg-purple-700 transition duration-200"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account yet?{" "}
            <a href="#" className="text-[#320580] underline">Sign Up</a>
          </p>
        </div>
      </Modal>
    </>
  );
}
