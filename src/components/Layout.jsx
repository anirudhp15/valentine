// components/Layout.js
import { motion } from "framer-motion";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        margin: "0 auto",
        maxWidth: "800px",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <header style={{ marginBottom: "2rem" }}>
        <nav>
          {/* Simple nav (optional) */}
          <Link href="/">Home</Link> | <Link href="/route1">Route 1</Link> |{" "}
          <Link href="/route2">Route 2</Link> |{" "}
          <Link href="/route3">Route 3</Link> |{" "}
          <Link href="/valentines">Valentine</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer style={{ marginTop: "2rem", textAlign: "center" }}>
        <hr />
        <p>© 2025 Valentine Project</p>
      </footer>
    </motion.div>
  );
}
