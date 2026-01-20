import Link from 'next/link';

export default function OMnie() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
                O mnie
              </h1>

              <p className="text-lg text-brand-gray mb-8 max-w-2xl">
                Gabinet Dietetyki Klinicznej to miejsce, w którym wiedza medyczna spotyka się z empatią i indywidualnym podejściem. Jako absolwentka Warszawskiego Uniwersytetu Medycznego specjalizuję się w dietetyce klinicznej, ze szczególnym uwzględnieniem chorób metabolicznych: insulinooporności, cukrzycy i Hashimoto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/rezerwacja"
                  className="bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors text-lg font-semibold"
                >
                  Umów konsultację
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
                <svg className="w-24 h-24 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <p className="text-brand-brown font-semibold mt-4">Dominika Maciejec-Kogut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-brand-beige rounded-2xl flex items-center justify-center">
                <svg className="w-24 h-24 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <p className="text-brand-brown font-semibold mt-4">Dominika Maciejec-Kogut</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-6">
                Moja historia
              </h2>
              <div className="space-y-4 text-brand-gray">
                <p>
                  Jestem Dominika Maciejec-Kogut, dietetyk kliniczny z wykształceniem zdobytym na Warszawskim Uniwersytecie Medycznym. Specjalizuję się w dietetyce chorób metabolicznych – insulinooporności, cukrzycy typu 2 i chorób tarczycy, w tym Hashimoto.
                </p>
                <p>
                  Moją pasją jest łączenie rzetelnej wiedzy medycznej z empatycznym podejściem do pacjenta. Nie wierzę w diety-cud ani restrykcyjne schematy. Wierzę w indywidualizację, konsekwencję i realistyczne cele.
                </p>
                <p>
                  Moja praca to nie tylko układanie jadłospisów, ale edukacja i wspieranie w procesie zmiany nawyków. Prowadzę gabinet w Kielcach, gdzie każdy pacjent otrzymuje pełne zaangażowanie i plan szytą na miarę.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Moje wartości i specjalizacja
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Podejście oparte na wiedzy klinicznej i empatii
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Indywidualizacja
              </h3>
              <p className="text-brand-gray">
                Każdy plan żywieniowy jest szytą na miarę odpowiedzią na Twoje potrzeby zdrowotne i codzienne wyzwania.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Zasada 80/20
              </h3>
              <p className="text-brand-gray">
                Elastyczność bez radykalizmu - małe, konsekwentne zmiany przynoszące realne rezultaty bez efektu jojo.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Kompetencje kliniczne
              </h3>
              <p className="text-brand-gray">
                Wiedza medyczna potwierdzona dyplomem Warszawskiego Uniwersytetu Medycznego i doświadczeniem klinicznym.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Brak radykalizmu
              </h3>
              <p className="text-brand-gray">
                Realistyczne, elastyczne plany żywieniowe, które wpisują się w Twoje codzienne życie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Specjalizuję się w chorobach metabolicznych
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Doświadczenie w kompleksowym wsparciu pacjentów z zaburzeniami metabolicznymi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insulinooporność */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Insulinooporność
              </h3>
              <p className="text-brand-gray mb-6">
                Kompleksowe podejście do regulacji poziomu glukozy i insuliny poprzez odpowiednio dobraną dietę i styl życia.
              </p>
            </div>

            {/* Cukrzyca */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Cukrzyca typu 2
              </h3>
              <p className="text-brand-gray mb-6">
                Wsparcie w kontroli poziomu cukru, edukacji żywieniowej i długoterminowej stabilizacji metabolicznej.
              </p>
            </div>

            {/* Hashimoto */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Choroba Hashimoto
              </h3>
              <p className="text-brand-gray mb-6">
                Indywidualne plany żywieniowe wspierające funkcję tarczycy i ogólny stan zdrowia metabolicznego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-white mb-6">
            Gotowa/y na zmianę? Umów się na konsultację
          </h2>
          <p className="text-lg text-brand-beige mb-8 max-w-2xl mx-auto">
            Rozpocznij swoją drogę do zdrowia metabolicznego już dziś. Pierwsza konsultacja to krok ku lepszemu samopoczuciu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rezerwacja"
              className="bg-brand-white text-brand-brown px-8 py-4 rounded-lg hover:bg-brand-beige transition-colors font-semibold"
            >
              Umów wizytę online
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-brand-white text-brand-white px-8 py-4 rounded-lg hover:bg-brand-white hover:text-brand-brown transition-colors font-semibold"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}