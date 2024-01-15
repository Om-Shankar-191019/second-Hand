import React from "react";
import { motion } from "framer-motion";
import { homePageHeaderImage } from "../utils/constants";
import { MdLaptopMac } from "react-icons/md";

const cat = [
  {
    symbol: <MdLaptopMac />,
    tag: "ele",
  },
];
const Home = () => {
  return (
    <motion.div
      className=" bg-cover bg-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      style={{ backgroundImage: `url(${homePageHeaderImage})` }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1, transition: { duration: 0.5, ease: "circOut" } }}
      // exit={{ scaleX: 0, transition: { duration: 0.5, ease: "circIn" } }}
    >
      <div className="px-16 sm:px-20 gap-6 w-full h-full  backdrop-brightness-50 backdrop-blur-sm flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl text-center font-semibold">
          Buy & Sell Near You
        </h1>
        <h3 className="text-white text-lg text-center w-1/2">
          Join the millions who buy and sell from each other everyday in local
          communities throught India
        </h3>
        <h2 className="text-white text-xl text-center font-semibold  uppercase">
          Popular category
        </h2>

        <div className="flex gap-1">
          <div className="flex flex-col text-white items-center justify-center backdrop-opacity-5  p-3 rounded-md bg-white/30">
            <MdLaptopMac size={24} />
            <p>Electronics</p>
          </div>
          <div className="flex flex-col text-white items-center justify-center backdrop-opacity-5  p-3 rounded-md bg-white/30">
            <MdLaptopMac size={24} />
            <p>Electronics</p>
          </div>
          <div className="flex flex-col text-white items-center justify-center backdrop-opacity-5  p-3 rounded-md bg-white/30">
            <MdLaptopMac size={24} />
            <p>Electronics</p>
          </div>
          <div className="flex flex-col text-white items-center justify-center backdrop-opacity-5  p-3 rounded-md bg-white/30">
            <MdLaptopMac size={24} />
            <p>Electronics</p>
          </div>
          <div className="flex flex-col text-white items-center justify-center backdrop-opacity-5  p-3 rounded-md bg-white/30">
            <MdLaptopMac size={24} />
            <p>Electronics</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
