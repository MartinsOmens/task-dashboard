import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Task from "../pages/Task";
import { supabase } from "../lib/supabaseClient"; // adjust path to your supabase client

const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check for existing session when app loads
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // If already logged in and on a public route, redirect to dashboard
        const publicRoutes = ["/", "/login", "/signup"];
        if (publicRoutes.includes(window.location.pathname)) {
          navigate("/dashboard", { replace: true });
        }
      }
    });

    // 2. Listen for auth changes (e.g., after OAuth redirect)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        // User just signed in via Google (or email)
        navigate("/dashboard", { replace: true });
      } else if (event === "SIGNED_OUT") {
        // Optional: redirect to home or login
        navigate("/", { replace: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

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