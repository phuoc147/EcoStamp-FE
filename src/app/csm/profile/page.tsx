import ProfileHeader from "./_components/ProfileHeader";
import ProfileStats from "./_components/ProfileStats";
import ProfileAccountInfo from "./_components/AccountInfo";
import ProfileQR from "./_components/ProfileQR";
import ProfileMenu from "./_components/ProfileMenu";
import ProfileActionButtons from "./_components/ProfileActionButtons";
import ProfileLogout from "./_components/Logout";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-5 px-6 pt-6 pb-6">
      <ProfileHeader />
      <ProfileStats />
      <ProfileAccountInfo />
      <ProfileQR />
      <ProfileMenu />
      <ProfileActionButtons />
      <ProfileLogout />
    </div>
  );
}