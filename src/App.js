import React from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Explore from "./pages/Explore/Explore";
import ContactUs from "./pages/Contact/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppNavigation />}>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/donate" element={<div>About Page</div>} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<div>Error 404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
