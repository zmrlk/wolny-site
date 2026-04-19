# PROMPT DO CLAUDE DESIGN — STAGO DESIGN SYSTEM

Skopiuj całość poniżej i wklej jako pierwszą wiadomość w nowym projekcie Claude Design (claude.ai/design). Odpowie wszystko w jednym strzale — bez pytań pobocznych.

---

Robimy **kompleksowy design system dla STAGO** (stago.com.pl) jako kompendium dla handlowca — ma wejść, zobaczyć wszystkie zasady (kolory, fonty, komponenty, ton) i od razu wyprodukować dowolny materiał marketingowy albo sprzedażowy.

## Kontekst marki

**Firma:** STAGO Jędrzejów — producent konstrukcji stalowych, hal magazynowych, pawilonów handlowych, kontenerów biurowych, domów modułowych. B2B + B2C. Działa ogólnopolsko. Eksport (cz, de, es, hu, it, sk). Polska rodzinna firma przemysłowa.

**Strona źródłowa:** stago.com.pl — fetchnij ją, weź stamtąd tekst, fonty, kolory, ton komunikacji. Na stronie jest też storytelling (historia Jana, Marka, warzywniak Tomka z Buska-Zdroju) — nie ignoruj tego, to DNA marki.

**Slogan:** *Twoja przestrzeń, bez kompromisów.*

**Ton komunikacji:** taki jak na stronie — konkretny, solidny, B2B przemysłowy, ale z ludzkim pierwiastkiem (historie klientów). Bez marketingowego bełkotu. Nie „premium", „ekskluzywny", „dedykowany" — raczej „solidne", „na lata", „konkret", „liczby".

**Kontakt:** kontakt@stago.pl · stago.com.pl · 509 508 210 · Jędrzejów.

## Zasoby jakie masz / powinny być wgrane

- `stago-logo-black.png` — logo główne, czarne
- `stago-logo-white.png` — logo białe (na ciemne tła)
- `stago-sygnet-black.png` — sam sygnet (geometryczny, z charakterystycznym pomarańczowym akcentem-przecinkiem/apostrofem)
- `stago-sygnet-white.png` — sygnet biały

**Kolor:** bazuj na pomarańczowym akcencie z sygnetu (apostrof/przecinek) + neutralna paleta przemysłowa (antracyt, beton, biel, akcent pomarańczowy). Daj pełne skale, proporcje użycia (60/30/8/2), kontrasty AA/AAA.

**Typografia:** zostań przy fontach ze strony (jeśli fetch je pokaże). Jeśli nie — Inter / Space Grotesk dla body + mocny sans dla headline. Nie serif eleganckie — to B2B przemysł, nie wesele.

## Czego potrzebuję w output

Jedna strona HTML brand system (kompendium), a potem 20 gotowych templatek materiałów. W tej kolejności priorytetu:

1. **Katalog produktowy PDF / druk** — template wielostronicowy dla produktów (hale, pawilony, kontenery, domy modułowe)
2. **Oferta handlowa / prezentacja** — template slide deck do wysyłki klientowi B2B
3. **Posty Instagram / Facebook** — 3 warianty (realizacja, edukacja, oferta)
4. **Stories / Reels** — template pionowy
5. **Stopki email** — wersja dla handlowca
6. **Reklamy Google / Meta Ads** — banner + copy
7. **Wizytówki** — front + back
8. **Plakat A2/A3** — do druku dla targów
9. **Flyer A5** — dla dostawców / spotkań
10. **Banner na stronie** — hero warianty

## Struktura brand system (12 sekcji — jak wolnynamiot v2, ale dostosowane do STAGO)

1. Esencja — pozycjonowanie, 4 filary, manifest
2. Logo — wordmark + sygnet, anatomia, clearspace, misuse, warianty kolorystyczne
3. Kolor — paleta główna (6 kolorów), skale, proporcje, kontrasty
4. Typografia — 2-3 fonty, skala 10 stopni, przykłady użycia
5. Tokeny — spacing, radii, shadow, grid 12 kolumn
6. Ikony — 16-20 ikon w stylu spójnym z przemysłem (geometryczne, stroke, outline)
7. Komponenty UI — buttony, tagi, inputy, karty produktowe, stat card, callout, editorial card
8. Voice — tone sliders (formalny↔luźny, korpo↔ludzki), lexicon (mówimy / nie mówimy)
9. Slogany — 5-9 krótkich w 3 poziomach (primary / secondary / long)
10. Zastosowania — 6-10 scenariuszy użycia produktu (hala magazynowa / pawilon handlowy / kontener biurowy / dom modułowy / konstrukcja stalowa / zaplecze budowy)
11. Robimy / nie robimy — granice produktowe (nie doradztwo prawne, nie finansowanie — gdzie się zaczynamy, gdzie kończymy)
12. Zastosowania materiałowe — miniaturki 10 templatek materiałów (powyżej) jak wyglądają "na żywo"

## Inspiracje wizualne

- **Apple** — czystość, pustka, czarny + pomarańcz akcent
- **OpenAI** — techniczny minimalizm, mocne dane, uniform spacing
- **Moja** (t-mobile?) — polski, komunikatywny, ale nowoczesny

Nie kopiuj 1:1 — weź DNA i zastosuj do przemysłu budowlanego. STAGO nie jest Apple — to polska stalownia z charakterem.

## Technicznie

- **Output format:** jedna strona HTML (głównie dla odniesienia) + 20 templatek HTML każdy do podejrzenia. Potem export PDF jako podręcznik 20-30 stron dla handlowca.
- **Wszystkie darmowe Google Fonts** (żeby nie było problemu z licencją).
- **Responsive** — templatki mają się dobrze renderować na desktop i mobile.
- **Print-ready** — wizytówki / plakaty mają mieć poprawne marginesy i bleed.

## Czego chcę uniknąć

- Generyczny korpo-design (niebieski + szary + ikonki flat).
- Ton sprzedażowy („Zapewniamy najwyższą jakość!!!") — STAGO jest już rozpoznawalne, nie musi krzyczeć.
- Obrazki stockowe z pracownikami w hełmach przybijającymi sobie piątki.

## Start

Fetchnij stago.com.pl (weź stamtąd tekst, styl, fonty jeśli czytelne). Obejrzyj logo. Zbuduj brand system w jednym pliku HTML ze wszystkimi 12 sekcjami. Potem zbuduj 20 templatek materiałów w osobnych plikach.

Powiedz od razu jak to widzisz — jaka paleta, jakie fonty, jaki ton. **Nie pytaj mnie o defaults** — po prostu zaproponuj i uzasadnij w 2-3 zdaniach. Iterujemy od tego punktu.
