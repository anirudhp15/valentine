// components/Layout.js
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import "../app/globals.css";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full min-h-screen"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full p-4 text-white bg-red-500 shadow-md">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <h1 className="text-lg font-bold">Pooja's MrBeast Challenge</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
          <nav className="hidden space-x-4 font-semibold md:flex">
            <NavLinks />
          </nav>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <nav className="flex flex-row justify-between p-2 mt-2 font-semibold bg-red-600 rounded-lg md:hidden">
            <NavLinks />
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-grow w-full mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full p-4 text-center bg-gray-100 ">
        <hr className="mb-1 border-2 border-gray-300" />
        <p className="text-sm text-gray-600">© 2025 I love you Pooza lol</p>
      </footer>
    </motion.div>
  );
}

// Extracted navigation links to keep code clean
function NavLinks() {
  return (
    <>
      <Link className="hover:text-gray-300" href="/">
        Home
      </Link>
      <Link className="hover:text-gray-300" href="/london">
        London
      </Link>
      <Link className="hover:text-gray-300" href="/heist">
        Heist
      </Link>
      <Link className="hover:text-gray-300" href="/mrbeast">
        Mr Beast
      </Link>
      <Link className="hover:text-gray-300" href="/valentines">
        Valentine
      </Link>
    </>
  );
}
