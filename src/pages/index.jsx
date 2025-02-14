import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const MYSTERIOUS_BACKGROUND = "/images/beastGames.jpg"; // Dark, mysterious aesthetic background
const MRBEAST = "/images/mrbeast.png";
const POOJA = "/images/pooja3.jpg";
const GOLDEN_ENVELOPE = "/images/envelopeClose.png";

export default function Home() {
  return (
    <Layout>
      {/* Background Image */}
      <div className="relative w-full h-screen">
        <img
          src={MYSTERIOUS_BACKGROUND}
          alt="Mysterious Background"
          className="object-cover w-full h-full"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black bg-opacity-60">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            ❓ A MrBeast Challenge for Pooja Trehan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-xl text-gray-300"
          >
            pooja, you have exactly 24 hours to accept this mission. if you fail
            to act,{" "}
            <span className="font-bold text-red-500">
              your entire future may be rewritten.
            </span>
          </motion.p>

          {/* Floating Golden Envelope */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-8"
          >
            <img
              src={GOLDEN_ENVELOPE}
              alt="Golden Envelope"
              className="h-auto transition-transform transform shadow-lg cursor-pointer w-52 hover:scale-105"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="mt-4 italic text-gray-300"
          >
            this mission is highly classified. if you accept, you will be
            required to: travel internationally, recover an extremely rare item
            worth $70 million, and avoid catastrophic fashion failure.
          </motion.p>

          {/* Character Introductions */}
          <div className="relative flex gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white border-4 border-gray-500 rounded-full w-28 h-28">
                <img
                  src={POOJA}
                  alt="Pooja"
                  className="w-24 h-auto rounded-full"
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Pooja</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center bg-white border-4 border-yellow-500 rounded-full w-28 h-28">
                <img
                  src={MRBEAST}
                  alt="Mr. Beast"
                  className="w-24 h-auto rounded-full"
                />
              </div>
              <p className="mt-2 text-lg font-semibold">Mr. Beast</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="mt-6 text-lg text-gray-300"
          >
            the question is… are you in?
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Link href="/london">
              <button className="px-8 py-3 text-lg font-semibold text-white transition-all transform bg-red-500 shadow-lg rounded-xl hover:bg-red-600 hover:scale-105">
                🚀 i'm in →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
