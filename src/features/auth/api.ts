import { apiFetch } from "../../lib/api-client";
import type {
  ApproveStationJoinRequestResData,
  ListStationJoinRequestsResData,
  LoginReq,
  LoginResData,
  LogoutResData,
  MeResData,
  RegisterEmployeeReq,
  RegisterEmployeeResData,
  RegisterPartnerReq,
  RegisterPartnerResData,
  RejectStationJoinRequestResData,
  RegisterReq,
  RegisterResData,
  SwitchRoleReq,
  SwitchRoleResData,
} from "./types";

const AUTH_BASE = "/auth";

// Login with username or phone + password
export async function login(input: LoginReq) {
  return apiFetch<LoginResData>(`${AUTH_BASE}/login`, {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function register(input: RegisterReq) {
  return apiFetch<RegisterResData>(`${AUTH_BASE}/register`, {
    method: "POST",
    body: JSON.stringify(input),
  });
}

// Session check: return null when not authenticated
export async function getSession() {
  return await apiFetch<MeResData>(`${AUTH_BASE}/me`, {
    method: "GET",
  });
}

export async function logout() {
  return await apiFetch<LogoutResData>(`${AUTH_BASE}/logout`, {
    method: "POST",
  });
}

export async function me() {
  return apiFetch<MeResData>(`${AUTH_BASE}/me`, {
    method: "GET",
  });
}

export async function switchRole(input: SwitchRoleReq) {
  return apiFetch<SwitchRoleResData>(`${AUTH_BASE}/switch-role`, {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function registerPartner(input: RegisterPartnerReq) {
  return apiFetch<RegisterPartnerResData>(`${AUTH_BASE}/register-partner`, {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function registerEmployee(input: RegisterEmployeeReq) {
  return apiFetch<RegisterEmployeeResData>(`${AUTH_BASE}/register-employee`, {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function listStationJoinRequests() {
  return apiFetch<ListStationJoinRequestsResData>(
    `${AUTH_BASE}/station-join-requests`,
    {
      method: "GET",
    },
  );
}

export async function approveStationJoinRequest(requestId: string) {
  return apiFetch<ApproveStationJoinRequestResData>(
    `${AUTH_BASE}/station-join-requests/${requestId}/approve`,
    {
      method: "POST",
    },
  );
}

export async function rejectStationJoinRequest(requestId: string) {
  return apiFetch<RejectStationJoinRequestResData>(
    `${AUTH_BASE}/station-join-requests/${requestId}/reject`,
    {
      method: "POST",
    },
  );
}
