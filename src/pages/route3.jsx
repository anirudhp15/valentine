// pages/route2.js
import Layout from "../components/Layout";
import InteractiveStep from "../components/InteractiveStep";

export default function Route3() {
  return (
    <Layout>
      <h2>Adorable Teddy Bear Adventure</h2>
      <p>
        Rumor has it these bears throw surprise tea parties. Are you brave
        enough to face a talking teddy?
      </p>

      <InteractiveStep
        text="It gets even better from here. Onward!"
        nextPath="/valentines"
      />
    </Layout>
  );
}
