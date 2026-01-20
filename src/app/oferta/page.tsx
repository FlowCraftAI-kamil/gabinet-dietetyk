import Link from 'next/link';

export default function Oferta() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
            Oferta
          </h1>
          <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
            Kompleksowe wsparcie w drodze do zdrowia metabolicznego. Jako absolwentka Warszawskiego Uniwersytetu Medycznego specjalizuję się w dietetyce klinicznej, ze szczególnym uwzględnieniem chorób metabolicznych: insulinooporności, cukrzycy i Hashimoto.
          </p>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto">
            Wierzę, że skuteczna dieta nie wymaga radykalizmu. Zamiast narzucać restrykcyjne schematy, dopasowuję zalecenia do Twojego rytmu życia, stosując zasadę 80/20 – małe, konsekwentne zmiany przynoszą realne rezultaty bez efektu jojo.
          </p>
        </div>
      </section>

      {/* Konsultacje dietetyczne Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Icon */}
            <div className="relative">
              <div className="w-32 h-32 bg-brand-brown rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <svg className="w-16 h-16 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-6">
                Konsultacje dietetyczne
              </h2>
              <div className="space-y-4 text-brand-gray text-lg">
                <p>
                  Konsultacje dietetyczne to fundament współpracy. Podczas wizyty przeprowadzam szczegółowy wywiad zdrowotny, analizuję wyniki badań laboratoryjnych i poznaję Twoje nawyki żywieniowe.
                </p>
                <p>
                  Na tej podstawie ustalam diagnozę dietetyczną i wytyczam realistyczny plan działania. Nie oferuję gotowych rozwiązań z szuflady – każda rekomendacja jest dopasowana do Twojego stanu zdrowia, trybu życia i celów.
                </p>
                <p>
                  Konsultacja to także przestrzeń na pytania i edukację, abyś rozumiał "dlaczego", a nie tylko "co" jeść.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/rezerwacja"
                  className="bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors font-semibold"
                >
                  Umów konsultację
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plany żywieniowe Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-6">
                Plany żywieniowe
              </h2>
              <div className="space-y-4 text-brand-gray text-lg">
                <p>
                  Indywidualny plan żywieniowy to praktyczne narzędzie wspierające Twoją codzienność. Nie tworzę jadłospisów idealnych teoretycznie, ale niemożliwych do wdrożenia.
                </p>
                <p>
                  Każdy plan uwzględnia Twoje preferencje smakowe, możliwości czasowe i sytuacje wyjątkowe. Możesz jeść na mieście, spotykać się ze znajomymi i żyć normalnie – a jednocześnie dbać o zdrowie metaboliczne.
                </p>
                <p>
                  Plan nie jest wyrokiem, lecz elastycznym przewodnikiem, który wspiera Twoje cele bez poczucia wyrzeczeń.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/rezerwacja"
                  className="bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors font-semibold"
                >
                  Zamów plan żywieniowy
                </Link>
              </div>
            </div>

            {/* Icon */}
            <div className="relative">
              <div className="w-32 h-32 bg-brand-brown rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <svg className="w-16 h-16 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edukacja żywieniowa Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Icon */}
            <div className="relative">
              <div className="w-32 h-32 bg-brand-brown rounded-full flex items-center justify-center mx-auto lg:mx-0">
                <svg className="w-16 h-16 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-6">
                Edukacja żywieniowa
              </h2>
              <div className="space-y-4 text-brand-gray text-lg">
                <p>
                  Edukacja żywieniowa to klucz do długotrwałych zmian. Organizuję warsztaty i spotkania grupowe poświęcone praktycznym aspektom diety w chorobach metabolicznych: czytaniu etykiet, planowaniu posiłków, radzeniu sobie w trudnych sytuacjach.
                </p>
                <p>
                  Dzielę się wiedzą kliniczną w przystępny sposób, abyś mógł podejmować świadome decyzje żywieniowe. Edukacja to inwestycja w niezależność – nie musisz zawsze pytać dietetyka, jeśli rozumiesz zasady działania swojego organizmu.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors font-semibold"
                >
                  Skontaktuj się w sprawie warsztatów
                </Link>
              </div>
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