'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-white shadow-sm border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-brand-brown">
              Gabinet Dietetyki Klinicznej
            </Link>
            <p className="text-sm text-brand-gray">Dominika Maciejec-Kogut</p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-brand-gray hover:text-brand-brown transition-colors">
              Strona główna
            </Link>
            <Link href="/o-mnie" className="text-brand-gray hover:text-brand-brown transition-colors">
              O mnie
            </Link>
            <Link href="/o-gabinecie" className="text-brand-gray hover:text-brand-brown transition-colors">
              O gabinecie
            </Link>
            <Link href="/oferta" className="text-brand-gray hover:text-brand-brown transition-colors">
              Oferta
            </Link>
            <Link href="/cennik" className="text-brand-gray hover:text-brand-brown transition-colors">
              Cennik
            </Link>
            <Link href="/blog" className="text-brand-gray hover:text-brand-brown transition-colors">
              Blog
            </Link>
            <Link href="/kontakt" className="text-brand-gray hover:text-brand-brown transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+48500798929"
              className="text-brand-brown hover:text-brand-bordo transition-colors"
            >
              +48 500 798 929
            </a>
            <Link
              href="/rezerwacja"
              className="bg-brand-brown text-brand-white px-6 py-2 rounded-lg hover:bg-brand-brown/90 transition-colors"
            >
              Umów wizytę
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-brand-gray hover:text-brand-brown" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-4 py-4 space-y-4 bg-brand-white border-t border-brand-beige">
            <Link href="/" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              Strona główna
            </Link>
            <Link href="/o-mnie" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              O mnie
            </Link>
            <Link href="/o-gabinecie" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              O gabinecie
            </Link>
            <Link href="/oferta" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              Oferta
            </Link>
            <Link href="/cennik" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cennik
            </Link>
            <Link href="/blog" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/kontakt" className="block text-brand-gray hover:text-brand-brown transition-colors" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
            <div className="pt-4 border-t border-brand-beige">
              <a
                href="tel:+48500798929"
                className="block text-brand-brown hover:text-brand-bordo transition-colors mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                +48 500 798 929
              </a>
              <Link
                href="/rezerwacja"
                className="block bg-brand-brown text-brand-white px-6 py-2 rounded-lg hover:bg-brand-brown/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Umów wizytę
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}