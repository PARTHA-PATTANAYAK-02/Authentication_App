import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import { ToastContainer, toast, Bounce } from "react-toastify";
import PageNotAvailable from "./PageNotAvailable";
const style = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  theme: "light",
  transition: Bounce,
};
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("token") !== null;
  });
  const [type, setType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (!type) return;
    if (type === "Error") {
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (type === "Login") toast.success(`${type} Successfully`, style);
    else if (type === "Register") toast.success(`${type} Successfully`, style);
    else if (type === "Logout") toast.success(`${type} Successfully`, style);
    setType("");
    setErrorMessage("");
  }, [type, errorMessage]);
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                data={isLoggedIn}
                setType={setType}
                setIsLoggedIn={setIsLoggedIn}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage
                data={isLoggedIn}
                setType={setType}
                setIsLoggedIn={setIsLoggedIn}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <HomePage
                  setType={setType}
                  setIsLoggedIn={setIsLoggedIn}
                  setErrorMessage={setErrorMessage}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<PageNotAvailable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
