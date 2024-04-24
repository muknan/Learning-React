import { useState } from "react";
import Bill from "./Bill";
import ServiceTip from "./ServiceTip";
import Output from "./Output";
import Reset from "./Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [serviceQuality, setServiceQuality] = useState(0);
  const [serviceQuality1, setServiceQuality1] = useState(0);

  function handleReset() {
    setBill("");
    setServiceQuality(0);
    setServiceQuality1(0);
  }

  const tip = bill * ((serviceQuality + serviceQuality1) / 2 / 100);

  return (
    <div>
      <Bill bill={bill} onBillChange={setBill} />
      <ServiceTip
        serviceQuality={serviceQuality}
        onServiceChange={setServiceQuality}
      >
        How much was the bill?
      </ServiceTip>
      <ServiceTip
        serviceQuality={serviceQuality1}
        onServiceChange={setServiceQuality1}
      >
        How did your friend like the service?
      </ServiceTip>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
