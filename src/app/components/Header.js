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
          ☰
        </button>

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <a href="/results" onClick={() => setMenuOpen(false)}>
            Results
          </a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="/about-us" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}
