import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePageSkeleton from "./HomePageSkeleton";
const HomePage = ({ setIsLoggedIn, setType, setErrorMessage }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Check if we have either state or localStorage username
    const username = localStorage.getItem("username");

    if (!username) {
      // If no username, redirect to login
      navigate("/login");
      return;
    }

    getData(username);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Also clear username
    setIsLoggedIn(false);
    setType("Logout");
    navigate("/login");
  };

  const getData = async (name) => {
    try {
      setLoading(true);
<<<<<<< HEAD
      const res = await axios.get(
        `https://authentication-backend-ozjh.onrender.com/data/${name}`
      );
=======
      const res = await axios.get(`https://authentication-backend-ozjh.onrender.com/data/${name}`);
>>>>>>> ef57eaecdad26e9d5105261d6aed8f223d48ded3
      setUserInfo(res.data);
    } catch (err) {
      setType("Error");
      const error = err.response?.data?.error;
      setErrorMessage(error || "Login failed. Try again.");
      // If error occurs (like unauthorized), redirect to login
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {!loading ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
          {/* Header */}
          <header className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-800">
                  User Profile
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-700 font-medium">
                    {userInfo?.fullname?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              {/* Welcome Banner */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Welcome , {userInfo && userInfo.fullname}!
                    </h2>
                    <p className="text-gray-600">
                      Here's your profile information.
                    </p>
                  </div>
                </div>
              </div>

              {/* User Information Section */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-gray-800">{userInfo?.fullname}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <p className="text-gray-800">{userInfo?.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Account Created</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">
                        {userInfo?.createAT}
                      </p>
                    </div>
                    <span className="text-3xl">📅</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Account Status</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">
                        Active
                      </p>
                    </div>
                    <span className="text-3xl">✔️</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Last Active</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">
                        Just now
                      </p>
                      <p className="text-green-500 text-sm mt-1">Online</p>
                    </div>
                    <span className="text-3xl">🟢</span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer with Logout Button */}
          <footer className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2023 Your Company. All rights reserved.
              </p>
              <button
                onClick={handleLogout}
                className="flex items-center cursor-pointer text-gray-600 hover:text-red-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </footer>
        </div>
      ) : (
        <HomePageSkeleton />
      )}
    </>
  );
};

export default HomePage;
