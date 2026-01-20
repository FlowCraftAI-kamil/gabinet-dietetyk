import Link from 'next/link';
import Image from 'next/image';

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
                <svg className="w-24 h-24 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <p className="text-brand-brown font-semibold mt-4">Zdjęcie Dominiki Maciejec-Kogut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O mnie Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-brand-beige rounded-2xl flex items-center justify-center">
                <svg className="w-24 h-24 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <p className="text-brand-brown font-semibold mt-4">Zdjęcie Dominiki Maciejec-Kogut</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-6">
                O mnie
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
              <div className="mt-8">
                <Link
                  href="/o-mnie"
                  className="bg-brand-beige text-brand-brown px-6 py-3 rounded-lg hover:bg-brand-beige/90 transition-colors font-semibold border border-brand-brown"
                >
                  Dowiedz się więcej
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Oferta
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Kompleksowe wsparcie w drodze do zdrowia metabolicznego
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Konsultacje dietetyczne */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Konsultacje dietetyczne
              </h3>
              <p className="text-brand-gray mb-6">
                Szczegółowy wywiad zdrowotny, analiza badań laboratoryjnych i diagnoza dietetyczna. Każda rekomendacja dopasowana do Twojego stanu zdrowia i stylu życia.
              </p>
              <Link
                href="/oferta#konsultacje"
                className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
              >
                Szczegóły →
              </Link>
            </div>

            {/* Plany żywieniowe */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Plany żywieniowe
              </h3>
              <p className="text-brand-gray mb-6">
                Indywidualny jadłospis uwzględniający Twoje preferencje smakowe i możliwości czasowe. Elastyczny przewodnik wspierający cele bez poczucia wyrzeczeń.
              </p>
              <Link
                href="/oferta#plany"
                className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
              >
                Szczegóły →
              </Link>
            </div>

            {/* Edukacja żywieniowa */}
            <div className="bg-brand-beige-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Edukacja żywieniowa
              </h3>
              <p className="text-brand-gray mb-6">
                Warsztaty i spotkania poświęcone praktycznym aspektom diety w chorobach metabolicznych. Inwestycja w niezależność i świadome decyzje żywieniowe.
              </p>
              <Link
                href="/oferta#edukacja"
                className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
              >
                Szczegóły →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Dlaczego warto wybrać mój gabinet?
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Doświadczenie kliniczne połączone z indywidualnym podejściem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* USP 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Wykształcenie WUM
              </h3>
              <p className="text-brand-gray">
                Kompetencje kliniczne potwierdzone dyplomem Warszawskiego Uniwersytetu Medycznego
              </p>
            </div>

            {/* USP 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Specjalizacja w chorobach metabolicznych
              </h3>
              <p className="text-brand-gray">
                Doświadczenie w insulinooporności, cukrzycy i chorobach tarczycy
              </p>
            </div>

            {/* USP 3 */}
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
                Elastyczność bez radykalizmu - małe zmiany przynoszące duże efekty
              </p>
            </div>

            {/* USP 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Indywidualne podejście
              </h3>
              <p className="text-brand-gray">
                Nie gotowe schematy, lecz plany szyte na miarę Twoich potrzeb
              </p>
            </div>

            {/* USP 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Bez efektu jojo
              </h3>
              <p className="text-brand-gray">
                Trwałe efekty poprzez zmianę nawyków, nie krótkotrwałe diety
              </p>
            </div>

            {/* Empty space for centering */}
            <div></div>
          </div>
        </div>
      </section>

      {/* Opinie Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Opinie pacjentów
            </h2>
            <p className="text-lg text-brand-gray">
              Co mówią pacjenci o współpracy ze mną
            </p>
          </div>

          <div className="bg-brand-beige-light rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-brand-brown mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <p className="text-xl text-brand-gray mb-6">
                Tutaj będą wyświetlane recenzje z Google
              </p>
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
                <span className="ml-2 text-brand-gray font-semibold">5.0 (31 opinii)</span>
              </div>
              <a
                href="#"
                className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
              >
                Zobacz wszystkie opinie na Google →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Najnowsze artykuły z bloga
            </h2>
            <p className="text-lg text-brand-gray">
              Wiedza i porady z zakresu dietetyki klinicznej
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-brand-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-brand-gray mb-2">15 stycznia 2026</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Insulinooporność - jak rozpoznać i leczyć dietą
                </h3>
                <p className="text-brand-gray mb-4">
                  Kompleksowy przewodnik po rozpoznawaniu objawów insulinooporności i skutecznych strategiach dietetycznych...
                </p>
                <Link
                  href="/blog"
                  className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
                >
                  Czytaj więcej →
                </Link>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-brand-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-brand-gray mb-2">10 stycznia 2026</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Dieta w Hashimoto - kluczowe zasady
                </h3>
                <p className="text-brand-gray mb-4">
                  Praktyczne wskazówki żywieniowe dla osób z chorobą Hashimoto. Jak wspierać tarczycę przez odpowiednie odżywianie...
                </p>
                <Link
                  href="/blog"
                  className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
                >
                  Czytaj więcej →
                </Link>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-brand-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-brand-gray mb-2">5 stycznia 2026</div>
                <h3 className="text-xl font-bold text-brand-brown mb-3">
                  Zdrowe śniadania dla diabetyków
                </h3>
                <p className="text-brand-gray mb-4">
                  Smaczne i bezpieczne propozycje śniadań dla osób z cukrzycą. Przepisy łatwe do przygotowania w domu...
                </p>
                <Link
                  href="/blog"
                  className="text-brand-brown font-semibold hover:text-brand-bordo transition-colors"
                >
                  Czytaj więcej →
                </Link>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors font-semibold"
            >
              Zobacz wszystkie artykuły
            </Link>
          </div>
        </div>
      </section>

      {/* Kontakt CTA Section */}
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
