import type React from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if(!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-br-secondary w-full min-h-9/10 rounded-t-3xl p-4 relative">
        <button onClick={onClose} className="btn-secondary icon-sm absolute right-4">
          <IoClose className="size-full"/>
        </button>
        {children}
      </div>

    </div>
  )
};