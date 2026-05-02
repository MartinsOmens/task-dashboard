import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Task from "../pages/Task";
import { supabase } from "../lib/supabaseClient"; // adjust path to your supabase client

const AppRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicRoutes = ["/", "/login", "/signup"];

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const path = location.pathname;

      // ✅ logged in
      if (session && publicRoutes.includes(path)) {
        navigate("/dashboard", { replace: true });
      }

      // 🚪 logged out
      if (event === "SIGNED_OUT") {
        navigate("/login", { replace: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
