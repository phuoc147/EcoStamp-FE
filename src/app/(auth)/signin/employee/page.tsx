"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Homepage from "./_components/Homepage";
import ChooseStationPage from "./_components/chooseStation";
import SetPinPage from "./_components/setPin";
import SuccessPage from "./_components/success";

function RegistrationSteps() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 1;

  const navigateTo = (nextStep: number) => {
    router.push(`/signin/employee?step=${nextStep}`);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#fcfdfa]">
      <div className="w-full lg:max-w-4xl flex-1 lg:bg-white lg:rounded-[48px] lg:shadow-xl overflow-y-auto flex flex-col scrollbar-hide">
        {step === 1 && <Homepage onNext={() => navigateTo(2)} onBack={() => router.push("/login")} />}
        {step === 2 && <ChooseStationPage onNext={() => navigateTo(3)} onBack={() => router.back()} />}
        {step === 3 && <SetPinPage onNext={() => navigateTo(4)} onBack={() => router.back()} />}
        {step === 4 && <SuccessPage onHome={() => router.push( "/signin/employee?step=1")} />}
      </div>
    </main>
  );
}

export default function SignInEmployeePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f2f9ea]" />}>
      <RegistrationSteps />
    </Suspense>
  );
}