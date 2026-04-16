export type Role = "consumer" | "partner" | "employee";

export type User = {
  id: string;
  name: string;
  role: Role;
};
