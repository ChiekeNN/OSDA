import { DiamondIcon } from "./icons";

/** Rotating circular text badge — the association's seal. */
export default function OrbitBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-28 w-28 md:h-36 md:w-36 ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slower">
        <defs>
          <path
            id="orbit-circ"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text className="fill-pine text-[10px] font-semibold uppercase tracking-[0.24em]">
          <textPath href="#orbit-circ">
            Empowering lives · Building communities ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-forest md:h-14 md:w-14">
          <DiamondIcon className="h-4 w-4 md:h-5 md:w-5" />
        </div>
      </div>
    </div>
  );
}
