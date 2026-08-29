export default function AppHeader() {
  return (
    <header className="flex items-center justify-between bg-brand-yellow px-5 py-4">
      <h1 className="font-serif text-2xl font-bold tracking-tight text-black">
        ChemShaa
      </h1>
      <button aria-label="Open menu" className="text-black">
        {/* Simple 3-dot kebab icon, swap for an icon lib if the project already uses one */}
        <svg width="4" height="18" viewBox="0 0 4 18" fill="currentColor">
          <circle cx="2" cy="2" r="2" />
          <circle cx="2" cy="9" r="2" />
          <circle cx="2" cy="16" r="2" />
        </svg>
      </button>
    </header>
  );
}