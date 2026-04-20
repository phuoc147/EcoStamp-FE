"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Home from "./_components/Home";
import MemberInfo from "./_components/MemberInfo";
import StationInfo from "./_components/StationInfo";
import VerificationInfo from "./_components/VerificationInfo";
import SetupPin from "./_components/SetupPin";
import Success from "./_components/Success";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  stationName: string;
  stationType: string;
  address: string;
  operatingHours: string;
  stationImage: string;
  latitude: number;
  longitude: number;
  idType: string;
  idNumber: string;
  idFrontImage: string;
  idBackImage: string;
  businessLicense: string;
  pin: string;
}

function SignUpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 1;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    stationName: "",
    stationType: "",
    address: "",
    operatingHours: "",
    stationImage: "",
    latitude: 21.0285,
    longitude: 105.8542,
    idType: "CCCD",
    idNumber: "",
    idFrontImage: "",
    idBackImage: "",
    businessLicense: "",
    pin: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string | File) => {
    if (["idFrontImage", "idBackImage", "stationImage", "businessLicense"].includes(field)) {
      if (value instanceof File) {
        const reader = new FileReader();
        reader.onload = () => {
          setFormData((prev) => ({
            ...prev,
            [field]: reader.result as string,
          }));
        };
        reader.readAsDataURL(value);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value as string,
      }));
    }
  };

  const handleNext = () => {
    setErrorMessage(null);

    // Validation
    if (step === 2) {
      if (!formData.fullName.trim()) {
        setErrorMessage("Vui lòng nhập họ tên");
        return;
      }
      if (!formData.phoneNumber.trim()) {
        setErrorMessage("Vui lòng nhập số điện thoại");
        return;
      }
      if (!formData.email.trim()) {
        setErrorMessage("Vui lòng nhập email");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage("Email không hợp lệ");
        return;
      }
    }

    // Validation for Step 4 (Verification)
    if (step === 4) {
      if (!formData.idFrontImage) {
        setErrorMessage("Vui lòng tải lên mặt trước CCCD");
        return;
      }
      if (!formData.idBackImage) {
        setErrorMessage("Vui lòng tải lên mặt sau CCCD");
        return;
      }
      if (!formData.businessLicense) {
        setErrorMessage("Vui lòng tải lên giấy phép kinh doanh");
        return;
      }
    }

    // Validation for Step 5 (PIN Setup)
    if (step === 5) {
      if (!formData.pin || formData.pin.length !== 6) {
        setErrorMessage("Vui lòng nhập mã PIN 6 số");
        return;
      }
    }

    router.push(`/signin/partner?step=${step + 1}`);
  };

  const handleBack = () => {
    setErrorMessage(null);
    if (step > 1) {
      router.push(`/signin/partner?step=${step - 1}`);
    } else {
      router.push("/login");
    }
  };

  const handleSubmit = () => {
    // Validation for PIN before submit
    if (!formData.pin || formData.pin.length !== 6) {
      setErrorMessage("Vui lòng nhập mã PIN 6 số");
      return;
    }
    console.log("Submitting:", formData);
    router.push("/signin/partner?step=6");
  };

  // Render từng step
  const renderStep = () => {
    const stepProps = {
      formData,
      handleInputChange,
      errorMessage,
      onNext: handleNext,
      onBack: handleBack,
    };

    switch (step) {
      case 1:
        return <Home {...stepProps} />;
      case 2:
        return <MemberInfo {...stepProps} />;
      case 3:
        return <StationInfo {...stepProps} />;
      case 4:
        return <VerificationInfo {...stepProps} />;
      case 5:
        return <SetupPin {...stepProps} onSubmit={handleSubmit} />;
      case 6:
        return <Success {...stepProps} />;
      default:
        return <Home {...stepProps} />;
    }
  };

  return (
    <section className="w-full max-w-md min-h-screen flex flex-col">
      {renderStep()}
    </section>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f2f9ea]" />}>
      <SignUpContent />
    </Suspense>
  );
}