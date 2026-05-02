import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, saveUser } from "../lib/dummyAuth";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const fakeUser = {
      firstName,
      surName,
      email,
      password,
      id: Date.now(),
    };

    saveUser(fakeUser); // store account
    loginUser(fakeUser); // log them in
    toast.success("Account created 🎉");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="First Name"
          className="w-full mb-4 p-3 border rounded-lg"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Surname"
          className="w-full mb-4 p-3 border rounded-lg"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
        />

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

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
