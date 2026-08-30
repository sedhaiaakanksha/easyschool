import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { Upload } from "lucide-react";
import { FiEye, FiMail, FiLock, FiEyeOff, FiUser } from "react-icons/fi";

export default function AuthForm({
  heading,
  title,
  email,
  setEmail,
  password,
  confirmPassword,
  setConfirmPassword,
  setPassword,
  onSubmit,
  loading,
  error,
  file,
  onFileChange,
  isRegister = false,
}) {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [file, setFile] = useState(null);
  //   const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const checkingError = () => {
    if (!email) {
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top header*/}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
        <div className="flex items-center space-x-2">
          <span>
            <img src={logo} alt="EasySchool Logo" className="h-8 w-auto" />
          </span>
          <span className="font-bold text-gray-800">EasySchool</span>
        </div>
        <a
          href="#support"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Contact support
        </a>
      </div>
      {/* Main Body*/}
      <div className="flex flex-1 item-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {heading}
          </h2>
          {!isRegister && (
            <div className="flex justify-center">
              <p className="text-black font-sans  ">
                Please enter your credentials to access your
                <span className="flex justify-center font-sans">dashboard</span>
              </p>
            </div>
          )}
          {isRegister && (
            <div className="flex justify-center items-center">
              <div className="relative inline-block">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 overflow-hidden border-2 border-yellow-400 shadow-sm">
                  {file ? (
                    //show preview if the file is selcted
                    <img
                      src={file}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FiUser size={40} />
                  )}
                </div>

                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-0 right-0 bg-yellow-400 p-1.5 rounded-full text-white cursor-pointer hover:bg-yellow-500 shadow-sm"
                  title="Upload Profile Picture"
                >
                  <Upload size={14} />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="hidden"
                />
              </div>
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <div className="">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    value={email}
                    required
                    placeholder="john@easySchool.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 pl-10 px-3 py-2 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0  left-3 flex items-center pr-8 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <FiMail size={20} />
                  </div>
                </div>
                <label className="block text-sm font-medium text-gray-700 pt-4">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    required
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border pl-10 border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-yekkow-200 sm-text-sm"
                  />
                  <div className="absolute left-3 inset-y-2 flex items-center pr-8 text-gray-500 hover:text-gray-700 focus:outline-none ">
                    <FiLock size={20} />
                  </div>
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {!showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {!isRegister && (
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-200 px-4 py-2 text-m font-medium text-blue-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:bg-yellow-100"
                >
                  {loading ? "Please wait...." : title}
                </button>
              </div>
            )}
            {error && (
              <div className="rounded-md p-2 text-sm text-red-700 mt-0.5">
                {error}
              </div>
            )}
            {!isRegister && (
              <div className="flex items-center justify-center">
                <p className="text-sm font-sans">
                  Don't have account?{" "}
                  <Link
                    to="/register"
                    className="text-sm text-blue-600 underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            )}
            {isRegister && (
              <>
                <div>
                  <label className=" block text-sm font-medium text-gray-700 ">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300"
                  >
                    {loading ? "Please wait...." : title}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
