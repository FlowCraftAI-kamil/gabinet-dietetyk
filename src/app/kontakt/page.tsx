import Link from 'next/link';

export default function Kontakt() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
              Skontaktuj się ze mną
            </h1>
            <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto">
              Masz pytania dotyczące diety lub chcesz umówić konsultację? Napisz lub zadzwoń - chętnie pomogę.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-8">
                Dane kontaktowe
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-brown mb-2">Telefon</h3>
                    <a href="tel:+48500798929" className="text-lg text-brand-gray hover:text-brand-brown transition-colors">
                      +48 500 798 929
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-brown mb-2">Email</h3>
                    <a href="mailto:kontakt@gabinet-dominika.pl" className="text-lg text-brand-gray hover:text-brand-brown transition-colors">
                      kontakt@gabinet-dominika.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-brown mb-2">Adres</h3>
                    <p className="text-lg text-brand-gray">
                      ul. Sienkiewicza 15/3<br />
                      25-007 Kielce
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-8">
                Napisz do mnie
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent"
                    placeholder="twój@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-gray mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-brand-beige rounded-lg focus:ring-2 focus:ring-brand-brown focus:border-transparent resize-none"
                    placeholder="Opisz swoją sytuację i pytania..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-brown text-brand-white px-8 py-4 rounded-lg hover:bg-brand-brown/90 transition-colors font-semibold"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Znajdź mnie
            </h2>
            <p className="text-lg text-brand-gray">
              Gabinet znajduje się w centrum Kielc
            </p>
          </div>

          <div className="bg-brand-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-brand-beige flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-brand-brown opacity-50 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="text-brand-brown font-semibold text-lg">Mapa Google</p>
                <p className="text-brand-gray mt-2">Placeholder - mapa zostanie dodana wkrótce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-brown mb-4">
              Godziny pracy
            </h2>
            <p className="text-lg text-brand-gray">
              Zapraszam do kontaktu w dogodnych dla Ciebie godzinach
            </p>
          </div>

          <div className="bg-brand-beige-light rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-brown mb-4">Gabinet</h3>
                <div className="space-y-2 text-brand-gray">
                  <div className="flex justify-between">
                    <span>Poniedziałek - Piątek</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela</span>
                    <span>zamknięte</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-brown mb-4">Kontakt telefoniczny</h3>
                <div className="space-y-2 text-brand-gray">
                  <div className="flex justify-between">
                    <span>Poniedziałek - Piątek</span>
                    <span>8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span>9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela</span>
                    <span>tylko pilne sprawy</span>
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
            Gotowa/y na zmianę? Umów konsultację już dziś
          </h2>
          <p className="text-lg text-brand-beige mb-8 max-w-2xl mx-auto">
            Pierwsza wizyta to krok ku lepszemu zdrowiu metabolicznemu. Zarezerwuj termin online lub zadzwoń.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rezerwacja"
              className="bg-brand-white text-brand-brown px-8 py-4 rounded-lg hover:bg-brand-beige transition-colors font-semibold"
            >
              Umów wizytę online
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