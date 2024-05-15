import React from "react";

function Nav() {
  return (
    <div className="flex justify-center items-center flex-col w-full ">
      <div className="w-full flex justify-center items-center py-5 bg-gray shadow-sm">

        <div className="flex justify-between items-center w-full  max-w-7xl   text-sm text-gray-500 ">
            <div>
            <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="23" color="#000000" fill="none">
                <path d="M2 4C2 5.10457 2.89543 6 4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M2 12C2 13.1046 2.89543 14 4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M18 4C18 5.10457 18.8954 6 20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M18 12C18 13.1046 18.8954 14 20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12Z" stroke="currentColor" stroke-width="1.5" />
                <path d="M18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
            </div>
            <div className="flex ml-16  justify-center items-center gap-5 ">
                <p className="flex justify-center items-center font-semibold ">Support</p>
                <span className="flex justify-center items-center gap-2  font-semibold  ">
                <svg className=" text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" stroke-width="1.5" />
                    <path d="M2 12H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Language
                </span>
            </div>
            <div className="flex  justify-center items-center gap-5  font-semibold ">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>

        </div>
      </div>
      <div className="flex justify-between gap-5 items-center w-full  font-sofia  max-w-7xl my-4">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold  tracking-widest">Filvain</h1>
          <p className="text-xs text-slate-500">flight boking agency</p>
        </div>
        <nav className="flex justify-center items-center">
          <ul className="flex text-semibold justify-center items-center gap-16 ">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Services</li>
            <li className="">Contact</li>
          </ul>
        </nav>
        <div>
          <button className=" bg-blue-800/90  text-white px-7 py-2 rounded-full">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
