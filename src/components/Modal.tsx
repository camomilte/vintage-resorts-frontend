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
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 lg:items-center">
      <div className="bg-br-secondary w-full min-h-9/10 rounded-t-3xl p-4 relative lg:max-w-lg lg:min-h-auto lg:rounded-3xl">
        <div className="w-full flex justify-end">
          <button onClick={onClose} className="btn-secondary icon-sm">
            <IoClose className="size-full"/>
          </button>
        </div>
        {children}
      </div>

    </div>
  )
};