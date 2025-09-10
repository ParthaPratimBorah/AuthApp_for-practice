// import { useState } from "react";
// import { motion } from "framer-motion";
// import api from "../utils/axios";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import PageWrapper from "../components/PageWrapper";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         const res = await api.post("/auth/login", {
//           email: formData.email,
//           password: formData.password,
//         });
//         login(res.data.token, res.data.user);
//         navigate("/dashboard");
//       } else {
//         await api.post("/auth/register", formData);
//         alert("Registration successful! Please login.");
//         setIsLogin(true);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-brand-dark via-brand-darkPurple to-brand-purple">
//       <motion.div
//         key={isLogin ? "login" : "register"}
//         initial={{ rotateY: 180, opacity: 0 }}
//         animate={{ rotateY: 0, opacity: 1 }}
//         exit={{ rotateY: -180, opacity: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl w-96 
//                    hover:scale-105 transition-transform duration-500 border border-white/30"
//       >
//         {/* Glow effect */}
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-softPink/20 to-brand-peach/10 blur-2xl -z-10"></div>

//         <h2 className="text-3xl font-extrabold mb-6 text-brand-peach text-center drop-shadow-lg">
//           {isLogin ? "Welcome Back 👋" : "Join Us 🚀"}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 mb-3 rounded-lg bg-white/40 border border-white/30 
//                          text-brand-dark placeholder-brand-dark focus:ring-2 
//                          focus:ring-brand-softPink outline-none"
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 mb-3 rounded-lg bg-white/40 border border-white/30 
//                        text-brand-dark placeholder-brand-dark focus:ring-2 
//                        focus:ring-brand-softPink outline-none"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-3 mb-4 rounded-lg bg-white/40 border border-white/30 
//                        text-brand-dark placeholder-brand-dark focus:ring-2 
//                        focus:ring-brand-softPink outline-none"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-purple to-brand-mauve 
//                        text-brand-peach font-bold shadow-md hover:shadow-xl hover:from-brand-mauve 
//                        hover:to-brand-purple transition-all duration-300"
//           >
//             {isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-brand-peach">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <span
//             onClick={() => setIsLogin(!isLogin)}
//             className="ml-2 text-brand-softPink font-semibold cursor-pointer hover:underline"
//           >
//             {isLogin ? "Register" : "Login"}
//           </span>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default AuthPage;



import { useState } from "react";
import { motion } from "framer-motion";
import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await api.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });
        login(res.data.token, res.data.user);
        navigate("/dashboard");
      } else {
        await api.post("/auth/register", formData);
        alert("Registration successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <PageWrapper>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-brand-dark via-brand-darkPurple to-brand-purple">
        <motion.div
          key={isLogin ? "login" : "register"}
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -180, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl w-96 
                     hover:scale-105 transition-transform duration-500 border border-white/30"
        >
          {/* Glow effect behind card */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-softPink/20 to-brand-peach/10 blur-2xl -z-10"></div>

          <h2 className="text-3xl font-extrabold mb-6 text-brand-peach text-center drop-shadow-lg">
            {isLogin ? "Welcome Back 👋" : "Join Us 🚀"}
          </h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-3 rounded-lg bg-white/40 border border-white/30 
                           text-brand-dark placeholder-brand-dark focus:ring-2 
                           focus:ring-brand-softPink outline-none"
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-3 rounded-lg bg-white/40 border border-white/30 
                         text-brand-dark placeholder-brand-dark focus:ring-2 
                         focus:ring-brand-softPink outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg bg-white/40 border border-white/30 
                         text-brand-dark placeholder-brand-dark focus:ring-2 
                         focus:ring-brand-softPink outline-none"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-purple to-brand-mauve 
                         text-brand-peach font-bold shadow-md hover:shadow-xl hover:from-brand-mauve 
                         hover:to-brand-purple transition-all duration-300"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="text-center mt-6 text-brand-peach">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-brand-softPink font-semibold cursor-pointer hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default AuthPage;
