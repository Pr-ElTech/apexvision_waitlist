import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ApexSuccessModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  referenceId: string;
  onClose: () => void;
}

const ApexSuccessModal = ({
  isOpen,
  title,
  message,
  referenceId,
  onClose,
}: ApexSuccessModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071A3A]/45 px-5 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="apex-success-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-7 shadow-[0_30px_100px_rgba(7,26,58,0.2)] backdrop-blur-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close confirmation"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-500 transition-colors hover:border-blue-200 hover:text-[#0B5CFF]"
            >
              <X size={17} />
            </button>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7C8] text-[#0A2D82]">
              <Check size={24} strokeWidth={2.5} />
            </div>

            <h2
              id="apex-success-title"
              className="mt-6 text-2xl font-black tracking-[-0.03em] text-[#071A3A]"
            >
              {title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">{message}</p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0B5CFF]">
                Reference
              </p>

              <p className="mt-2 font-mono text-sm font-bold tracking-wide text-[#071A3A]">
                {referenceId}
              </p>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              Keep this reference for your records. A confirmation will also be
              sent to the email address you provided.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 w-full rounded-2xl bg-[#0B5CFF] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2D82]"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApexSuccessModal;
