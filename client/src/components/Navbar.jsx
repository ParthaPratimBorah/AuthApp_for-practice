import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-brand-darkPurple text-brand-peach p-4 flex justify-between items-center shadow-lg">
      <h1
        onClick={() => navigate("/dashboard")}
        className="text-xl font-bold cursor-pointer hover:text-brand-softPink"
      >
        AuthApp
      </h1>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm">Hi, {user.name}</span>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/")}
          className="bg-brand-peach text-brand-dark px-3 py-1 rounded hover:bg-brand-softPink"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
