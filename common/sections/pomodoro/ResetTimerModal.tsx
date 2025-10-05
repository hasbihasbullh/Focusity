"use client";
import { X } from "lucide-react";

interface ResetTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetCurrentSegment: () => void;
  onResetFullSession: () => void;
  currentMode: string;
}

export default function ResetTimerModal({
  isOpen,
  onClose,
  onResetCurrentSegment,
  onResetFullSession,
  currentMode
}: ResetTimerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Modal Container dengan glass effect */}
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl w-full max-w-md border border-white border-opacity-20 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-200 border-opacity-30">
          <h2 className="text-xl font-bold text-zinc-800">Reset Timer</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600 transition duration-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-zinc-600 text-center mb-6">
            Would you like to reset your current segment, or your full session?
          </p>

          <div className="flex flex-col gap-3">
            {/* Reset Current Segment Button */}
            <button
              onClick={onResetCurrentSegment}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            >
              Reset Current Segment
            </button>

            {/* Reset Full Session Button */}
            <button
              onClick={onResetFullSession}
              className="w-full bg-zinc-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-zinc-600 transition duration-200"
            >
              Reset Full Session
            </button>
          </div>
        </div>

        {/* Footer dengan info current mode */}
        <div className="p-4 border-t border-zinc-200 border-opacity-30 bg-zinc-50 bg-opacity-50 rounded-b-2xl">
          <p className="text-sm text-zinc-500 text-center">
            Current: <span className="font-semibold">{currentMode}</span>
          </p>
        </div>
      </div>
    </div>
  );
}