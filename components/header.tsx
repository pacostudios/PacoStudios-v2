"use client";

import { Menu } from 'lucide-react';
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{ viewTransitionName: 'site-header' }}
    >
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-[#111] z-50 flex flex-col p-6 gap-4 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="self-end text-white text-2xl mb-4 hover:text-[#F47C20] transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Work", href: "/#services" },
          { label: "Contact", href: "/#contact" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-white border-b border-white/10 pb-3 hover:text-[#F47C20] transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "20px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Navbar */}
      {/* <div className="flex justify-center items-center p-4 bg-white">
        <div className="flex items-center bg-[#111] rounded-lg overflow-hidden h-[52px] w-[480px]">

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center bg-[#F47C20] hover:bg-[#d96e18] transition-colors h-full w-14 flex-shrink-0"
          >
            <Menu />
          </button>

          <div
            className="flex-1 text-center text-white select-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "26px", fontWeight: 900, letterSpacing: "4px" }}
          >
            PACO
          </div>

          <button
            className="flex items-center justify-center bg-[#F47C20] hover:bg-[#d96e18] transition-colors h-full px-5 flex-shrink-0 text-white rounded-r-lg"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "15px", fontWeight: 700, letterSpacing: "0.5px" }}
          >
            Contact Us
          </button>

        </div>
      </div> */}

      <div className="flex items-center justify-center bg-black max-w-[420px] mx-auto m-2 p-2 rounded-[8px]">
        <div className="flex justify-between items-stretch w-full gap-2">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center justify-center bg-[#EB6E00] hover:bg-[#d96e18] transition-colors px-3 flex-shrink-0 rounded-[4px]"
          >
            <Menu className="text-black" />
          </button>

          <a
            href="/"
            className="flex-1 flex items-center justify-center text-center text-white select-none leading-none pt-1"
            style={{
              fontSize: "46px",
            }}
          >
            PACO
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center bg-[#EB6E00] hover:bg-[#d96e18] transition-colors px-4 flex-shrink-0 text-white rounded-[4px]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#000",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
