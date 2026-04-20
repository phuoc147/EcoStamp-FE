import type {
  ApiErrorShape,
  ApiSuccess,
  AuthRole,
  AuthSession,
  AuthUser,
  ProfileActions,
} from "../../types/index";

export type RegisterLocation = {
  latitude: number;
  longitude: number;
  street?: string;
  streetNumber?: string;
  formattedAddress: string;
};

export type RegisterReq = {
  username: string;
  name: string;
  location: RegisterLocation;
  email: string;
  phone: string;
  male: "MALE" | "FEMALE" | "OTHER";
  password: string;
};

export type RegisterResData = {
  user: AuthUser;
};

export type LoginReq = {
  identifier: string;
  password: string;
};

export type LoginResData = {
  loggedIn: true;
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type LogoutResData = {
  loggedOut: true;
};

export type MeResData = {
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type SwitchRoleReq = {
  targetRole: AuthRole;
};

export type SwitchRoleResData = {
  switched: true;
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type RegisterPartnerReq = {
  stationName: string;
  location: RegisterLocation;
};

export type RegisterPartnerResData = {
  registered: true;
  partnerId: string;
  stationId: string;
  stationCode: string;
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type RegisterEmployeeReq = {
  stationCode: string;
  role?: string;
};

export type RegisterEmployeeResData = {
  requested: true;
  requestId: string;
  stationId: string;
  stationCode: string;
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type StationJoinRequestItem = {
  requestId: string;
  requestedRole: string;
  requestedAt: string;
  station: {
    id: string;
    name: string;
    code: string;
  };
  requester: {
    userId: string;
    name: string;
    email: string;
    phone: string | null;
  };
};

export type ListStationJoinRequestsResData = {
  requests: StationJoinRequestItem[];
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type ApproveStationJoinRequestResData = {
  approved: true;
  employeeId: string;
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type RejectStationJoinRequestResData = {
  rejected: true;
  session: AuthSession;
  user: AuthUser;
  actions: ProfileActions;
};

export type RegisterRes = ApiSuccess<RegisterResData> | ApiErrorShape;
export type LoginRes = ApiSuccess<LoginResData> | ApiErrorShape;
export type LogoutRes = ApiSuccess<LogoutResData> | ApiErrorShape;
export type MeRes = ApiSuccess<MeResData> | ApiErrorShape;
export type SwitchRoleRes = ApiSuccess<SwitchRoleResData> | ApiErrorShape;
export type RegisterPartnerRes =
  | ApiSuccess<RegisterPartnerResData>
  | ApiErrorShape;
export type RegisterEmployeeRes =
  | ApiSuccess<RegisterEmployeeResData>
  | ApiErrorShape;
export type ListStationJoinRequestsRes =
  | ApiSuccess<ListStationJoinRequestsResData>
  | ApiErrorShape;
export type ApproveStationJoinRequestRes =
  | ApiSuccess<ApproveStationJoinRequestResData>
  | ApiErrorShape;
export type RejectStationJoinRequestRes =
  | ApiSuccess<RejectStationJoinRequestResData>
  | ApiErrorShape;
