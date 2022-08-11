import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      id="header"
      className="flex justify-between items-center h-24 text-white max-w-[80%] mx-auto px-4"
    >
      <h1 className="text-3xl w-full font-bold text-[#00df9a]">
        O<sup>3</sup>
        <span className="text-red-500">.</span> Portfolio
        <span className="text-red-500">.</span>
      </h1>

      <ul className="hidden md:flex">
        <li>
          <a href="#hero" className="p-4">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="p-4">
            About
          </a>
        </li>
        <li>
          <a href="#resume" className="p-4">
            Resume
          </a>
        </li>
        <li>
          <a href="#portfolio" className="p-4">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#services" className="p-4">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="p-4">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#011426] ease-in duration-1000"
            : "hidden"
        }
      >
        {/* <h1 className="text-3xl w-full font-bold text-[#00df9a] m-4 mt-7">REACT.</h1>  */}
        <h1 className="text-3xl w-full font-bold text-[#00df9a] m-4 mt-8">
          My<span className="text-red-500">.</span> Projects
          <span className="text-red-500">.</span>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a href="#hero" className="">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#about" className="">
              About
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#resume" className="">
              Resume
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#portfolio" className="">
              Portfolio
            </a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#services" className="">
              Services
            </a>
          </li>
          <li className="p-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
