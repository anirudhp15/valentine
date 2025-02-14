import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const LONDON_HORIZONTAL_IMAGE = "images/london_horizontal.jpeg";
const LONDON_VERTICAL_IMAGE = "images/london_vertical.jpg";

export default function London() {
  return (
    <Layout>
      {/* Background Image Handling for Mobile vs Desktop */}
      <div className="relative w-full h-screen">
        <img
          src={LONDON_HORIZONTAL_IMAGE}
          alt="London City"
          layout="fill"
          objectFit="cover"
          className="hidden md:block w-full h-full"
        />
        <img
          src={LONDON_VERTICAL_IMAGE}
          alt="London City Mobile"
          layout="fill"
          objectFit="cover"
          className="block md:hidden w-full h-full"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            📜 The Mysterious Invitation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-lg"
          >
            You find a luxurious envelope floating in the air...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="italic mt-2 text-gray-300"
          >
            "If you fail, Mr. Beast will fund an evil company that forces every
            man to wear floral jeans."
          </motion.p>

          {/* Stick Figure Characters with Face Placeholders */}
          <div className="relative flex gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-500">
                <span className="text-black font-bold text-xl">👤</span>
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
                <span className="text-black font-bold text-xl">👤</span>
              </div>
              <p className="mt-2 text-sm font-semibold">Mr. Beast</p>
            </motion.div>
          </div>

          {/* Call to Action Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Link href="/amsterdam">
              <button className="px-8 py-3 bg-red-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-red-600 transition-all transform hover:scale-105">
                Accept the Mission →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
