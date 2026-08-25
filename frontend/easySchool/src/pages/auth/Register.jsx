import React, { useState } from "react";
import { apiCall } from "../../utils/api";
import AuthForm from "../../components/AuthForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Password do not match!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      if (file) {
        formData.append("profile_picture", file);
      }

      const data = await apiCall("/students/register", {
        method: "POST",
        body: formData,
      });

      setSuccess("Registration Sucessful");
      setError("");
      setPassword("");
      setEmail("");
      setFile(null);
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
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      isRegister={true}
    />
  );
};

export default Register;
