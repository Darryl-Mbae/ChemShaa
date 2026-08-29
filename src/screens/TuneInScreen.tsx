import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppHeader from "../components/AppHeader";
import PulsingBeacon from "../components/PulsingBeacon";

interface TuneInScreenProps {
  onTuneIn: () => void;
}

const PEEK_DURATION_MS = 2000;

export default function TuneInScreen({ onTuneIn }: TuneInScreenProps) {
  const [showBadge, setShowBadge] = useState(false);

  const handleTuneIn = () => {
    onTuneIn();
    setShowBadge(true);
    setTimeout(() => setShowBadge(false), PEEK_DURATION_MS);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-bg">
      <AppHeader />

      <main className="flex flex-1 flex-col items-center justify-between px-6 py-16">
        <PulsingBeacon />

        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white">LIVE NOW</h2>
            <p className="mt-2 text-lg italic text-gray-400">Join the action!</p>
          </div>

          <button
            onClick={handleTuneIn}
            className="w-full max-w-sm rounded-full bg-brand-yellow px-8 py-4 text-lg font-bold text-black transition active:scale-95"
          >
            Tune In
          </button>
        </div>
      </main>

      {/* "Employ me" badge — peeks in from the right edge, holds, slides back out */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            key="employ-me-badge"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed right-0 top-1/2 -translate-y-1/2 rounded-l-full bg-brand-yellow py-3 pl-5 pr-6 text-sm font-bold text-black shadow-lg"
          >
            Employ me 👀
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}