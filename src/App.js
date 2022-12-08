import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

//pages
import LandingPage from "./pages/LandingPage";
import AdminRegister from "./pages/admin/AdminRegister";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminResponding from "./pages/admin/AdminResponding";
import AdminRequestDetails from "./pages/admin/AdminRequestDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserRegister from "./pages/User/UserRegister";
import UserLogin from "./pages/User/UserLogin";
import UserEmergencyForm from "./pages/User/UserEmergencyForm";
import VisitorForm from "./pages/User/VisitorForm";
import Contacts from "./pages/Contacts";
import About from "./pages/About";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin-register" element={<AdminRegister />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/user-register" element={<UserRegister />} />
                <Route path="/user-login" element={<UserLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/emergency-form" element={<UserEmergencyForm />} />
                <Route path="/visitor-form" element={<VisitorForm />} />
                <Route path="/request-details" element={<AdminRequestDetails />}/>
                <Route path="/admin-responding" element={<AdminResponding />} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/about" element={<About/>} />
                
            </Routes>
        </div>
    );
}

export default App;
