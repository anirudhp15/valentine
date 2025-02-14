import { useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const SWITZERLAND_BACKGROUND = "/images/alps.png"; // Background image of the Swiss Alps
const POOJA = "/images/pooja3.jpg";
const MRBEAST = "/images/mrbeast.png";
const SKIMS_DRESS = "/images/skims.png"; // Image of the dress
const REVEAL_CASE = "/images/briefcase.png"; // The final briefcase reveal

export default function MrBeast() {
  const router = useRouter();
  const choice = router.query.choice || "default"; // Capture the choice from the heist scene
  const [showReveal, setShowReveal] = useState(false);

  return (
    <Layout>
      {/* Background Image for Switzerland Scene */}
      <div className="relative w-full h-screen">
        <img
          src={SWITZERLAND_BACKGROUND}
          alt="Swiss Alps"
          className="fixed object-cover w-full h-full"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black bg-opacity-50 pt-60">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            ❄️ The Final Showdown
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-lg"
          >
            after an intense chase across Europe, you find yourself in
            <span className="font-semibold text-blue-500"> Switzerland</span>...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-2 italic text-gray-300"
          >
            and waiting for you at the top of a snowy peak is... your biggest
            opp.
          </motion.p>

          {/* Reveal Button */}
          {!showReveal && (
            <motion.button
              onClick={() => setShowReveal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 mt-6 text-lg font-semibold text-black transition-all bg-yellow-400 shadow-lg rounded-xl hover:bg-yellow-500"
            >
              Confront Opp
            </motion.button>
          )}

          {/* Mr. Beast’s Reveal */}
          {showReveal && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mt-6"
            >
              <img
                src={MRBEAST}
                alt="Mr. Beast"
                className="w-48 h-auto shadow-lg"
              />
              <p className="mt-4 text-lg italic text-gray-200">
                HA You thought it was drake? Nah Pooja, this was all a huge test
              </p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="mt-4 text-lg"
              >
                I needed to see if you were worthy of the{" "}
                <span className="font-semibold text-purple-500">
                  real surprise
                </span>
                . and you passed! even if you were being a little bit annoying
                to ani last night — which i know he feels really sorry for
                instigating and being annoying too - this was all to see if you
                could handle...{" "}
                <span className="font-semibold text-red-500">the truth</span>
              </motion.p>

              {/* Golden Briefcase Reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center mt-2"
              >
                <img
                  src={REVEAL_CASE}
                  alt="Golden Briefcase"
                  className="h-auto shadow-lg w-72"
                />
                <p className="mt-4 text-lg italic text-gray-200">
                  Mr. Beast hands you a{" "}
                  <span className="font-semibold text-yellow-400">
                    golden briefcase
                  </span>
                  . there seems to be something inside...
                </p>
              </motion.div>

              {/* Stick Figure Characters with Face Placeholders */}
              <div className="relative flex gap-8 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex items-center justify-center w-24 h-24 bg-white border-4 border-gray-500 rounded-full">
                    <img
                      src={POOJA}
                      alt="Pooja"
                      className="w-24 h-auto rounded-full"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold">You</p>
                </motion.div>
              </div>

              {/* Call to Action Button */}
              <motion.div
                className="my-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Link href="/valentines">
                  <button className="px-8 py-3 text-lg font-semibold text-white transition-all transform bg-red-500 shadow-lg rounded-xl hover:bg-red-600 hover:scale-105">
                    open the briefcase →
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
