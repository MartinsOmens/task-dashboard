import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Welcome {user?.user_metadata?.first_name || user?.email} 👋
      </h2>
    </div>
  );
};

export default Header;
