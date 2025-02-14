// pages/route1.js
import Layout from "../components/Layout";
import InteractiveStep from "../components/InteractiveStep";

export default function Route1() {
  return (
    <Layout>
      <h2>The Not-So-Ordinary Dinner Date</h2>
      <p>
        Legend has it that the chef once burned spaghetti so badly, the smoke
        alarm gave a standing ovation. Dare to enter the kitchen?
      </p>

      <InteractiveStep
        text="Intrigued? Click below to explore more chaos!"
        nextPath="/route2"
      />
    </Layout>
  );
}
