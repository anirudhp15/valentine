import { useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const AUCTION_BACKGROUND = "/images/auctionHall.png"; // Background image of a luxury auction
const POOJA = "/images/pooja3.jpg";
const MRBEAST = "/images/mrbeast.png";
const THIEF = "/images/drake.png"; // Image of a disguised thief
const SKIMS_DRESS = "/images/skims_dress.png"; // Image of the stolen dress

export default function Heist() {
  const [showHeist, setShowHeist] = useState(false);

  return (
    <Layout>
      {/* Background Image for Auction Scene */}
      <div className="relative w-full h-screen">
        <img
          src={AUCTION_BACKGROUND}
          alt="Luxury Auction Hall"
          className="object-cover w-full h-full"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black bg-opacity-50">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            you pullup to the exclusive fancy smancy auction 🎭 ✨
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-xl"
          >
            A{" "}
            <span className="font-semibold text-purple-500">
              $70 million SKIMS dress
            </span>{" "}
            is about to be sold to the highest bidder…
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-2 italic text-gray-300"
          >
            but suddenly—a freaky ass masked thief grabs the dress and vanishes
            into the night!
          </motion.p>

          {/* Reveal Heist Scene */}
          {!showHeist && (
            <motion.button
              onClick={() => setShowHeist(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 mt-6 text-lg font-semibold text-black transition-all bg-yellow-400 shadow-lg rounded-xl hover:bg-yellow-500"
            >
              Witness the Heist
            </motion.button>
          )}

          {/* Thief Reveal + Speech Bubble */}
          {showHeist && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center mt-20"
            >
              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 2.5 }}
                className="absolute w-40 px-4 py-2 font-semibold text-black transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-md -top-20 left-1/2 text-md"
              >
                <p className="text-center">
                  "youuu need me to get that shit togetherrr <br /> so we can
                  get togetherrr"
                </p>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-4 h-4 bg-white rotate-45 border border-gray-300"></div>
              </motion.div>

              {/* Thief Image */}
              <img
                src={THIEF}
                alt="Mysterious Thief"
                className="h-auto shadow-lg w-52"
              />
              <p className="mt-4 text-lg italic text-gray-200">
                too late! the freaky ass thief disappears into the crowd... but
                not before singing his mating call
              </p>

              {/* Stick Figure Characters with Face Placeholders */}
              <div className="relative flex gap-8 mt-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
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

              {/* Decision Buttons - How Does Pooja React? */}
              <h2 className="mt-6 text-2xl font-bold">
                how do you handle this?
              </h2>

              <div className="flex flex-col gap-4 mt-4">
                <Link href="/mrbeast?choice=stealth">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 text-lg font-semibold text-purple-700 transition-all bg-white shadow-lg rounded-xl hover:bg-gray-200"
                  >
                    go undercover & track the rascal 🕵️‍♀️
                  </motion.button>
                </Link>
                <Link href="/mrbeast?choice=action">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 text-lg font-semibold text-red-700 transition-all bg-white shadow-lg rounded-xl hover:bg-gray-200"
                  >
                    chase the silly thief immediately 🚨
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
