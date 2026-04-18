import PendingRequests from "./_components/PendingRequests";
import StationStats from "./_components/StationStats";
import StaffList from "./_components/StaffList";

export default function StaffManagementPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Quản lý nhân viên</h1>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Giám sát đội ngũ nhân viên trạm thực vật của bạn và kiểm tra các đơn đăng ký mới.
      </p>

      <div className="space-y-6">
        <PendingRequests />
        <StationStats />
        <StaffList />
      </div>
    </div>
  );
}