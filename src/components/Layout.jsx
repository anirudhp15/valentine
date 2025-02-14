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
      className="min-h-screen flex flex-col"
    >
      {/* Header */}
      <header className="w-full bg-red-500 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Pooja's Valentine’s Adventure</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            ☰
          </button>
          <nav className="hidden md:flex space-x-4">
            <NavLinks />
          </nav>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 bg-red-600 p-2 rounded-lg">
            <NavLinks />
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-4 max-w-3xl mx-auto">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 p-4 text-center mt-4">
        <hr className="border-gray-300" />
        <p className="text-sm text-gray-600">© 2025 Valentine Project</p>
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
      <Link className="hover:text-gray-300" href="/route1">
        Route 1
      </Link>
      <Link className="hover:text-gray-300" href="/route2">
        Route 2
      </Link>
      <Link className="hover:text-gray-300" href="/route3">
        Route 3
      </Link>
      <Link className="hover:text-gray-300" href="/valentines">
        Valentine
      </Link>
    </>
  );
}
