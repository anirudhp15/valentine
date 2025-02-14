import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const FINAL_PHOTO = "/images/us.png"; // Space for an image
const SPOTIFY_PLAYLIST = "TBA"; // Placeholder for the final playlist link

export default function Valentines() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-gradient-to-br from-pink-500 via-red-400 to-purple-600 text-white rounded-lg shadow-lg w-full  mx-auto"
      >
        {/* Title */}
        <h1 className="text-5xl font-bold font-[Dancing Script]">
          💌 a letter for pooja trehan
        </h1>
        <p className="mt-4 text-xl italic text-gray-200">
          i told you to wait on your letter motherfucker
        </p>

        {/* Personal Memory Photo */}
        <motion.img
          src={FINAL_PHOTO}
          alt="A Special Memory"
          className="w-64 h-auto rounded-lg shadow-lg mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Letter Content */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-6 w-full border-2 border-gray-300">
          <p className="font-serif text-lg leading-relaxed text-left whitespace-pre-line text-gray-700">
            <span className="text-2xl font-[Dancing Script]">Dear Pooja,</span>
            <br />
            <br />
            I know I haven't known you for a long time, but I feel like I've
            known you for years. Idk whether that's because—
            <br />
            <br />
            You're genuinely one of a kind, and I hope that this was as
            interesting and unpredictable as you are lol.
            <br />
            <br />
            <span className="text-xl font-[Dancing Script] font-semibold">
              with love,
            </span>
            <br />
            Ani
          </p>
        </div>

        {/* Spotify Playlist Link */}
        <motion.div className="mt-6">
          <Link href={SPOTIFY_PLAYLIST} target="_blank">
            <button className="px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-green-600 transition-all transform hover:scale-105">
              a playlist of songs that remind me of us 🎶
            </button>
          </Link>
        </motion.div>

        {/* The End Button */}
        <motion.div className="mt-6">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105">
            the end 💌
          </button>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
