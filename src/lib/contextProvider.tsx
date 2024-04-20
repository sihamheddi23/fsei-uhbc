"use client";
import React, { useEffect, useState } from "react";
import AuthContext from "./context";
import cookie from "js-cookie";
import { Role } from "@/utils/types";
function ContextProvider({ children }: any) {
  const [token, settoken] = useState<string | undefined>();
  const [role, setrole] = useState<Role | undefined>();

  useEffect(() => {
    const tokenValue: string | undefined = cookie.get("token");
    const roleValue: Role | undefined = cookie.get("role") as Role;
    settoken(tokenValue);
    setrole(roleValue);
  }, []);

  const onClear = () => {
    cookie.remove("token");
    cookie.remove("role");
    settoken(undefined);
    setrole(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ token, role, setToken: settoken, setRole: setrole, onClear }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
