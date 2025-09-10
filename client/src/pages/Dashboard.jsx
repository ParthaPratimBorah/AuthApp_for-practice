// import { useEffect, useState } from "react";
// import api from "../utils/axios";
// import { useAuth } from "../context/AuthContext";
// import Navbar from "../components/Navbar";

// const Dashboard = () => {
//   const { token, logout } = useAuth();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await api.get("/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(res.data);
//       } catch {
//         logout();
//       }
//     };
//     fetchProfile();
//   }, [token]);

//   return (
//     <div className="min-h-screen bg-brand-dark text-brand-peach">
//       <Navbar />
//       <div className="flex flex-col justify-center items-center h-[80vh]">
//         <h1 className="text-3xl font-bold text-brand-softPink mb-6">Dashboard</h1>
//         {profile ? (
//           <div className="bg-brand-darkPurple p-6 rounded-lg shadow-lg w-96 text-center">
//             <p className="mb-2">
//               <b>Name:</b> {profile.name}
//             </p>
//             <p className="mb-4">
//               <b>Email:</b> {profile.email}
//             </p>
//           </div>
//         ) : (
//           <p>Loading profile...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import { useEffect, useState } from "react";
import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";

const Dashboard = () => {
  const { token, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-brand-dark text-brand-peach">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <h1 className="text-3xl font-bold text-brand-softPink mb-6">Dashboard</h1>

          {loading ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-brand-peach border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3">Loading profile...</p>
            </div>
          ) : profile ? (
            <div className="bg-brand-darkPurple p-6 rounded-lg shadow-lg w-96 text-center">
              <p className="mb-2">
                <b>Name:</b> {profile.name}
              </p>
              <p className="mb-4">
                <b>Email:</b> {profile.email}
              </p>
            </div>
          ) : (
            <p>Unable to load profile. Please login again.</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
