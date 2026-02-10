// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminUsers from "./Pages/AdminUsers";
import Register from "./Pages/Register";
import UserDashboard from "./Pages/UserDashboard";
import UserLogin from "./Pages/UserLogin";
import TrainerDashboard from "./Pages/TrainerDashboard";
import AdminCreateTrainer from "./Pages/AdminCreateTrainer";
import TrainerLogin from "./Pages/TrainerLogin";
import MainPage from "./Pages/Mainpage"
import ContactForm from "./Pages/ContactForm";
import ThankYou from "./Pages/ThankYou";
import Settings from "./Pages/Settings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-users" element={<AdminUsers />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
      <Route path="/admin/create-trainer" element={<AdminCreateTrainer />} />
      <Route path="/trainer-login" element={<TrainerLogin />} />
        <Route path="/ContactForm" element={<ContactForm />} />
                <Route path="/ThankYou" element={<ThankYou/>} />
                <Route path="/Settings" element={<Settings/>} />


    </Routes>
  </BrowserRouter>
);
