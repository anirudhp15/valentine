import { motion } from "framer-motion";
import Link from "next/link";

export default function InteractiveStep({ text, nextPath }) {
  return (
    <div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {text}
      </motion.p>
      <Link href={nextPath}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          Next
        </motion.button>
      </Link>
    </div>
  );
}
