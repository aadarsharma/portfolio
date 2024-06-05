"use client";
import React, {useState, useContext } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { HiMenu, HiOutlineX, HiMoon } from "react-icons/hi";
import MenuOverlay from "./MenuOverlay";
import ThemeContext from "./ThemeContext";

const navLinks = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Experience",
        path:"#experience", 
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const themeCtx = useContext(ThemeContext);

    function toggleThemeHandler() {
        themeCtx.toggleThemeHandler();
    }

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link 
                    href={"/"} 
                    className="text-xl md:text-4xl text-white font-semibold"
                >
                    Aadarsh Sharma
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button 
                                onClick={() => setNavbarOpen(true)} 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <HiMenu className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button 
                                onClick={() => setNavbarOpen(false)} 
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <HiOutlineX className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {
                            navLinks.map((link, index) => 
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                            )
                        }
                    </ul>
                </div>
                <button
                    type="button"
                    className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
                    onClick={toggleThemeHandler}
                >
                    <HiMoon className="h-5 w-5"/>
                </button>
            </div>
            {navbarOpen ? <MenuOverlay links = { navLinks } /> : null}
        </nav>
    );
};

export default Navbar;