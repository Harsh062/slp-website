"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <Link href="/">
          <Image
            src="/logo/slp1.png"
            alt="Stimulus Learning Point Logo"
            width={160}
            height={60}
            className="logo"
          />
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <Link href="/results" onClick={() => setMenuOpen(false)}>
            Results
          </Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
