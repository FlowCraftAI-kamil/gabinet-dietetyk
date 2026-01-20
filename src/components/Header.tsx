import Link from 'next/link';

export default function Header() {
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
            <button className="text-brand-gray hover:text-brand-brown">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}