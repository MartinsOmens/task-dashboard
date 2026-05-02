const Header = ({ user }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Welcome {user?.firstName}👋
      </h2>
    
    </div>
  );
};

export default Header;
