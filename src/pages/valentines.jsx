import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Valentines() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-pink-500 via-red-400 to-purple-600 text-white rounded-lg shadow-lg w-full max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold">💌 a letter for pooja trehan</h1>
        <p className="mt-2 text-lg italic">
          i told you to wait on your letter motherfucker
        </p>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-6 w-full">
          <p className="font-serif text-lg leading-relaxed text-left whitespace-pre-line">
            Dear Pooja,
            <br />
            <br />
            I know I haven't known you for a long time but I feel like I've
            known you for years. Idk whether that's because
            <br />
            <br />
            You're genuinely one of a kind, and I hope that this was as
            interesting and unpredictable as you are lol.
            <br />
            <br />
            With Love,
            <br />
            Ani
          </p>
        </div>

        <motion.div className="mt-6">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all">
            💖 The End 💖
          </button>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
