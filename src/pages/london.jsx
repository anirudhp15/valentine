import { useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const LONDON_HORIZONTAL_IMAGE = "/images/london_horizontal.jpeg";
const LONDON_VERTICAL_IMAGE = "/images/london_vertical.jpg";
const ENVELOPE_CLOSED = "/images/envelopeClose.png";
const ENVELOPE_OPEN = "/images/envelopeOpen.png";
const MRBEAST = "/images/mrbeast.png";
const POOJA = "/images/pooja3.jpg";
const JEANS = "/images/oppJeans.png";

export default function London() {
  const [showJeans, setShowJeans] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <Layout>
      {/* Background Image */}
      <div className="relative w-full min-h-screen">
        <img
          src={LONDON_HORIZONTAL_IMAGE}
          alt="London City"
          className="hidden object-cover w-full min-h-screen md:block"
        />
        <img
          src={LONDON_VERTICAL_IMAGE}
          alt="London City Mobile"
          className="block w-full min-h-screen md:hidden"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-black bg-opacity-50">
          {!showJeans && (
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold"
            >
              📜 A Mysterious Envelope
            </motion.h1>
          )}

          {!showJeans && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-4 text-lg"
            >
              you receive a{" "}
              <span className="font-bold text-yellow-400">golden envelope</span>{" "}
              from the sky. the note inside says:
            </motion.p>
          )}

          {/* Envelope */}
          {!showJeans && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => setIsEnvelopeOpen((prev) => !prev)}
            >
              <motion.img
                src={isEnvelopeOpen ? ENVELOPE_OPEN : ENVELOPE_CLOSED}
                alt="Envelope"
                className="h-auto w-84"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />

              {isEnvelopeOpen && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-[20%] left-1/6 transform -translate-x-1/2 -translate-y-1/2 text-sm text-black font-semibold w-full px-24"
                >
                  <span className="text-xl italic font-bold">
                    congratulations, pooja
                  </span>{" "}
                  <br />
                  you have been{" "}
                  <span className="italic text-red-500">chosen,</span> by
                  MrBeast.
                  <br />a $70 million{" "}
                  <span className="text-purple-600">SKIMS</span> dress has been
                  stolen, <br />
                  and only{" "}
                  <span className="font-bold text-purple-600">you</span> can
                  recover it. Or else, MrBeast will conduct some evil plans...
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Button to Reveal MrBeast’s Plan */}
          {isEnvelopeOpen && !showJeans && (
            <motion.button
              onClick={() => setShowJeans(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 mt-6 text-lg font-semibold text-black transition-all bg-yellow-400 shadow-lg animate-bounce rounded-xl hover:bg-yellow-500"
            >
              Click to reveal MrBeast's evil plan
            </motion.button>
          )}

          {/* MrBeast's Evil Plan */}
          {showJeans && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center mt-6"
            >
              <p className="p-4 mt-4 text-xl italic text-gray-200 rounded-lg backdrop-blur-lg">
                if you fail, Mr. Beast will fund an evil company called
                <span className="font-black text-blue-300">
                  {" "}
                  POOJANTIR (PJTR){" "}
                </span>
                that will force EVERYONE on Earth to wear floral jeans… FOREVER.
              </p>

              <img
                src={JEANS}
                alt="Floral Jeans"
                className="w-48 h-auto mt-4 rounded-lg shadow-lg"
              />
              <div className="relative my-4">
                <div className="p-3 text-lg font-bold text-black bg-white border border-black rounded-lg shadow-md">
                  mwahahahah you thought you'd get away with hating on these
                  jeans???
                </div>
                <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-8 border-l-8 border-r-8 left-1/2 border-t-black border-l-transparent border-r-transparent"></div>
              </div>
              <img
                src={MRBEAST}
                alt="Evil MrBeast"
                className="w-48 h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          )}

          {/* Stick Figure Characters */}
          <div className="relative flex gap-8 mt-8">
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

          {/* Call to Action */}
          {showJeans && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Link href="/heist">
                <button className="px-8 py-3 text-lg font-semibold text-white transition-all transform bg-red-500 shadow-lg rounded-xl hover:bg-red-600 hover:scale-105">
                  stop him & get the bag →
                </button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
