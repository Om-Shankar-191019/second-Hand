import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseFill } from "react-icons/ri";
import { defaultAvatar } from "../utils/constants";
import { MdPhotoCamera } from "react-icons/md";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({});
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleSignInWithGoogle = () => {
    // Implement Google Sign-In logic here
  };

  const handleLogin = () => {
    // Implement login logic here
  };

  const handleSignUpLink = () => {
    // Implement navigation to sign up page or open another modal for sign up
    console.log("Navigate to Sign Up");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur  fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-theme-color to-theme-color-gradient  p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="max-w-md mx-auto px-6 pb-6 bg-white rounded-md shadow-md">
                <div
                  className="text-gray-800 flex justify-end -mr-4 py-2 cursor-pointer "
                  onClick={() => setIsOpen(false)}
                >
                  <RiCloseFill size={20} className="font-bold" />
                </div>

                {!isSignup ? (
                  <button
                    className="bg-gradient-to-br from-theme-color to-theme-color-gradient text-white py-2 px-4 rounded-full mb-4 w-full"
                    onClick={handleSignInWithGoogle}
                  >
                    Sign in with Google
                  </button>
                ) : (
                  <div className="flex justify-center pb-4 ">
                    <div className="relative  ">
                      <img
                        src={defaultAvatar}
                        className="h-16 w-16 rounded-full object-cover "
                      />
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 absolute -bottom-2 right-0 "
                        htmlFor="userPhoto"
                      >
                        <div className="text-gray-500 rounded-full bg-white p-1 border border-gray-500 cursor-pointer">
                          <MdPhotoCamera size={16} />
                        </div>
                        <input type="file" id="userPhoto" className="hidden" />
                      </label>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mb-4">
                  {isSignup && (
                    <div className="mb-4">
                      {" "}
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="w-full p-2 border rounded-md"
                        placeholder="Your username"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    {" "}
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Your email"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="Your password"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    className="bg-color-green text-white py-2 px-4 rounded-full mb-4 w-full"
                    onClick={handleLogin}
                  >
                    {isSignup ? "Sign up" : "Login"}
                  </button>
                </form>

                {isSignup ? (
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                      className="text-blue-500 underline"
                      onClick={() => setIsSignup(false)}
                    >
                      Login
                    </button>
                  </p>
                ) : (
                  <p className="text-sm text-gray-600">
                    Not a member?{" "}
                    <button
                      className="text-blue-500 underline"
                      onClick={() => setIsSignup(true)}
                    >
                      Sign up
                    </button>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
