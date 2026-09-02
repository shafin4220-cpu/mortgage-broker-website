import { useState, useEffect } from 'react';
import { Building2, Menu, X, Shield, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onPreApprovalClick: () => void;
}

export default function Header({ onPreApprovalClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Mortgage Solutions', href: '#solutions' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Resources', href: '#resources' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3.5'
          : 'bg-[#0a192f] border-b border-slate-800/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 font-bold" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1">
                MORTGAGE <span className="text-amber-400">BUILDER</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                Mortgage Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="header-cta-button"
              onClick={onPreApprovalClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
            >
              <span>Get Pre-Approved</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0a192f]/98 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl space-y-3 transition-all"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800/50 rounded-xl transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPreApprovalClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md cursor-pointer"
            >
              <span>Get Pre-Approved</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Personalized Mortgage Guidance</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
