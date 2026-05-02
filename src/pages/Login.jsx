import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSavedUser, loginUser } from "../lib/dummyAuth";
import { toast } from "react-toastify";
import { signInWithGoogle } from "../lib/supabaseClient";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = getSavedUser();

    if (!storedUser) {
      toast.error("No user found. Please sign up.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      loginUser(storedUser); // keep session alive
      toast.success("Login successful 👋");

      setTimeout(() => navigate("/dashboard"), 800);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={signInWithGoogle}
        className="w-full bg-black text-white py-3 rounded-lg">
          Login with Google
        </button>
        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-black cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
