import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around gap-2 p-2 border-2 shadow-xl items-center">
        <div className="">
          <h2>LOGO</h2>
        </div>

        <ul className="flex  gap-5 p-2 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/movie">Movie</Link>
          </li>
        
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
