"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />
    </div>
  );
}
