import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
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

          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <div className="">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring-yekkow-200 sm-text-sm"
                  />
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

              {isRegister && (
                <div>
                  <label className="">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block  w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-400 focus:ouline-none focus-ring-indigo-500 sm-text-sm"
                  />
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-200 px-4 py-2 text-m font-medium text-blue-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:bg-yellow-100"
              >
                {loading ? "Please wait...." : title}
              </button>
            </div>
            {error && (
              <div className="rounded-md p-2 text-sm text-red-700 mt-0.5">
                {error}
              </div>
            )}
            {isRegister && (
              <div>
                <label className=" block text-sm font-medium text-gray-700">
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
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-300"
              >
                {loading ? "Please wait ...." : title}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
