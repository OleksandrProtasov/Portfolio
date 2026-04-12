import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, input, textarea, select, label, [role='button'], .cursor-pointer";

function isUnderInteractive(x, y) {
  const el = document.elementFromPoint(x, y);
  if (!el || !el.closest || el.closest(".ms-cursor-root")) return false;
  return !!el.closest(INTERACTIVE);
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringEl = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("ms-cursor--hide-system");
    return () =>
      document.documentElement.classList.remove("ms-cursor--hide-system");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      const ring = ringEl.current;
      if (!ring) return;

      ring.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

      const nextHover = isUnderInteractive(e.clientX, e.clientY);
      const v = nextHover ? "true" : "false";
      if (ring.getAttribute("data-hover") !== v) {
        ring.setAttribute("data-hover", v);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="ms-cursor-root" aria-hidden>
      <div ref={ringEl} className="ms-cursor__ring" data-hover="false" />
    </div>
  );
}
