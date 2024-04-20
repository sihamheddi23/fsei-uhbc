import { Role } from "@/utils/types";
import React from "react";

interface AuthPayload {
  token: string | undefined;
  role: Role | undefined;
  setToken: (token: string) => void;
  setRole: (role: "Admin" | "Teacher" | "HeadDepartement") => void;
  onClear: () => void;
}

const AuthContext = React.createContext<AuthPayload>({
  token: undefined,
  role: undefined,
  setToken: () => {},
  setRole: () => { },
  onClear: () => {}
});

export default AuthContext;
