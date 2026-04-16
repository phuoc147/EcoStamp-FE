import { Role } from "@/src/types/auth";


export type LoginInput = {
  role: Role;
  username: string;
  password: string;
};

export type SignInInput = {
  username: string;
  password: string;
  role: Role;
};
