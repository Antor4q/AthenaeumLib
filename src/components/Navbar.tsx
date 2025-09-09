import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/logo.png";

import { FaCartPlus, FaFacebookF, FaInstagram, FaRegHeart } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/#all-books" },
    { name: "Add Book", path: "/addBook" },
    { name: "Borrow Summary", path: "/borrowSummary" },
  ];

  return (
    <div className="bg-white shadow-md top-0 left-0 w-full z-40">
      {/* Topbar */}
      <div className="bg-[#fdf8f8] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-[40px] flex justify-between items-center">
          <h3 className="font-medium text-gray-600 text-sm lg:text-base">Rack Up Your Brain</h3>
          <div className="flex items-center justify-center gap-3 text-sm">
            <h3 className="text-gray-600 font-medium flex items-center gap-2">
              <HiOutlineMail /> athenaeumlib@gmail.com
            </h3>
            <hr className="w-[1px] h-[20px] bg-[#ff1616]" />
            <h3 className="text-gray-600 font-medium flex items-center gap-2">
              <MdAddIcCall /> +8801565457656
            </h3>
            <hr className="w-[1px] h-[20px] bg-[#ff1616]" />
            <div className="flex items-center gap-3">
              <Link to={"#"} className="text-gray-600 hover:text-[#ff1616]">
                <FaFacebookF />
              </Link>
              <Link to={"#"} className="text-gray-600 hover:text-[#ff1616]">
                <FaInstagram />
              </Link>
              <Link to={"#"} className="text-gray-600 hover:text-[#ff1616]">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1 justify-center">
        <div className="flex justify-between py-4 items-center">
          {/* Logo */}
          <img
            alt="logo"
            src={logo}
            className="w-[150px] h-[50px] md:w-[190px] md:h-[60px]"
          />

         
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-6">
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => {
                      if (name === "Home") {
                        return location.pathname === "/" && !location.hash
                          ? "text-[#ff1616] font-medium"
                          : "text-gray-700 hover:text-[#ff1616] font-medium transition-colors";
                      } else if (name === "All Books") {
                        return location.pathname === "/" && location.hash === "#all-books"
                          ? "text-[#ff1616] font-medium"
                          : "text-gray-700 hover:text-[#ff1616] font-medium transition-colors";
                      }
                      return isActive
                        ? "text-[#ff1616] font-medium"
                        : "text-gray-700 hover:text-[#ff1616] font-medium transition-colors";
                    }}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <hr className="w-[3px] h-[30px] bg-red-500" />

          
            <div className="flex items-center gap-7">
              <div className="relative">
                <h2 className="text-black font-medium text-xl">
                  <FaRegHeart />
                </h2>
                <div className="w-5 absolute h-5 flex items-center justify-center bg-[#ff1616] -top-2 -right-4 rounded-full">
                  <span className="text-white text-xs">5</span>
                </div>
              </div>
              <div className="relative">
                <h2 className="text-black font-medium text-xl">
                  <FaCartPlus />
                </h2>
                <div className="w-5 absolute h-5 flex items-center justify-center bg-[#ff1616] -top-2 -right-4 rounded-full">
                  <span className="text-white text-xs">0</span>
                </div>
              </div>
            </div>
          </div>

       
          <div
            className="md:hidden text-2xl text-gray-700 cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => {
                    if (name === "Home") {
                      return location.pathname === "/" && !location.hash
                        ? "text-[#ff1616] font-medium"
                        : "text-gray-700 hover:text-[#ff1616] font-medium transition-colors";
                    } else if (name === "All Books") {
                      return location.pathname === "/" && location.hash === "#all-books"
                        ? "text-[#ff1616] font-medium"
                        : "text-gray-700 hover:text-[#ff1616] font-medium transition-colors";
                    }
                    return isActive
                      ? "text-[#ff1616] font-medium"
                      : "text-gray-700 hover:text-[#ff1616] font-medium transition-colors";
                  }}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-around py-4 border-t">
            <div className="relative">
              <FaRegHeart className="text-2xl text-gray-700" />
              <div className="w-5 absolute h-5 flex items-center justify-center bg-[#ff1616] -top-2 -right-3 rounded-full">
                <span className="text-white text-xs">5</span>
              </div>
            </div>
            <div className="relative">
              <FaCartPlus className="text-2xl text-gray-700" />
              <div className="w-5 absolute h-5 flex items-center justify-center bg-[#ff1616] -top-2 -right-3 rounded-full">
                <span className="text-white text-xs">0</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
