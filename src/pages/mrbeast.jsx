import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Switzerland() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold">🏔️ The Swiss Showdown</h1>
        <p className="mt-4 text-lg">
          Mr. Beast smiles. **"You passed the test."**
        </p>

        <h2 className="text-2xl font-bold mt-6">
          Inside the golden briefcase…
        </h2>
        <p className="italic">
          A **custom luxury dress** with your name embroidered in gold.
        </p>

        <motion.div className="mt-6">
          <Link href="/valentines">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all">
              💌 Reveal Your Final Letter
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
