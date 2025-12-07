import React from "react";
import { Modal } from "../../../components/Modal";
import { DayPicker } from "react-day-picker";
import { FaMinus, FaPlus } from "react-icons/fa6";

export type GuestsCounters = {
  adults: { value: number; description: string };
  children: { value: number; description: string };
  infants: { value: number; description: string };
  pets: { value: number; description: string };
};

type DateModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  selected?: Date | undefined;
  onSelect: (d: Date | undefined) => void;
};

export const DateModal: React.FC<DateModalProps> = ({ open, onClose, title = "Select Date", selected, onSelect }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-3xl font-title font-semibold text-brand">{title}</h3>

      <div className="flex justify-center">
        <DayPicker
          animate
          mode="single"
          navLayout="around"
          selected={selected}
          onSelect={onSelect}
          footer={selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."}
        />
      </div>
    </Modal>
  );
};

type GuestsModalProps = {
  open: boolean;
  onClose: () => void;
  guests: GuestsCounters;
  onIncrement: (key: keyof GuestsCounters) => void;
  onDecrement: (key: keyof GuestsCounters) => void;
};

export const GuestsModal: React.FC<GuestsModalProps> = ({ open, onClose, guests, onIncrement, onDecrement }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h3 className="text-3xl font-title font-semibold text-brand">Select Guests</h3>

      <form className="py-4">
        {Object.keys(guests).map((key) => {
          const counter = guests[key as keyof GuestsCounters];
          return (
            <div key={key} className="flex justify-between items-center py-4">
              <div>
                <label htmlFor={key} className="font-bold capitalize">
                  {key}
                </label>
                <p className="text-neutral-500">{counter.description}</p>
              </div>
              <div className="flex items-center py-2">
                <button
                  type="button"
                  onClick={() => onDecrement(key as keyof GuestsCounters)}
                  className="icon-sm size-8! btn-secondary"
                >
                  <FaMinus />
                </button>

                <input id={key} type="number" readOnly value={counter.value} className="text-center max-w-14" />

                <button
                  type="button"
                  onClick={() => onIncrement(key as keyof GuestsCounters)}
                  className="icon-sm size-8! btn-secondary"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          );
        })}
      </form>
    </Modal>
  );
};