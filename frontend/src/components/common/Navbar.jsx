import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/10 shadow-navy'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all duration-300">
              <span className="text-navy-900 font-bold text-lg font-serif">FP</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif font-bold text-lg leading-none text-white">Finance</p>
              <p className="text-xs font-medium tracking-widest text-gold-400">WITH PREET</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.path} to={l.path}
                className={`relative font-medium text-sm transition-all duration-200 py-1
                  ${location.pathname === l.path
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-300'
                  }`}>
                {l.name}
                {location.pathname === l.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link to="/booking" className="btn-primary text-sm py-2.5 px-5">
              Book Free Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 hover:text-gold-400 transition-colors p-2"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-950/98 backdrop-blur-xl border-t border-gold-500/10"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map(l => (
                <Link key={l.path} to={l.path}
                  className={`py-3 px-4 rounded-xl font-medium transition-all duration-200
                    ${location.pathname === l.path
                      ? 'text-gold-400 bg-gold-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}>
                  {l.name}
                </Link>
              ))}
              <Link to="/booking" className="btn-primary text-center mt-3">
                Book Free Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
