import { useState } from "react";
import { motion } from "framer-motion";
import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await api.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        login(res.data, res.data.token);
        navigate("/dashboard");
      } else {
        const res = await api.post("/auth/register", form);
        login(res.data, res.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-brand-dark via-brand-darkPurple to-brand-purple">
      <motion.div
        className="relative w-[400px] h-[450px] perspective"
        animate={{ rotateY: isLogin ? 0 : 180 }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Login Form */}
        <div className="absolute w-full h-full bg-brand-peach rounded-2xl shadow-lg backface-hidden p-6">
          <h2 className="text-2xl font-bold mb-4 text-brand-darkPurple">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3 bg-brand-softPink"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3 bg-brand-softPink"
            />
            <button className="bg-brand-purple text-brand-peach w-full py-2 rounded hover:bg-brand-mauve">
              Login
            </button>
          </form>
          <p
            onClick={() => setIsLogin(false)}
            className="mt-4 text-sm text-brand-dark cursor-pointer hover:underline"
          >
            Don’t have an account? Register
          </p>
        </div>

        {/* Register Form */}
        <div className="absolute w-full h-full bg-brand-peach rounded-2xl shadow-lg p-6"
             style={{ transform: "rotateY(180deg)" }}>
          <h2 className="text-2xl font-bold mb-4 text-brand-darkPurple">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3 bg-brand-softPink"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3 bg-brand-softPink"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3 bg-brand-softPink"
            />
            <button className="bg-brand-purple text-brand-peach w-full py-2 rounded hover:bg-brand-mauve">
              Register
            </button>
          </form>
          <p
            onClick={() => setIsLogin(true)}
            className="mt-4 text-sm text-brand-dark cursor-pointer hover:underline"
          >
            Already have an account? Login
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthCard;
