import { FaHome, FaTasks, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../lib/dummyAuth";
import { supabase } from "../lib/supabaseClient";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      navigate("/login", { replace: true });
      toast.success("Logout successful 👋");
    }
  };

  return (
    <div className="w-16 md:w-64 bg-gray-50 shadow-md p-3 md:p-5 flex flex-col justify-between h-full md:h-screen">
      <div>
        <h1 className="hidden md:block text-2xl font-bold mb-8">TaskFlow</h1>

        <nav className="space-y-4">
          {/* Dashboard */}
          <div
            onClick={() => navigate("/dashboard")}
            className="flex items-center justify-center md:justify-start gap-3 cursor-pointer hover:text-black"
          >
            <FaHome />
            <span className="hidden md:inline">Dashboard</span>
          </div>

          {/* Tasks */}
          <div
            onClick={() => navigate("/tasks")}
            className="flex items-center justify-center md:justify-start gap-3 cursor-pointer hover:text-black"
          >
            <FaTasks />
            <span className="hidden md:inline">Tasks</span>
          </div>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center md:justify-start gap-3 text-red-500 hover:text-red-700"
      >
        <FaSignOutAlt />
        <span className="hidden md:inline">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
