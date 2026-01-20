import Link from 'next/link';

export default function Cennik() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
              Cennik usług
            </h1>
            <p className="text-xl text-brand-gray mb-4">
              Transparentne ceny za profesjonalne wsparcie dietetyczne
            </p>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Inwestycja w zdrowie metaboliczne to decyzja na całe życie. Oferuję konkurencyjne ceny za kompleksowe konsultacje oparte na wiedzy klinicznej WUM.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Oferta cenowa
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Wszystkie ceny zawierają pełne wsparcie i indywidualne podejście
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Konsultacja wstępna */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Konsultacja wstępna
              </h3>
              <div className="text-3xl font-bold text-brand-brown mb-2">200 zł</div>
              <p className="text-brand-gray mb-6">
                Szczegółowy wywiad zdrowotny, analiza badań laboratoryjnych, diagnoza dietetyczna i plan działania.
              </p>
              <div className="text-sm text-brand-gray mb-4">Czas trwania: 60 minut</div>
            </div>

            {/* Konsultacja kontrolna */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Konsultacja kontrolna
              </h3>
              <div className="text-3xl font-bold text-brand-brown mb-2">150 zł</div>
              <p className="text-brand-gray mb-6">
                Ocena postępów, korekta planu żywieniowego, odpowiedzi na pytania i dalsze wsparcie.
              </p>
              <div className="text-sm text-brand-gray mb-4">Czas trwania: 45 minut</div>
            </div>

            {/* Plan żywieniowy */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Plan żywieniowy
              </h3>
              <div className="text-3xl font-bold text-brand-brown mb-2">300 zł</div>
              <p className="text-brand-gray mb-6">
                Indywidualny jadłospis na 7-14 dni z przepisami, listami zakupów i wskazówkami praktycznymi.
              </p>
              <div className="text-sm text-brand-gray mb-4">Wraz z konsultacją</div>
            </div>

            {/* Warsztaty edukacyjne */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Warsztaty edukacyjne
              </h3>
              <div className="text-3xl font-bold text-brand-brown mb-2">100 zł</div>
              <p className="text-brand-gray mb-6">
                Grupowe spotkania poświęcone praktycznym aspektom diety w chorobach metabolicznych.
              </p>
              <div className="text-sm text-brand-gray mb-4">Za osobę</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Informacje o płatnościach
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Wszystko, co warto wiedzieć o zasadach współpracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Payment Methods */}
            <div>
              <h3 className="text-2xl font-bold text-brand-brown mb-6">
                Formy płatności
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">Gotówka</p>
                    <p className="text-brand-gray">Płatność podczas wizyty w gabinecie</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">Przelew bankowy</p>
                    <p className="text-brand-gray">Przed wizytą lub po konsultacji online</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">BLIK</p>
                    <p className="text-brand-gray">Szybka płatność mobilna</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
              <h3 className="text-2xl font-bold text-brand-brown mb-6">
                Zasady współpracy
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">Rezerwacja wizyt</p>
                    <p className="text-brand-gray">Wizyty umawiane są telefonicznie lub przez formularz online</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">Odwołanie wizyty</p>
                    <p className="text-brand-gray">Możliwe do 24h przed terminem, później opłata 50% stawki</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">Pakiety konsultacji</p>
                    <p className="text-brand-gray">Rabat 10% przy zakupie pakietu 3+ wizyt</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-brand-brown mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-brand-brown">Faktury</p>
                    <p className="text-brand-gray">Możliwość wystawienia faktury VAT na życzenie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-white mb-6">
            Gotowa/y na inwestycję w zdrowie?
          </h2>
          <p className="text-lg text-brand-beige mb-8 max-w-2xl mx-auto">
            Umów pierwszą konsultację i rozpocznij swoją drogę do zdrowia metabolicznego. Każda zmiana zaczyna się od pierwszego kroku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rezerwacja"
              className="bg-brand-white text-brand-brown px-8 py-4 rounded-lg hover:bg-brand-beige transition-colors font-semibold"
            >
              Umów konsultację
            </Link>
            <a
              href="tel:+48500798929"
              className="border-2 border-brand-white text-brand-white px-8 py-4 rounded-lg hover:bg-brand-white hover:text-brand-brown transition-colors font-semibold"
            >
              Zadzwoń: +48 500 798 929
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}