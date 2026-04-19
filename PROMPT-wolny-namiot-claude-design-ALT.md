# PROMPT DO CLAUDE DESIGN — WOLNY NAMIOT · WARIANT B (granat + las)

Skopiuj całość poniżej i wklej jako pierwszą wiadomość w nowym projekcie Claude Design (claude.ai/design). To jest wariant alternatywny — chcę zobaczyć drugą interpretację żeby porównać z już istniejącym brand systemem.

---

Robimy **brand system dla wolnynamiot.pl** — polska rodzinna wypożyczalnia namiotów imprezowych z Jędrzejowa (województwo świętokrzyskie). Namioty 3×3 do 15×30 na **wesele, biesiadę, urodziny w ogrodzie, spotkanie u działkowca, protest, komunię, festyn, urodziny psa Burego, stypę, event firmowy** — pełne spektrum polskich okazji, od wesela po protest.

## DNA marki

**Główne hasła:**
- *postaw gdzie chcesz. zrób co chcesz.*
- *wolny namiot — to może być twoja impreza.*
- *nie pytamy co robisz pod spodem.*

**Ton:** lowercase, bezpretensjonalny, polska biesiada, folk-pop z lekkim dystansem do siebie. Zero "premium / exclusive / dedykowany / kompleksowy / pasja". Grotesk krzyczy cicho, serif szepcze ironicznie.

**Pozycjonowanie:** NIE premium wedding vendor. Rodzinna firma rzemieślnicza — namiot demokratyczny, dla każdego. Uniwersalność i luz zamiast eleganckiego weddingu.

## Paleta — wariant B (zmiana kierunku)

Poprzedni wariant miał ogień rdzawy + żarówka + wesele różowy = jarmark, ale za bardzo w pomarańcz i "seraczek jesienny". Chcemy świeżej:

**Główne kolory:**
- **krem / płótno** — kremowe off-white `#F5F1E6` albo podobne. Tło główne (60%).
- **granat** — głęboki navy `#132B4D` albo podobny. Primary akcent, CTA, mocne sekcje (20%).
- **las** — żywa leśna zieleń `#1F7A3F` albo podobny. Secondary akcent (10%).
- **atrament** — czerń `#0A0A0A`. Tekst, plakat (8%).
- **żarówka** — jasny żółty `#F9D94A`. Trzeci akcent punktowo, ciepło, rzadko (2%).

**Proporcje:** 60/20/10/8/2. Krem i granat = dominanty. Las = wsparcie. Żarówka = iskra pod ogrodem.

Zero pomarańczowego. Zero różowego. Zero szarości. Wszystkie kolory o pełnej saturacji, żywe, plakatowe — ale dojrzałe, nie dziecięce.

## Typografia

- **Archivo Black** (grotesk 900) dla headlines, sloganów, display. Lowercase zawsze, letter-spacing ujemne (-0.03em do -0.05em).
- **Instrument Serif italic** (400 italic) dla akcentów, szeptów, claimów — np. słowo "namiot" w logo.
- **JetBrains Mono** (500) dla utility — metki, numery, eyebrow, code.
- Wszystkie darmowe przez Google Fonts.
- Wszystko lowercase. Wszystko ostre kanty (radius 0 domyślnie).

## Logo

- **Wordmark:** `wolny namiot` — "wolny" w Archivo Black, "namiot" w Instrument Serif italic. Lowercase. 4 warianty kolorystyczne (płótno, atrament, granat, las).
- **Sygnet:** pawilon z lotu ptaka — kwadrat 2×2 kratki z przekątnymi dachu. Geometryczny. Odporny na redukcję do 32×32 px.
- **Pieczątka-sticker:** wariant okrągły/owalny do koszulek, naklejek, boku furgonetki — ze sloganami typu "postaw gdzie chcesz" / "nie pytamy co robisz pod spodem".

## Struktura brand system (12 sekcji w jednym pliku HTML)

