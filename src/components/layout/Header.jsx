import { useState } from "react";
import {HiBars3} from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import { NAV_ITEMS, isPathActive } from "../../utils/navigation";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isNavItemActiv = (path) => isPathActive(path, location.pathname);
    return (
        <header className="navbar bg-base-100 shadow-lg">
            <div
              className={`navbar-start dropdown dropdown-bottom ${isMenuOpen ? "dropdown-open" : ""
              }`}
            >
                <div
                  className="btn bg-ghost lg:hidden"
                  onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <HiBars3 className="w-6 h-6" />{" "}
                </div>
                {isMenuOpen && (
                    <NavLinks 
                        items={NAV_ITEMS}
                        isActive={isNavItemActiv}
                        onItemClick={() => setIsMenuOpen(false)}
                        listClassName={
                            "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max"
                        } 
                    />
                )}
                <Link
                    to="/"
                    className="btn btn-ghost text-lg font-bold 
                    text-primary hover:text-primary-focus transition-colors duration-200"
                >
                    🍳早餐時光
                </Link>
                <div className="navbar-center hidden md:flex">
                    <NavLinks items={NAV_ITEMS} isActive={isNavItemActiv}/>
                </div>
            </div>
        </header>
    );
}