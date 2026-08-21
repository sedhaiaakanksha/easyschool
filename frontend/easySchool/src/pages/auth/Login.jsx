import React, { useState } from "react";
import { apiCall } from "../../utils/api";
import AuthForm from "../../components/AuthForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiCall("/students/login", {
        method: "POST",
        body: { email, password },
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      alert("Login Sucessfull");

      //To do redirect the user to dashboard according to their role
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthForm
      heading="Welcome Back"
      title="Login"
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      isRegister={false}
    />
  );
}
