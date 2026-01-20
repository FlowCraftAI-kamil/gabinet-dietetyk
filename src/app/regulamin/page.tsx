export default function Regulamin() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-beige-light to-brand-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-brown mb-6">
              Regulamin Usług
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Zapoznaj się z zasadami świadczenia usług dietetycznych w naszym gabinecie
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Postanowienia Ogólne</h2>
        <p className="mb-6">
          Niniejszy Regulamin określa zasady świadczenia usług dietetycznych przez Gabinet Dietetyki Klinicznej Dominika Maciejec-Kogut z siedzibą w Kielcach. Usługi są świadczone zgodnie z obowiązującymi przepisami prawa oraz standardami etycznymi zawodu dietetyka.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Definicje</h2>
        <p className="mb-4">Użyte w Regulaminie pojęcia oznaczają:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Gabinet</strong> - Gabinet Dietetyki Klinicznej Dominika Maciejec-Kogut</li>
          <li><strong>Dietetyk</strong> - Dominika Maciejec-Kogut, absolwentka Warszawskiego Uniwersytetu Medycznego, specjalizująca się w dietetyce klinicznej</li>
          <li><strong>Pacjent</strong> - osoba korzystająca z usług dietetycznych Gabinetu</li>
          <li><strong>Usługi</strong> - konsultacje dietetyczne, opracowywanie planów żywieniowych, edukacja żywieniowa</li>
          <li><strong>Umowa</strong> - umowa o świadczenie usług dietetycznych zawierana między Gabinetem a Pacjentem</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Zakres Usług</h2>
        <p className="mb-4">Gabinet świadczy następujące usługi dietetyczne:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Konsultacje dietetyczne indywidualne - szczegółowy wywiad zdrowotny i diagnoza dietetyczna</li>
          <li>Opracowywanie indywidualnych planów żywieniowych dostosowanych do potrzeb zdrowotnych</li>
          <li>Edukacja żywieniowa i warsztaty poświęcone zdrowemu odżywianiu</li>
          <li>Monitorowanie postępów terapii i modyfikacja planów żywieniowych</li>
          <li>Doradztwo w zakresie suplementacji i zdrowego stylu życia</li>
        </ul>
        <p className="mb-6">
          Wszystkie usługi są świadczone zgodnie z zasadą indywidualizacji - każdy plan żywieniowy jest dostosowany do potrzeb zdrowotnych, preferencji smakowych i stylu życia Pacjenta. Specjalizujemy się w dietoterapii chorób metabolicznych: insulinooporności, cukrzycy typu 2 i chorób tarczycy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Obowiązki Stron</h2>

        <h3 className="text-xl font-medium mb-2">4.1 Obowiązki Pacjenta</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Przekazanie pełnych i prawdziwych informacji o stanie zdrowia, nawykach żywieniowych i preferencjach</li>
          <li>Terminowe regulowanie opłat za świadczone usługi zgodnie z ustalonym cennikiem</li>
          <li>Informowanie o wszelkich zmianach w stanie zdrowia mogących wpłynąć na plan żywieniowy</li>
          <li>Przestrzeganie zaleceń dietetycznych i regularne monitorowanie postępów</li>
          <li>Punktualne przybycie na umówione konsultacje</li>
          <li>Informowanie o ewentualnych przeciwwskazaniach zdrowotnych lub alergiach</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">4.2 Obowiązki Gabinetu</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Świadczenie usług z należytą starannością i zgodnie z aktualną wiedzą medyczną</li>
          <li>Zachowanie poufności wszystkich przekazanych informacji zgodnie z polityką prywatności</li>
          <li>Terminowe wykonywanie zobowiązań i dotrzymywanie ustalonych terminów wizyt</li>
          <li>Informowanie o wszelkich zmianach w planie terapii lub zaleceniach</li>
          <li>Zapewnienie profesjonalnego i empatycznego podejścia do Pacjenta</li>
          <li>Stały rozwój kompetencji zawodowych i aktualizacja wiedzy medycznej</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">5. Płatności</h2>
        <p className="mb-4">Cennik usług dostępny jest na stronie internetowej Gabinetu oraz w siedzibie.</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Opłaty za konsultacje są płatne z góry przed rozpoczęciem wizyty</li>
          <li>Płatności można dokonywać gotówką, przelewem bankowym lub elektronicznie</li>
          <li>Za pakiety usług obowiązują specjalne warunki płatności i rabaty</li>
          <li>Faktury VAT wystawiane są na życzenie Pacjenta</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">6. Odwołania Wizyt</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>W przypadku rezygnacji z wizyty mniej niż 24 godziny przed terminem, opłata nie podlega zwrotowi</li>
          <li>Przy rezygnacji z wizytą z 24-48 godzinnym wyprzedzeniem, opłata podlega zwrotowi w 50%</li>
          <li>W przypadku rezygnacji z większym wyprzedzeniem, opłata podlega pełnemu zwrotowi</li>
          <li>Gabinet zastrzega sobie prawo do odwołania wizyty z przyczyn losowych, z propozycją nowego terminu</li>
          <li>O wszelkich zmianach terminów Gabinet informuje Pacjenta telefonicznie lub mailowo</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">7. Odstąpienie od Umowy</h2>
        <p className="mb-6">
          Pacjent ma prawo odstąpić od umowy w terminie 14 dni od jej zawarcia, bez podania przyczyny. W przypadku usług rozpoczętych przed upływem terminu do odstąpienia, Gabinet może żądać zapłaty za świadczone usługi proporcjonalnie do zakresu wykonanych prac.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Poufność</h2>
        <p className="mb-4">Gabinet zobowiązuje się do zachowania pełnej poufności wszystkich informacji przekazanych przez Pacjenta:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Wszystkie dane medyczne i osobowe są chronione zgodnie z obowiązującymi przepisami RODO</li>
          <li>Informacje uzyskane podczas konsultacji nie są udostępniane osobom trzecim bez zgody Pacjenta</li>
          <li>Dokumentacja medyczna jest przechowywana w bezpieczny sposób przez wymagany okres czasu</li>
          <li>Pacjent ma prawo dostępu do swoich danych oraz ich poprawiania lub usunięcia</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">9. Odpowiedzialność</h2>
        <p className="mb-4">Gabinet ponosi odpowiedzialność za:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Profesjonalne wykonanie usług zgodnie z obowiązującymi standardami dietetycznymi</li>
          <li>Informowanie o ryzyku związanym z zaleceniami dietetycznymi</li>
          <li>Przestrzeganie zasad etyki zawodowej dietetyka</li>
        </ul>
        <p className="mb-6">
          Pacjent ponosi odpowiedzialność za prawidłowe stosowanie się do zaleceń dietetycznych oraz informowanie o wszelkich przeciwwskazaniach zdrowotnych. Dietetyk nie ponosi odpowiedzialności za efekty terapii uzależnione od indywidualnych czynników Pacjenta, takich jak genetyka, styl życia czy współistniejące choroby.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Reklamacje</h2>
        <p className="mb-6">
          Pacjent ma prawo do złożenia reklamacji dotyczącej świadczonych usług. Reklamacja powinna być złożona pisemnie lub elektronicznie w terminie 14 dni od zakończenia usługi. Gabinet rozpatrzy reklamację w terminie 14 dni od jej otrzymania.
        </p>

        <h2 className="text-2xl font-semibold mb-4">11. Postanowienia Końcowe</h2>
        <p className="mb-4">Regulamin obowiązuje od dnia 1 stycznia 2026 roku.</p>
        <ul className="list-disc pl-6 mb-6">
          <li>W sprawach nieuregulowanych Regulaminem zastosowanie mają przepisy prawa polskiego</li>
          <li>Gabinet zastrzega sobie prawo do zmiany Regulaminu z ważnych przyczyn</li>
          <li>Zmiany Regulaminu obowiązują od dnia ich opublikowania na stronie internetowej</li>
          <li>W przypadku sporów strony będą dążyć do polubownego rozwiązania</li>
          <li>Regulamin dostępny jest na stronie internetowej Gabinetu oraz w siedzibie</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">12. Kontakt</h2>
        <p className="mb-6">
          W przypadku pytań dotyczących Regulaminu lub usług, proszę skontaktować się z Gabinetem:
        </p>
        <p className="mb-6">
          Dominika Maciejec-Kogut<br />
          Gabinet Dietetyki Klinicznej<br />
          Kielce<br />
          Email: [adres email]<br />
          Telefon: [numer telefonu]
        </p>

            <p className="text-sm text-gray-600">
              Regulamin obowiązuje od dnia 1 stycznia 2026. Ostatnia aktualizacja: 20 stycznia 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}