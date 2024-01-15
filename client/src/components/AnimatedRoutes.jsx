import React from "react";
import HomeLayout from "./HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Category from "../pages/Category";
import Listings from "../pages/Listings";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="category" element={<Category />} />
          <Route path="listings" element={<Listings />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
