import { motion } from "framer-motion";

export default function AnimationLoyalty({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 }}
    >
      {children}
    </motion.div>
  );
}
