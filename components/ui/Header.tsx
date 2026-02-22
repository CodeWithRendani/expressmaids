"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import QuoteModal from "./QuoteModal";

type NavLinksProps = {
  onNavigate?: () => void;
};

function NavLinks({ onNavigate }: NavLinksProps) {
  const handleClick = () => {
    if (onNavigate) onNavigate();
  };

  return (
    <>
      <a href="#home" onClick={handleClick} className="hover:text-red-600">
        Home
      </a>
      <a href="#about" onClick={handleClick} className="hover:text-red-600">
        About
      </a>
      <a href="#services" onClick={handleClick} className="hover:text-red-600">
        Services
      </a>
      <a href="#branches" onClick={handleClick} className="hover:text-red-600">
        Branches
      </a>
      <a href="#contact" onClick={handleClick} className="hover:text-red-600">
        Contact
      </a>
    </>
  );
}

export default function Header() {
  const [openQuote, setOpenQuote] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop header (unchanged) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm hidden md:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ExpressMaids Logo"
              width={160}
              height={50}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-blue-900 font-semibold">
            <NavLinks />
          </nav>

          {/* Desktop Button */}
          <button
            onClick={() => setOpenQuote(true)}
            className="hidden md:inline-flex bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            Request a Quote
          </button>
        </div>
      </header>

      {/* Mobile mini header: logo + colored menu icon ONLY */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" className="flex items-center" aria-label="Go to home">
            <Image
              src="/images/logo.png"
              alt="ExpressMaids Logo"
              width={130}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 p-2.5 text-red-600 shadow-sm active:scale-[0.98]"
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind fixed mobile mini header */}
      <div className="md:hidden h-[60px]" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[70]">
          {/* Overlay */}
          <button
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu overlay"
          />

          {/* Panel */}
          <div className="absolute left-0 right-0 top-0 bg-white shadow-xl rounded-b-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-blue-900 font-extrabold">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-5">
              <div className="flex flex-col gap-4 text-blue-900 font-semibold">
                <NavLinks onNavigate={() => setMobileOpen(false)} />
              </div>

              <div className="mt-6 grid gap-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenQuote(true);
                  }}
                  className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700"
                >
                  Request a Quote
                </button>

                <a
                  href="https://wa.me/27724882037?text=Hi%20ExpressMaids%2C%20I%20would%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-gray-200 px-4 py-3 rounded-lg font-semibold text-blue-900 hover:bg-gray-50"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <QuoteModal open={openQuote} onClose={() => setOpenQuote(false)} />
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}