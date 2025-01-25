import React from "react";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { openSignUpModal, closeSignUpModal } from "@/redux/slices/modalSlice";

export default function LogInModal() {
  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const dispatch = useDispatch();

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeSignUpModal())}
      className="flex justify-center items-center"
    >
        <div className="bg-white p-4 rounded-md shadow-md">
          <h1 className="text-9xl">Helloo mama</h1>
        </div>
    </Modal>
  );
}