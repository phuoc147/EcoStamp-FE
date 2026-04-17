"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
    <main className="min-h-screen bg-[#f2f9ea] flex flex-col items-center">
      <div className="w-full lg:max-w-4xl min-h-screen lg:min-h-fit lg:mt-10 lg:mb-10 lg:bg-white lg:rounded-[48px] lg:shadow-xl overflow-hidden flex flex-col">
        {step === 1 && <ChooseStationPage onNext={() => navigateTo(2)} onBack={() => router.push("/login")}/>}
        {step === 2 && <SetPinPage onNext={() => navigateTo(3)} onBack={() => router.back()} />}
        {step === 3 && <SuccessPage onHome={() => router.push("/login")} />}
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