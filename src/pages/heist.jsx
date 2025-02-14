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
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            The Exclusive Fancy Smancy Auction 🎭
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
            className="italic mt-2 text-gray-300"
          >
            but suddenly—a freaky ass masked thief grabs the dress and vanishes!
          </motion.p>

          {/* Reveal Heist Scene */}
          {!showHeist && (
            <motion.button
              onClick={() => setShowHeist(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all"
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
              className="mt-20 flex flex-col items-center relative"
            >
              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 2.5 }}
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white text-black text-md font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300 w-40"
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
                className="w-52 h-auto shadow-lg"
              />
              <p className="mt-4 text-lg text-gray-200 italic">
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
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-500">
                    <img src={POOJA} alt="Pooja" className="w-24 h-auto" />
                  </div>
                  <p className="mt-2 text-sm font-semibold">Pooja</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-yellow-500">
                    <img src={MRBEAST} alt="Mr. Beast" className="w-20 h-20" />
                  </div>
                  <p className="mt-2 text-sm font-semibold">Mr. Beast</p>
                </motion.div>
              </div>

              {/* Decision Buttons - How Does Pooja React? */}
              <h2 className="text-2xl font-bold mt-6">
                how do you handle this?
              </h2>

              <div className="flex flex-col gap-4 mt-4">
                <Link href="/mrbeast?choice=stealth">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-200 transition-all"
                  >
                    go undercover & track the rascal 🕵️‍♀️
                  </motion.button>
                </Link>
                <Link href="/mrbeast?choice=action">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-red-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-200 transition-all"
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
