import { Link } from "gatsby";
import React, { useState } from "react";
import TransformText from "./transform-text.js";

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
      setMenuOpened(!menuOpened);
  }

  return (
    <nav className={`principal-container bg-secondary-500 z-40 md:z-20 md:shadow-lg`}>
      <div className={`principal-container flex-col relative bg-secondary-500 shadow-lg z-10 md:shadow-none md:w-templateValue md:justify-start`}>
        <button className="p-3 centered-flex md:hidden" onClick={toggleMenu}>
          {
            menuOpened ?
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          }
        </button>
        <ul className={`${menuOpened ? 'flex flex-col' : 'hidden'} absolute top-12 w-full shadow-lg bg-secondary-500 md:flex md:shadow-none md:top-0 md:relative md:flex-row`}>
          <li className="centered-flex">
            <Link to="/" className={`p-3 flex flex-1 justify-center text-white text-center hover:bg-secondary-800 focus:bg-secondary-800 focus:outline-none cursor-pointer`}>
              <TransformText uppercaseFirstLetter text={'home'} />
            </Link>
          </li>
          <li className="centered-flex">
            <Link to="#" className={`p-3 flex flex-1 justify-center text-white text-center hover:bg-secondary-800 focus:bg-secondary-800 focus:outline-none cursor-pointer`}>
              <TransformText uppercaseFirstLetter text={'url 1'} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;