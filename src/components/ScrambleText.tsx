import { useEffect, useRef, useState } from "react";

const GLYPHS = "OGBEDSWLNAMUKPT#%&*+";

type Props = {
  text: string;
  className?: string;
  /** ms per scramble frame */
  speed?: number;
};

/** Decode-scramble effect: characters resolve left-to-right into the final text. */
export default function ScrambleText({ text, className, speed = 26 }: Props) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const run = () => {
      let frame = 0;
      timer.current = setInterval(() => {
        frame += 1;
        const revealed = frame / 2;
        setDisplay(
          text
            .split("")
            .map((ch, i) => {
              if (ch === " " || ch === "·" || ch === "—") return ch;
              if (i < revealed) return ch;
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );
        if (revealed >= text.length && timer.current) clearInterval(timer.current);
      }, speed);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer.current) clearInterval(timer.current);
    };
  }, [text, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
