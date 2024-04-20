"use client";
import { login } from "@/api-fetchers/auth";
import Form from "@/components/generic/Form";
import Input from "@/components/generic/Input";
import { FormError } from "@/utils/types";
import React, { useContext, useState } from "react";
import cookies from "js-cookie";
import AuthContext from "@/lib/context";
import { toast } from "react-toastify";

function AuthForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<FormError>({});
  const {setRole, setToken} = useContext(AuthContext)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length) {
      setErrors((prev) => ({ ...prev, [e.target.name]: [] }));
    }
    if (e.target.name === "usernameOrEmail") {
      setUsernameOrEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!usernameOrEmail) {
      setErrors((prev) => ({ ...prev, usernameOrEmail: ["هذا الحقل مطلوب"] }));
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: ["هذا الحقل مطلوب"] }));
    }

    if (usernameOrEmail && password) {
      const data:any = await login(usernameOrEmail, password);
      console.log(data);
      if (data) {
        if (!data?.error) {
          setErrors({});
          toast.success("جاري تسجيل الدخول", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          if (data.statusCode === 401) {
            setErrors((prev) => ({
              ...prev,
              form: ["اسم المستخدم او الايميل غير صحيح"],
            }));
            setTimeout(() => {
              setErrors((prev) => ({ ...prev, form: [] }));
            }, 3000);
          }
        }

        const { token, role } = data;
        if(token && role) {
          setToken(token);
          setRole(role);
          cookies.set("role", role);
          cookies.set("token", token);
          setTimeout(() => {
            window.location.href = `/panel/${role}`;
          }, 3000);
        }
      }
      }
    }

  return (
    <div>
      <Form method="POST" onSubmit={onSubmit} errors={errors.form}>
        <Input
          labelTitle=" اسم المستخدم او الايميل "
          type="text"
          name="usernameOrEmail"
          id="usernameOrEmail"
          placeholder=" اسم المستخدم او الايميل "
          errors={errors.usernameOrEmail}
          onChange={onChange}
        />
        <Input
          labelTitle="كلمة المرور"
          type="password"
          name="password"
          id="password"
          placeholder="كلمة المرور"
          errors={errors.password}
          onChange={onChange}
        />
      </Form>
    </div>
  );
}

export default AuthForm;
