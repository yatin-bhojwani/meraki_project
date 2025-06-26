'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive(!navActive);

  return (
<header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm shadow-xl z-50 border-b border-orange-900/30">
  <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center py-3">
    {/* Logo - Always visible */}
    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0">
      <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full overflow-hidden border-2  group-hover:border-orange-400 transition-all duration-300">
        <Image
          src="/images/meraki_logo.png"
          alt="Meraki Logo"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 40px, 48px"
        />
      </div>
      <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 bg-clip-text text-transparent whitespace-nowrap font-[Poppins] tracking-tight">
        <span className="italic font-[Dancing_Script] text-orange-300">Meraki</span>, Culinary Arts Society
      </span>
    </Link>

    {/* Desktop Nav - Hidden on mobile */}
    <nav className="hidden md:flex items-center space-x-1 ml-auto">
      {[
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#events", label: "Events" },
        { href: "#gallery", label: "Gallery" },
        { href: "#team", label: "Team" },
        { href: "#contact", label: "Contact" },
      ].map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="px-3 py-1.5 sm:px-4 sm:py-2 text-orange-100/90 hover:text-white font-medium text-xs sm:text-sm uppercase tracking-wider group transition-all duration-200"
        >
          {label}
          <span className="block h-0.5 bg-orange-400 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
        </a>
      ))}
     
    </nav>

    {/* Mobile Menu Button - Visible only on mobile */}
    <button
      onClick={toggleNav}
      className="md:hidden text-orange-300 p-2 rounded-lg hover:bg-orange-900/50 transition-colors"
      aria-label="Menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile Nav - Appears when toggled */}
  {navActive && (
    <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-orange-900/30 animate-fade-in">
      <nav className="flex flex-col space-y-1 px-4 py-3">
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About Us" },
          { href: "#events", label: "Events" },
          { href: "#gallery", label: "Gallery" },
          { href: "#team", label: "Our Team" },
          { href: "#contact", label: "Contact Us" },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="px-4 py-3 text-orange-100 hover:text-white hover:bg-orange-900/30 rounded-md transition-all duration-200 font-medium flex items-center text-sm sm:text-base"
            onClick={toggleNav} // Close menu when an item is clicked
          >
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
            {label}
          </a>
        ))}
       
      </nav>
    </div>
  )}
</header>
  );
};

export default Header;
