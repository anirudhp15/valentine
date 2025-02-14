import { motion } from "framer-motion";

export default function MyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to this special Valentine’s App!</h1>
    </motion.div>
  );
}
