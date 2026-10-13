import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealScaleProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function RevealScale({
  children,
  delay = 0,
  className = "",
}: RevealScaleProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default RevealScale;