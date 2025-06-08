import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const links = (
    <>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/">Shop</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/product">Product</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/sale">Sale</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/pages">Pages</Link>
      </li>
      <li className="hover:text-[#00BADB] duration-500 ">
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  const icons = (
    <>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <IoSearchOutline />
      </li>
      <Link to="/account/login">
        <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
          <MdOutlineAccountCircle />
        </li>
      </Link>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <FaRegHeart />
      </li>
      <li className="hover:text-[#00BADB] duration-500 hover:scale-125">
        <BsCart2 />
      </li>
    </>
  );

  return (
    <div className="">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-5">
        <div className="flex items-center gap-5">
          <div className="lg:hidden">
            <RiMenu2Fill
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          </div>
         <Link to='/'><h2 className="text-2xl font-bold text-[#00BADB]">QuickCart</h2></Link> 
        </div>
        <div className="max-sm:hidden">
          <ul className="flex flex-row gap-5 text-xl items-center">{links}</ul>
        </div>
        <div>
          <ul className="flex flex-row gap-5 text-2xl items-center">{icons}</ul>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[white] shadow-lg z-50 transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex px-10 py-4  justify-between items-center">
          <Link to="/">
            {" "}
            <h2 className="text-xl font-bold ">QuickCart</h2>
          </Link>{" "}
          <button onClick={toggleMenu}>
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <ul className="px-10 py-5 space-y-4">{links}</ul>
      </div>

      {/* Overlay */}
      {menu && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
