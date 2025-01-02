"use client";
import Image from "next/image";
import Link from "next/link";
import logoDark from "../../public/images/logoDark.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-gradient-135 z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={180} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 uppercase text-sm font-semibold">
            <Link href={"/"}>
              <li className="headerLi">Home</li>
            </Link>
            <Link href={"/blogs"}>
              <li className="headerLi">Blogs</li>
            </Link>
            <Link href={"/latest"}>
              <li className="headerLi">Latest</li>
            </Link>
            <Link href={"/featured"}>
              <li className="headerLi">Featured</li>
            </Link>
            <Link href={"/tech"}>
              <li className="headerLi">Tech</li>
            </Link>
          </ul>

          <button className="uppercase text-sm border-[1px] border-black hover:border-black px-4 py-1 font-semibold hover:text-gray-500 rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-1/2 h-full bg-gradient-137 z-40`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl text-black">
            &#10005;
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 py-6">
          <Link href={"/"}>
            <li className="headerLi text-lg">Home</li>
          </Link>
          <Link href={"/blogs"}>
            <li className="headerLi text-lg">Blogs</li>
          </Link>
          <Link href={"/latest"}>
            <li className="headerLi text-lg">Latest</li>
          </Link>
          <Link href={"/featured"}>
            <li className="headerLi  text-lg">Featured</li>
          </Link>
          <Link href={"/tech"}>
            <li className="headerLi text-lg">Tech</li>
          </Link>
        </ul>

        <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md border-black hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600 ml-14 sm:ml-36 md:ml-36">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
