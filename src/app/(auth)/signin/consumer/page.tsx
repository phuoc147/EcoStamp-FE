"use client";

import { useState } from "react";
import RegisterForm from "./components/Register";
import GeoSetup from "./components/Geo";

export default function ConsumerSignInPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="h-full w-full overflow-y-auto scroll-smooth">
      <div className="mx-auto flex min-h-full max-w-2xl flex-col px-6 py-10">
        {step === 1 && <RegisterForm onNext={() => setStep(2)} />}
        {step === 2 && <GeoSetup onBack={() => setStep(1)} />}
      </div>
    </main>
  );
}