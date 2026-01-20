import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
                Gabinet Dietetyki Klinicznej
                <span className="block text-2xl lg:text-3xl font-normal text-brand-gray mt-2">
                  Dominika Maciejec-Kogut
                </span>
              </h1>

              <p className="text-xl text-brand-gray mb-4">
                Kompetencje WUM, indywidualne podejście
              </p>

              <p className="text-lg text-brand-gray mb-8 max-w-2xl">
                Specjalizuję się w dietoterapii chorób metabolicznych: insulinooporność, cukrzyca, Hashimoto.
                Dieta dopasowana do Twojego życia, bez efektu jojo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/rezerwacja"
                  className="bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors text-lg font-semibold"
                >
                  Umów wizytę online
                </Link>
                <a
                  href="tel:+48500798929"
                  className="border-2 border-brand-brown text-brand-brown px-8 py-4 rounded-lg hover:bg-brand-brown hover:text-brand-white transition-colors text-lg font-semibold"
                >
                  Zadzwoń: +48 500 798 929
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-brand-beige rounded-2xl flex items-center justify-center">
                <div className="text-center text-brand-gray">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  <p className="text-lg">Zdjęcie Dominiki</p>
                  <p className="text-sm opacity-75">W trakcie przygotowania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <section className="py-16 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-brown mb-8">
            Strona w trakcie budowy
          </h2>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Aktualnie implementuję pozostałe sekcje strony: Oferta, Opinie, Blog i inne.
            Wróć wkrótce, aby zobaczyć pełną wersję!
          </p>
        </div>
      </section>
    </div>
  );
}
