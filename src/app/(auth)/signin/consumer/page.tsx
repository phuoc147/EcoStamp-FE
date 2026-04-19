import dynamic from "next/dynamic";
const Map = dynamic(() => import("./pages/Map/Map"), { ssr: false });
const MapPicker = dynamic(() => import("./components/MapPicker"), {
  ssr: false,
});
const Register = dynamic(
  () => import("./pages/Register/Register"),
  { ssr: false }, // bắt buộc vì Register dùng leaflet
);

export default function Page() {
  return <Register />;
}
