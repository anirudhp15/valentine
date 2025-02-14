// pages/index.js
import Layout from "../components/Layout";
import InteractiveStep from "../components/InteractiveStep";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to the Valentine Adventure!</h1>
      <p>
        Hey Pooja! This is no ordinary website—it's an interactive journey
        crafted just for you.
      </p>

      <InteractiveStep
        text="Ready to begin your quest for romance and laughter?"
        nextPath="/route1"
      />
    </Layout>
  );
}
