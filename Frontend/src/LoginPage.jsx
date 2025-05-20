import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
const LoginPage = ({ setIsLoggedIn, setType, setErrorMessage, data }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      navigate("/home");
      return;
    }
  }, [navigate]);
  function handlChange(e) {
    const { name, value } = e.target;
    setLoginData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8000/login`,
        // {
        //   username: loginData.username,
        //   password: loginData.password,
        // },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
        // ‍⁡⁣⁢⁣𝗼𝗿⁡
        loginData
      );
      localStorage.setItem("username", loginData.username);
      localStorage.setItem("token", ""); // assume server returns a token
      setIsLoggedIn(true);
      setType(res.data.message);
      navigate("/home");
      setLoginData({ username: "", password: "" });
    } catch (err) {
      setType("Error");
      setErrorMessage(err.response?.data?.error || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="opacity-90 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-6 w-6 text-gray-500" />
              </div>
              <input
                name="username"
                type="text"
                placeholder="Enter username"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                value={loginData.username}
                onChange={handlChange}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                value={loginData.password}
                onChange={handlChange}
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showPassword ? (
                  <EyeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    className="h-6 w-6 text-gray-500 "
                  />
                ) : (
                  <EyeSlashIcon
                    onClick={() => setShowPassword(!showPassword)}
                    className="h-6 w-6 text-gray-500 "
                  />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
