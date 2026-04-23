export type ApiSuccess<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiError = {
  success?: false;
  message?: string;
  error?: {
    code?: string;
    message?: string;
  };
};

export type AuthRole = "USER" | "EMPLOYEE" | "PARTNER";

export type AuthUser = {
  id: string;
  username: string;
  name: string;
  email: string;
  phone: string | null;
  status: string;
  male: "MALE" | "FEMALE" | "OTHER" | null;
  avatarUrl: string | null;
  qrCode: string;
  createdAt: string;
  role: AuthRole;
  availableRoles: AuthRole[];
  actor: {
    employeeId: string | null;
    partnerId: string | null;
  };
};

export type AuthSession = {
  expiresAt: string;
  activeRole: AuthRole;
};

export type ProfileActions = {
  canSwitchToEmployee: boolean;
  canSwitchToPartner: boolean;
  canRegisterEmployee: boolean;
  canRegisterPartner: boolean;
};
