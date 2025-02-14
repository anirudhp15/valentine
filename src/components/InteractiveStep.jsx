// components/InteractiveStep.js
import { motion } from "framer-motion";
import Link from "next/link";

export default function InteractiveStep({ text, nextPath }) {
  return (
    <motion.div
      style={{ margin: "2rem 0" }}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <p style={{ marginBottom: "1rem" }}>{text}</p>

      {nextPath && (
        <Link href={nextPath}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              padding: "0.6rem 1.2rem",
              background: "#e63946",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Next
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
}
