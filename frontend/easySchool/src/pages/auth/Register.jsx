import { useState } from "react";
import { apiCall } from "../../utils/api";
import AuthForm from "../../components/AuthForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [file, setFile] = useState(() => {
    return sessionStorage.getItem("temp_profile_pic") || null;
  });

  const handleFileChange = async (event) => {
    // event.preventDefault();
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFile(base64String);
        sessionStorage.setItem("temp_profile_pic", base64String);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
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
        const res = await fetch(file);
        const blob = await res.blob();

        const imageFile = new File([blob], "profile.jpg", { type: blob.type });
        formData.append("profile_picture", imageFile);
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
      sessionStorage.removeItem("temp_profile_pic");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthForm
      heading="Welcome"
      title="Register"
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={handleSubmit}
      onFileChange={handleFileChange}
      file={file}
      loading={loading}
      error={error}
      isRegister={true}
    />
  );
};

export default Register;
