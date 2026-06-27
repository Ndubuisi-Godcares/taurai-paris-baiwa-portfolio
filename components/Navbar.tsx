'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

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
          ? 'bg-white/95 dark:bg-[#060d1a]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#1a2940]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-cyan-600 dark:text-cyan-400 font-bold text-lg tracking-wider hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            TPB<span className="text-slate-300 dark:text-slate-600 animate-blink">_</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="border border-cyan-600/50 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 px-4 py-1.5 rounded-lg text-sm font-mono hover:bg-cyan-600/10 dark:hover:bg-cyan-400/10 transition-colors"
            >
              Resume ↓
            </a>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span
                className={`block w-6 h-0.5 bg-slate-500 dark:bg-slate-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-500 dark:bg-slate-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-500 dark:bg-slate-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-[#0d1b2a] border-t border-slate-200 dark:border-[#1a2940] py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-[#122035] transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <a
                href="/resume.pdf"
                download
                className="block text-center border border-cyan-600/50 dark:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 py-2 rounded-lg font-mono text-sm hover:bg-cyan-600/10 dark:hover:bg-cyan-400/10 transition-colors"
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
