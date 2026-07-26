'use client';

import { Menu, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Anton } from "next/font/google";


const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Initial setup
    gsap.set(menuRef.current, { height: 0, opacity: 0, display: 'none' });

    tl.current = gsap
      .timeline({ paused: true })
      .to(menuRef.current, {
        display: 'block',
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.inOut',
      })
      .from(
        '.menu-btn',
        {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        },
        '-=0.2'
      )
      .from(
        '.qr-block',
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.4,
          ease: 'back.out(1.5)',
        },
        '<'
      );
  }, { scope: menuRef });

  useEffect(() => {
    if (menuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [menuOpen]);

  return (
    <header className='fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-2'>
      {/* ── Main Header Bar ── */}
      <div className='flex items-center justify-center bg-black w-[95%] max-w-[500px] p-2 rounded relative z-20 shadow-xl'>
        <div className='flex justify-between items-center w-full gap-2'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
            className='flex items-center justify-center gap-1 bg-[#EB6E00] hover:bg-[#d96e18] transition-colors px-3 py-[6px] flex-shrink-0 rounded text-black font-bold uppercase h-full'
          >
            {menuOpen ? (
              <>
                <X size={24} strokeWidth={3} />
                {/* <span className='hidden sm:inline-block'>Close</span> */}
              </>
            ) : (
              <Menu size={24} strokeWidth={3} />
            )}
          </button>

          <a
            href='/'
            className={`${anton.className} flex-1 flex items-center justify-center text-center text-white select-none leading-none`}
            style={{
              fontSize: '40px',
            }}
          >
            PACO
          </a>

          <a
            href='/contact'
            className='text-lg font-semibold flex items-center justify-center bg-[#EB6E00] hover:bg-[#d96e18] transition-colors px-4 py-[6px] flex-shrink-0 text-black rounded uppercase h-full'
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ── Expandable Dropdown Div ── */}
      <div
        ref={menuRef}
        className='bg-black w-[95%] max-w-[600px] mt-2 rounded p-4 md:p-6 shadow-2xl relative z-10 overflow-hidden border border-white/10'
      >
        <div className='flex md:flex-row flex-col gap-6 md:gap-8'>
          {/* Left Side: Navigation Links */}
          <nav className='flex flex-col gap-3 flex-1'>
            {[
              { label: 'HOME', href: '/' },
              { label: 'SERVICES', href: '/services' },
              { label: 'PROCESS', href: '/process' },
              { label: 'WORK', href: '/work' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='menu-btn bg-[#EB6E00] hover:bg-[#d96e18] text-black text-center py-3 rounded-[6px] transition-colors font-black uppercase text-xl shadow-[inset_0_-3px_0_rgba(0,0,0,0.2)]'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side: QR Code Block */}
          <div className='qr-block flex flex-col items-center justify-center bg-[#0a0a0a] rounded-[8px] p-4 border border-white/5'>
            <div className='bg-white p-3 rounded-[8px] mb-3'>
              {/* SVG Placeholder for QR Code */}
              <svg
                width='120'
                height='120'
                viewBox='0 0 24 24'
                fill='black'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 3H11V11H3V3ZM5 5V9H9V5H5ZM13 3H21V11H13V3ZM15 5V9H19V5H15ZM3 13H11V21H3V13ZM5 15V19H9V15H5ZM13 13H15V15H13V13ZM15 15H17V17H15V15ZM17 13H19V15H17V13ZM19 15H21V17H19V15ZM13 17H15V19H13V17ZM15 19H17V21H15V19ZM17 17H19V19H17V17ZM19 19H21V21H19V19Z' />
                <rect x='6' y='6' width='2' height='2' />
                <rect x='16' y='6' width='2' height='2' />
                <rect x='6' y='16' width='2' height='2' />
              </svg>
            </div>
            <div className='flex items-center gap-2 text-white/70 text-sm'>
              <div className='w-2 h-2 rounded-full bg-white/50'></div>
              Control with phone
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
