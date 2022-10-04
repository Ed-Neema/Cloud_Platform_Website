import React, {useState} from "react";
import { Bars4Icon, XCircleIcon } from "@heroicons/react/24/outline";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
  return (
    <>
      <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
            <ul className="hidden md:flex">
              <li className="cursor-pointer hover:text-indigo-600">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  delay={1000}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-600">
                <Link
                  to="about"
                  smooth={true}
                  offset={-200}
                  duration={500}
                  delay={1000}
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-600">
                <Link
                  to="support"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  delay={1000}
                >
                  Support
                </Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-600">
                <Link
                  to="platforms"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  delay={1000}
                >
                  Platforms
                </Link>
              </li>
              <li className="cursor-pointer hover:text-indigo-600">
                <Link
                  to="pricing"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  delay={1000}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
          {/* harmburger menu */}
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <Bars4Icon className="w-5" />
            ) : (
              <XCircleIcon className="w-5" />
            )}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
