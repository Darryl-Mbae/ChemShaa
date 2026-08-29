interface PulsingBeaconProps {
  size?: number; // px diameter of the solid core circle
  className?: string;
}

/**
 * Replicates the "LIVE NOW" glowing red beacon from the ChemShaa app.
 *
 * Layering approach:
 * 1. A radial-gradient halo (static, gives the soft glow falloff)
 * 2. 3 expanding rings, staggered, that scale up + fade out on loop
 * 3. A solid core circle that gently pulses scale/opacity
 *
 * All colors reference Tailwind theme tokens (beacon.core / mid / outer)
 * defined in tailwind.config.ts, so branding can be updated in one place.
 */
export default function PulsingBeacon({ size = 96, className = "" }: PulsingBeaconProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size * 3, height: size * 3 }}
      role="img"
      aria-label="Live now indicator"
    >
      {/* Soft glow halo behind everything */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,46,46,0.35) 0%, rgba(179,36,36,0.18) 45%, rgba(77,20,20,0) 75%)",
        }}
      />

      {/* Expanding rings — staggered animation delays create continuous motion */}
      <span className="absolute rounded-full border border-beacon-core/40 animate-ring-expand-1"
            style={{ width: size, height: size }} />
      <span className="absolute rounded-full border border-beacon-core/40 animate-ring-expand-2"
            style={{ width: size, height: size }} />
      <span className="absolute rounded-full border border-beacon-core/40 animate-ring-expand-3"
            style={{ width: size, height: size }} />

      {/* Solid pulsing core */}
      <div
        className="relative rounded-full bg-beacon-core animate-beacon-pulse"
        style={{
          width: size,
          height: size,
          boxShadow: "0 0 40px 10px rgba(255,46,46,0.55)",
        }}
      />
    </div>
  );
}