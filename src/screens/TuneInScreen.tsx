import AppHeader from "../components/AppHeader";
import PulsingBeacon from "../components/PulsingBeacon";

interface TuneInScreenProps {
  onTuneIn: () => void;
}

export default function TuneInScreen({ onTuneIn }: TuneInScreenProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg">
      <AppHeader />

      <main className="flex flex-1 flex-col items-center justify-between px-6 py-16">
        <PulsingBeacon />

        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white">LIVE NOW</h2>
            <p className="mt-2 text-lg italic text-gray-400">Join the action!</p>
          </div>

          <button
            onClick={onTuneIn}
            className="w-full max-w-sm rounded-full bg-brand-yellow px-8 py-4 text-lg font-bold text-black transition active:scale-95"
          >
            Tune In
          </button>
        </div>
      </main>
    </div>
  );
}