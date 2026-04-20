import { LocationProvider } from "./context/LocationContext";
import { LangProvider } from "@/src/i18n/LangContext";

export default function ConsumerSigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LangProvider>
      <LocationProvider>{children}</LocationProvider>
    </LangProvider>
  );
}
