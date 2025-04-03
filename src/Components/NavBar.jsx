import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="bg-black">
      <div className="h-20 w-full bg-black pl-10 pr-10 lg:pr-20 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-white">Shubham Rawat</h1>
        
        {/* Large Screen Navigation */}
        <div className="hidden bg-blue-500 lg:flex justify-around items-center w-[50%] h-[80%]">
          <h2 className="text-xl font-bold">Home</h2>
          <h2 className="text-xl font-bold">About</h2>
          <h2 className="text-xl font-bold">Resume</h2>
          <h2 className="text-xl font-bold">Project</h2>
          <h2 className="text-xl font-bold">Contact</h2>
        </div>

        {/* Mobile Menu Button */}
        <BsList
          className="lg:hidden text-white text-3xl cursor-pointer"
          onClick={handleSideBar}
        />
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] md:w-[40%] bg-red-500 z-50 shadow-lg transform transition-transform duration-500 ease-in-out 
        ${isSideBarOpen ? "translate-x-0" : "translate-x-[100%]"}`}>
        
        <div className="w-[100%] bg-yellow-400 block">
          <IoClose
            className="text-3xl text-black absolute top-4 right-4 cursor-pointer z-[999]"
            onClick={handleSideBar}
          />
        </div>

        <h1 className="mt-20 pl-7 text-xl font-bold">Home</h1>
        <h1 className="mt-5 pl-7 text-xl font-bold">About</h1>
        <h1 className="mt-5 pl-7 text-xl font-bold">Resume</h1>
        <h1 className="mt-5 pl-7 text-xl font-bold">Projects</h1>
        <h1 className="mt-5 pl-7 text-xl font-bold">Contact</h1>
      </div>
    </div>
  );
};

export default NavBar;
