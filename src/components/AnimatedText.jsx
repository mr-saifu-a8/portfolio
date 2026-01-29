import { useEffect, useRef } from "react";
import gsap from "gsap";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

// text ko letter me todna
const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'wght' ${baseWeight}`,
        display: "inline-block",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

export default function AnimatedText({ text, type = "title", className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
      gsap.to(letter, {
        duration,
        ease: "power2.out",
        fontVariationSettings: `'wght' ${weight}`,
      });
    };

    const handleMouseMove = (e) => {
      const { left } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;

      letters.forEach((letter) => {
        const { left: l, width: w } = letter.getBoundingClientRect();
        const center = l - left + w / 2;

        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2) / 20000);

        const weight = min + (max - min) * intensity;
        animateLetter(letter, weight);
      });
    };

    const reset = () => {
      letters.forEach((letter) => animateLetter(letter, base, 0.4));
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, [type]);

  return (
    <div
      ref={containerRef}
      className={`cursor-default select-none font-inter ${className}`}
    >
      {renderText(text, "", FONT_WEIGHTS[type].default)}
    </div>
  );
}
