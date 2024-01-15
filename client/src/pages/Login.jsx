import React from "react";
import { motion } from "framer-motion";
const Login = () => {
  return (
    <motion.div
      className="py-20 px-4 max-w-6xl mx-auto border-green-500 border-4 bg-blue-300"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1, transition: { duration: 0.5, ease: "circOut" } }}
      exit={{ scaleX: 0, transition: { duration: 0.5, ease: "circIn" } }}
    >
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About Realty</h1>
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About Realty</h1>
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About Realty</h1>
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About Realty</h1>

      <p className="mb-4 text-slate-700">
        Our team of agents has a wealth of experience and knowledge in the real
        estate industry, and we are committed to providing the highest level of
        service to our clients. We believe that buying or selling a property
        should be an exciting and rewarding experience, and we are dedicated to
        making that a reality for each and every one of our clients.
      </p>
    </motion.div>
  );
};

export default Login;
