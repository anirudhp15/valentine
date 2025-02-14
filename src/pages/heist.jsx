import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Budapest() {
  const router = useRouter();
  const choice = router.query.choice || "default";

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-red-600 via-pink-500 to-purple-500 text-white rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold">🚆 The Chase Begins!</h1>
        {choice === "stealth" ? (
          <p className="mt-4 text-lg">
            You infiltrate the fashion underworld... **but Mr. Beast is already
            one step ahead.**
          </p>
        ) : (
          <p className="mt-4 text-lg">
            You sprint after Mr. Beast, dodging tourists and Vespa traffic...
          </p>
        )}

        <h2 className="text-2xl font-bold mt-6">Which way do you chase him?</h2>

        <div className="flex flex-col gap-4 mt-4">
          <Link href="/mrbeast?choice=train">
            <button className="px-6 py-3 bg-white text-red-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-200 transition-all">
              🚆 Follow him onto the train to Switzerland
            </button>
          </Link>
          <Link href="/mrbeast?choice=flight">
            <button className="px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-200 transition-all">
              ✈️ Charter a private jet to cut him off
            </button>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
}
