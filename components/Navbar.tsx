'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060d1a]/95 backdrop-blur-md border-b border-[#1a2940]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-cyan-400 font-bold text-lg tracking-wider hover:text-cyan-300 transition-colors"
          >
            TPB<span className="text-slate-600 animate-blink">_</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400/50 text-cyan-400 px-4 py-1.5 rounded-lg text-sm font-mono hover:bg-cyan-400/10 transition-colors"
            >
              Resume ↓
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-400 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d1b2a] border-t border-[#1a2940] py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-[#122035] transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <a
                href="/resume.pdf"
                download
                className="block text-center border border-cyan-400/50 text-cyan-400 py-2 rounded-lg font-mono text-sm hover:bg-cyan-400/10 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
