import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DietPage from "./pages/DietPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/diet"
          element={
            <ProtectedRoute>
              <DietPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
