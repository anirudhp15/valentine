import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Amsterdam() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-pink-600 via-red-500 to-purple-500 text-white rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold">💎 The Exclusive Auction</h1>
        <p className="mt-4 text-lg">
          A **$70 million SKIMS dress** is about to be sold...
        </p>
        <p className="italic mt-2">But suddenly—**the dress is stolen!**</p>

        <h2 className="text-2xl font-bold mt-6">What do you do?</h2>

        <div className="flex flex-col gap-4 mt-4">
          <Link href="/heist?choice=stealth">
            <button className="px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-200 transition-all">
              🔎 Go undercover as a fashion mogul
            </button>
          </Link>
          <Link href="/heist?choice=action">
            <button className="px-6 py-3 bg-white text-red-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-200 transition-all">
              🚨 Start chasing the thief immediately
            </button>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
}
