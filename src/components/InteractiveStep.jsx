import { motion } from "framer-motion";
import Link from "next/link";

export default function InteractiveStep({ text, nextPath }) {
  return (
    <motion.div
      className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-lg font-semibold text-gray-700 leading-relaxed">
        {text}
      </p>

      {nextPath && (
        <Link href={nextPath}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg shadow-md transition-transform duration-200 hover:bg-red-600 focus:outline-none"
          >
            Next →
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
}
