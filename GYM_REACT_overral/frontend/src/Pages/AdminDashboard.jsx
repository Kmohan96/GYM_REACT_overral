import { useEffect, useState } from "react";
import api from "../Api/Axios";
import Navbar from "../Components/Navbar";
import AdminSidebar from "../Components/AdminSidebar";
import "../Styles/Layouts.css";
import "../Styles/Admindashboard.css"
import Footer from "../Components/Footer";

function AdminDashboard() {
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    api.get("/api/admin/dashboard/")
      .then(res => setAdmin(res.data.admin))
      .catch(() => alert("Unauthorized"));
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <div className="main-content">
        <AdminSidebar />

        <div className="page-content">
          <h2>Welcome, {admin}</h2>
          <p>Admin Dashboard</p>
        </div>
      </div>

    <Footer/>
    </div>
  );
}

export default AdminDashboard;