1. **Esencja** — manifest, pozycjonowanie, 4 filary (wolność, rzemiosło, lokalność, biesiada)
2. **Logo** — wordmark + sygnet, warianty, misuse, clearspace
3. **Kolor** — 5 kolorów, pełne skale 100-900, proporcje 60/20/10/8/2, matryca kontrastów AA/AAA
4. **Typografia** — 3 fonty, skala 10 stopni, przykłady użycia
5. **Tokeny** — spacing 4-based, radii minimalne (brand ma kanty), shadow, grid 12 kolumn
6. **Ikony** — 16 ikon geometrycznych (stroke 1.5, outline only) — namiot, żarówka, girlanda, kalendarz, flaga, kompas, oko, celownik itd.
7. **Komponenty UI** — buttony (3), tagi (5), inputy, karty produktowe, editorial card, stat card, callout
8. **Voice** — do/don't, slidery tonu (formalny↔luźny, korpo↔ludzki, premium↔biesiada), lexicon (mówimy / nie mówimy)
9. **Slogany** — 9 krótkich w 3 poziomach (primary 3, secondary 3, long 3)
10. **Zastosowania produktowe** — 10 okazji z rozmiarami namiotów (wesele, biesiada w górach, urodziny w ogrodzie, protest, dom działkowca, urodziny psa burego, jarmark, stypa, komunia/chrzciny, event firmowy)
11. **Robimy / nie robimy** — granice usługi (wynajem + dowóz + montaż TAK; catering, DJ, koordynacja NIE)
12. **Zastosowania materiałowe** — miniaturki: landing, stories, plakat A2, flyer A5, bok furgonetki, koszulki, naklejki-pieczątki

## Motywy wizualne

- **Girlanda żarówek** — cienki pasek z kropkami żarówka + las + granat, używany jako divider między sekcjami (odpowiednik fali lub linii).
- **Ticker z okazjami** — pasek przewijający się z listą sytuacji ("sezon 2026 · wolne terminy · jędrzejów + 100 km · wesele · protest · urodziny psa burego").
- **Ostre kanty** — bez zaokrągleń (poza pieczątkami-stickerami).
- **Box-decoration-break** dla highlighted słów — żółty marker jak na flamastrze, wieloliniowy.

## 9 sloganów do rozmieszczenia w systemie

**Primary:**
1. postaw gdzie chcesz. *zrób co chcesz.*
2. wolny namiot *—* twoja impreza.
3. twój *ogród.* twoje zasady.

**Secondary:**
4. nie padało. *i tak by nie padało.*
5. ślub? protest? *obojętnie.*
6. nie pytamy *co robisz* pod spodem.

**Long:**
7. 80 wesel rocznie. *ani jednego odwołania z naszej winy.*
8. montaż w 3h. demontaż w 1. *reszta należy do ciebie.*
9. rodzinna firma z *jędrzejowa.* 100 km dookoła. zawsze na czas.

## 10 okazji (use cases) z rozmiarami

| # | Okazja | Rozmiar | Osób |
|---|---|---|---|
| 01 | biesiada w górach | 6×12m | 50-80 |
| 02 | urodziny w ogrodzie | 4×8m | 30-50 |
| 03 | protest / zgromadzenie | 3×3m | punkt info |
| 04 | dom działkowca | 5×10m | 40-60 |
| 05 | wesele (tak, też) | 10×20m | 100-150 |
| 06 | urodziny psa burego | 3×3m | pies i rodzina |
| 07 | jarmark / festyn | 6×12m | kramy + ludzie |
| 08 | stypa | 5×10m | 30-50 |
| 09 | komunia / chrzciny | 4×8m | 40-60 |
| 10 | event firmowy | do 15×30m | do 300, branding |

## Zastosowania materiałowe (10 mini-templatek)

1. Landing page hero (desktop)
2. Instagram story (9:16)
3. Instagram post (1:1)
4. Plakat A2 na płot / słup
5. Flyer A5 do skrzynki
6. Bok furgonetki (16:9 szeroki)
7. Koszulka (druk przód)
8. Naklejka-pieczątka (4 warianty kolorystyczne, okrągłe, z box-shadow "offset" jak przyklejone)
9. Stopka email (z sygnetem + tel + slogan)
10. Banner na stronę sezonową

## Kontakt

- Tel: **796 886 222**
- Email: **kontakt@wolnynamiot.pl**
- Adres: **11 Listopada 27, 28-300 Jędrzejów**
- Strona: **wolnynamiot.pl**

## Start

Zaproponuj od razu paletę (5 kolorów hex), fonty i ton w 2-3 zdaniach — potem buduj HTML. **Nie pytaj mnie o defaults** — użyj wszystkiego powyżej, tam gdzie coś jest niejasne, podejmij decyzję i uzasadnij w komentarzu. Iterujemy od punktu wyjścia.

Output = jedna strona HTML z wszystkimi 12 sekcjami + 10 mini-templatek na końcu. Responsive, print-ready dla plakatów/flyerów, Google Fonts.

Pamiętaj: **zero korpo. zero premium. zero pomarańczu/różu.** Krem + granat + las + żarówka + atrament. Plakatowo, lowercase, ostre kanty.
