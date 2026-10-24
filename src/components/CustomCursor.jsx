import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [hoverState, setHoverState] = useState({
    isHovered: false,
    text: "",
    variant: "default",
  });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact Imprexive Brand Gradient (#7334E4 -> #FF9222)
  const brandGradient =
    "linear-gradient(135deg, #7334E4 0%, #B52BB5 40%, #ED2689 70%, #FF9222 100%)";

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring movement
  const springConfig = { damping: 28, stiffness: 320, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Mobile or Reduced Motion check
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]");
      const buttonTarget = target.closest("button, a, input, select");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor-text") || "";
        const variant = cursorTarget.getAttribute("data-cursor-variant") || "card";
        setHoverState({ isHovered: true, text, variant });
      } else if (buttonTarget) {
        setHoverState({ isHovered: true, text: "", variant: "button" });
      } else {
        setHoverState({ isHovered: false, text: "", variant: "default" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, reduceMotion, isVisible]);

  if (reduceMotion) return null;

  // Dynamic Cursor Sizes
  let targetWidth = 32;
  let targetHeight = 32;

  if (hoverState.isHovered) {
    if (hoverState.text) {
      targetWidth = 84;
      targetHeight = 84;
    } else if (hoverState.variant === "button") {
      targetWidth = 54;
      targetHeight = 54;
    }
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Gradient Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-manrope font-bold text-xs uppercase text-white shadow-xl pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: brandGradient,
        }}
        animate={{
          width: targetWidth,
          height: targetHeight,
          scale: isClicking ? 0.82 : 1,
          opacity: 0.9,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        {hoverState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="tracking-wider text-[11px] font-extrabold drop-shadow-md"
          >
            {hoverState.text}
          </motion.span>
        )}
      </motion.div>

      {/* 2. Theme-Matched Center Dot with Gradient & Soft Glow */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none shadow-md"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: brandGradient,
        }}
        animate={{
          scale: hoverState.isHovered ? (hoverState.text ? 0 : 0.5) : isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}