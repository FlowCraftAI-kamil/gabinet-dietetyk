import Link from 'next/link';

export default function OGabinecie() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
              O Gabinecie
            </h1>
            <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
              Miejsce, gdzie wiedza medyczna spotyka się z empatią i indywidualnym podejściem do pacjenta
            </p>
          </div>
        </div>
      </section>

      {/* Opis Gabinetu Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-6">
                Gabinet Dietetyki Klinicznej
              </h2>
              <div className="space-y-4 text-brand-gray">
                <p>
                  Gabinet Dietetyki Klinicznej to miejsce, w którym wiedza medyczna spotyka się z empatią i indywidualnym podejściem. Jako absolwentka Warszawskiego Uniwersytetu Medycznego specjalizuję się w dietetyce klinicznej, ze szczególnym uwzględnieniem chorób metabolicznych: insulinooporności, cukrzycy i Hashimoto.
                </p>
                <p>
                  Wierzę, że skuteczna dieta nie wymaga radykalizmu. Zamiast narzucać restrykcyjne schematy, dopasowuję zalecenia do Twojego rytmu życia, stosując zasadę 80/20 – małe, konsekwentne zmiany przynoszą realne rezultaty bez efektu jojo.
                </p>
                <p>
                  W moim gabinecie otrzymasz nie tylko jadłospis, ale kompleksowe wsparcie oparte na najnowszej wiedzy klinicznej. Każdy plan żywieniowy jest szytą na miarę odpowiedzią na Twoje potrzeby zdrowotne i codzienne wyzwania.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-brand-beige rounded-2xl flex items-center justify-center">
                <svg className="w-24 h-24 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <p className="text-brand-brown font-semibold mt-4">Opis gabinetu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filozofia Pracy Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Filozofia pracy
            </h2>
            <p className="text-lg text-brand-gray max-w-2xl mx-auto">
              Indywidualizacja, konsekwencja i realistyczne cele – bez efektu jojo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Indywidualizacja */}
            <div className="bg-brand-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Indywidualizacja
              </h3>
              <p className="text-brand-gray">
                Każdy plan żywieniowy jest szyty na miarę Twoich potrzeb, preferencji i stylu życia. Nie oferuję gotowych rozwiązań z szuflady.
              </p>
            </div>

            {/* Zasada 80/20 */}
            <div className="bg-brand-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Zasada 80/20
              </h3>
              <p className="text-brand-gray">
                Elastyczność bez radykalizmu. Małe, konsekwentne zmiany przynoszą realne rezultaty bez poczucia wyrzeczeń.
              </p>
            </div>

            {/* Kompetencje kliniczne */}
            <div className="bg-brand-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">
                Kompetencje kliniczne
              </h3>
              <p className="text-brand-gray">
                Wiedza oparta na dyplomie WUM i najnowszych badaniach klinicznych w zakresie chorób metabolicznych.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lokalizacja Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Gdzie mnie znajdziesz
            </h2>
            <p className="text-lg text-brand-gray">
              Gabinet w centrum Kielc – przyjazne i dostępne miejsce
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address Info */}
            <div>
              <h3 className="text-2xl font-bold text-brand-brown mb-6">
                Adres gabinetu
              </h3>
              <div className="space-y-4 text-brand-gray">
                <p className="text-lg">
                  <strong>ul. Sienkiewicza 15/3</strong><br />
                  25-007 Kielce
                </p>
                <p>
                  Gabinet znajduje się w centrum Kielc, w łatwo dostępnej lokalizacji. W pobliżu dostępne są parkingi miejskie i komunikacja publiczna.
                </p>
                <p>
                  Przestronne pomieszczenie zapewnia komfort i prywatność podczas konsultacji. Wszystko zostało zaprojektowane z myślą o Twoim wygodzie i bezpieczeństwie.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-brand-beige-light rounded-2xl overflow-hidden">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-brand-brown opacity-50 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-brand-brown font-semibold text-lg">Mapa lokalizacji</p>
                  <p className="text-brand-gray mt-2">Placeholder - mapa zostanie dodana wkrótce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zdjęcia Gabinetu Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Zobacz gabinet
            </h2>
            <p className="text-lg text-brand-gray">
              Przyjazne i profesjonalne otoczenie stworzone z myślą o Twoim komforcie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photo 1 */}
            <div className="bg-brand-white rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l3 4H9l-2 3-2-3H6l2-3 2 1z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-brown mb-2">
                  Przestrzeń konsultacyjna
                </h3>
                <p className="text-brand-gray text-sm">
                  Przytulne pomieszczenie zaprojektowane dla komfortowych spotkań
                </p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="bg-brand-white rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l3 4H9l-2 3-2-3H6l2-3 2 1z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-brown mb-2">
                  Miejsce na edukację
                </h3>
                <p className="text-brand-gray text-sm">
                  Przestrzeń do warsztatów i spotkań grupowych
                </p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="bg-brand-white rounded-2xl overflow-hidden shadow-sm md:col-span-2 lg:col-span-1">
              <div className="aspect-video bg-brand-beige flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-brown opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l3 4H9l-2 3-2-3H6l2-3 2 1z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-brown mb-2">
                  Recepcja
                </h3>
                <p className="text-brand-gray text-sm">
                  Przyjazne powitanie i komfortowa strefa oczekiwania
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wyposażenie Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Wyposażenie i komfort
            </h2>
            <p className="text-lg text-brand-gray">
              Wszystko, czego potrzebujesz do komfortowej konsultacji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Ergonomiczne fotele
              </h3>
              <p className="text-brand-gray">
                Wygodne siedziska zapewniające komfort podczas dłuższych konsultacji
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Dostęp do urządzeń
              </h3>
              <p className="text-brand-gray">
                Możliwość prezentacji materiałów edukacyjnych i analizy wyników badań
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Klimatyzacja
              </h3>
              <p className="text-brand-gray">
                Przyjemna temperatura i świeże powietrze przez cały rok
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">
                Prywatność
              </h3>
              <p className="text-brand-gray">
                Dyskretne pomieszczenie zapewniające pełną poufność rozmowy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-white mb-6">
            Gotowa/y na zmianę? Umów konsultację już dziś
          </h2>
          <p className="text-lg text-brand-beige mb-8 max-w-2xl mx-auto">
            Doświadcz indywidualnego podejścia opartego na wiedzy klinicznej. Pierwszy krok ku lepszemu zdrowiu metabolicznemu.
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