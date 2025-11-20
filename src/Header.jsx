import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // optional, or replace with your icons
import logo from "./assets/images/logo.png"

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-600 via-green-700 to-emerald-800 text-white shadow-2xl md:sticky md:top-0 md:z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4">

          {/* LEFT: logo + title (always left aligned) */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-white rounded-full shadow-md">
              <img
                src={logo}
                alt="Golden Dreams Agency logo"
                className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded-full"
              />
            </div>

            <div className="text-left">
              <h1 className="text-base sm:text-lg md:text-2xl font-bold tracking-wide
                             bg-gradient-to-r from-yellow-300 via-yellow-200 to-white
                             bg-clip-text text-transparent leading-tight">
                Golden Dreams Agency
              </h1>

              <p className="text-[11px] sm:text-xs text-orange-200 font-semibold -mt-0.5">
                Golden Way to Saudi
              </p>
            </div>
          </div>

          {/* RIGHT: desktop nav (lg+) */}
          <nav className="hidden lg:flex items-center space-x-8 text-lg">
            <a href="#about" className="hover:text-yellow-300 transition font-semibold">About</a>
            <a href="#services" className="hover:text-yellow-300 transition font-semibold">Services</a>
            <a href="#mission" className="hover:text-yellow-300 transition font-semibold">Mission</a>
            <a href="#gallery" className="hover:text-yellow-300 transition font-semibold">Gallery</a>
            <a href="#contact" className="hover:text-yellow-300 transition font-semibold">Contact</a>
          </nav>

          {/* MOBILE: hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {open ? (
                <XIcon className="h-6 w-6 text-white" />
              ) : (
                <MenuIcon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU: slides down full width */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-max-h duration-300 overflow-hidden ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4">
          <div className="flex flex-col space-y-2 bg-gradient-to-r from-orange-600 via-green-700 to-emerald-800 rounded-b-md px-3 py-4">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-white py-2 px-2 rounded hover:bg-white/10 transition font-semibold"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="block text-white py-2 px-2 rounded hover:bg-white/10 transition font-semibold"
            >
              Services
            </a>
            <a
              href="#mission"
              onClick={() => setOpen(false)}
              className="block text-white py-2 px-2 rounded hover:bg-white/10 transition font-semibold"
            >
              Mission
            </a>
            <a
              href="#gallery"
              onClick={() => setOpen(false)}
              className="block text-white py-2 px-2 rounded hover:bg-white/10 transition font-semibold"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-white py-2 px-2 rounded hover:bg-white/10 transition font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
