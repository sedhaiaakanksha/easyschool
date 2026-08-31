import React, { useState } from "react";
import { apiCall } from "../../utils/api";
import AuthForm from "../../components/AuthForm";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiCall("/admin/login", {
        method: "POST",
        body: { email, password },
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      alert("Login Sucessful");

      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthForm
      heading="Welcome to Admin Portal"
      title="Login"
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      isRegister={false}
      isAdmin={true}
    />
  );
};

export default AdminLogin;
