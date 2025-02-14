import { useEffect } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import confetti from "canvas-confetti";

const FINAL_PHOTO = "/images/us.png"; // Space for an image
const SPOTIFY_PLAYLIST =
  "https://open.spotify.com/playlist/2DkdsHpI1ObQjkT8c7RZcM?si=xN8i_oYVRUOvlQjsLwLPCg"; // Placeholder for the final playlist link

export default function Valentines() {
  useEffect(() => {
    const duration = 5 * 1000; // 5 seconds
    const animationEnd = Date.now() + duration;
    const colors = ["#ff66b2", "#ff4d4d", "#ffccff"];

    function createHeartConfetti() {
      if (Date.now() > animationEnd) return;

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
        shapes: ["circle"], // Hearts aren't built-in, but circles look good
      });

      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
        shapes: ["circle"],
      });

      requestAnimationFrame(createHeartConfetti);
    }

    createHeartConfetti();
  }, []);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center w-full min-h-screen p-8 mx-auto text-center text-white rounded-lg shadow-lg bg-gradient-to-br from-pink-500 via-red-400 to-purple-600"
      >
        {/* Title */}
        <h1 className="text-5xl font-bold font-[Dancing Script]">
          a 💌 for pooja trehan
        </h1>
        <p className="mt-4 text-xl italic text-gray-200">
          i told you you'd get a letter lol
        </p>

        {/* Personal Memory Photo */}
        <motion.img
          src={FINAL_PHOTO}
          alt="A Special Memory"
          className="w-64 h-auto mt-6 rounded-lg shadow-lg outline outline-white outline-4 outline-offset-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Letter Content */}
        <div className="w-full p-6 mt-6 text-black bg-white border-2 border-gray-300 rounded-lg shadow-lg">
          <p className="font-serif text-lg leading-relaxed text-left text-gray-700 whitespace-pre-line">
            <span className="text-2xl font-[Dancing Script]">dear pooja,</span>
            <br />
            <br />
            i know i haven't known you for much longer than a year, but it truly
            feels like i've known you since i was a little dumb kid. every time
            i'm done with class or work and we talk right after, i feel safe
            with you, like i'm coming home. as soon as i'm out of class, i get
            so excited to talk to you. anytime something happens in my life or
            even as i'm just walking down the street, i feel like i cannot wait
            to tell you. some crazy and exciting subway story doesn't feel as
            crazy and exciting until i tell you about it. i love listening to
            you tell me about everything you've been through—all your out of
            nowhere career switches, your random drops of tea every now and
            then. i want to hear all of you. you've made me feel more heard than
            i have in a while, and i love you for that.
            <br />
            <br />
            every so often, i think about how it felt to hold you, like the last
            time we spent the day at my apartment. i genuinely cannot wait to
            hug you and kiss the actual fuck out of you when i see you again. i
            miss seeing how beautiful you are right in front of me. i think all
            the time about how pretty your eyes looked when they were looking at
            me. i can't wait to remind you how badly i want to be with you
            again.
            <br />
            <br />
            you're the most confident person i know. i always admire the way you
            carry yourself. i hope that if i'm around you way more in the
            future, some of your confidence will start to seep into me as well.
            you're so special, pooja, never forget that, and i really hope this
            was as funny and unpredictable as you are lol.
            <br />
            <br />
            happy valentine's day
            <br />
            <br />
            <span className="text-xl font-[Dancing Script] ">love,</span>
            <br />
            ani
          </p>
        </div>

        {/* Spotify Playlist Link */}
        <motion.div className="mt-6">
          <Link href={SPOTIFY_PLAYLIST} target="_blank">
            <button className="px-6 py-3 text-lg font-semibold text-white transition-all transform bg-green-500 shadow-lg rounded-xl hover:bg-green-600 hover:scale-105">
              heres a playlist of 25 songs that remind me of us 🎶
            </button>
          </Link>
        </motion.div>

        {/* The End Button */}
        <motion.div className="mt-6">
          <button className="px-6 py-3 text-lg font-semibold text-black transition-all transform bg-yellow-400 shadow-lg rounded-xl hover:bg-yellow-500 hover:scale-105">
            the end 💌
          </button>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
