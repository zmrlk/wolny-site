# wolny namiot — strona

> Wynajem namiotów imprezowych w Jędrzejowie + 100 km. Pierwszy sezon za nami.

**🌐 Live:** [wolnynamiot.pl](https://wolnynamiot.pl)
**📞 Kontakt:** +48 796 886 222 · kontakt@wolnynamiot.pl

---

## Co to jest

Statyczna strona internetowa firmy wolny namiot (est. 2025, Jędrzejów). Zbudowana w czystym HTML + CSS, bez frameworków. Deploy na GitHub Pages / Vercel / Netlify — każdy static host działa.

## Struktura

```
wolny-namiot-site/
├── index.html                  # Strona główna (landing, 16 sekcji)
├── landing.html                # (duplikat — nie używać)
├── sitemap.xml                 # Sitemap XML (z image sitemap)
├── robots.txt                  # Allowlist crawlerów (SEO + AI bots)
├── llms.txt                    # Podsumowanie dla AI agentów (GEO)
├── cennik.json                 # Machine-readable cennik (schema.org)
├── brand-system-v2-recovery.html  # Brandbook web
├── brand-system-v2-recovery.pdf   # Brandbook PDF (A3 landscape, 24 stron)
├── PROMPT-STAGO-design-system.md          # (nie indeksować)
├── PROMPT-wolny-namiot-claude-design-ALT.md
├── assets/
│   ├── namiot-1.jpg ... namiot-14.jpg  # 14 zdjęć realizacji
│   └── zdj-*.png                       # stare zdjęcia ze starej strony
└── okazje/
    ├── shared.css                      # wspólny stylesheet podstron
    ├── biesiada-w-gorach.html         # 6×12m, 50-80 os.
    ├── urodziny-w-ogrodzie.html       # 4×8m, 30-50 os.
    ├── protest.html                   # 4,5×3m ekspres, punkt info
    ├── dom-dzialkowca.html            # 5×10m, 40-60 os., ROD
    ├── uroczystosci-rodzinne.html     # wesele, komunia, chrzciny, stypa
    ├── rodzinne-z-psem.html           # 4,5×3m, kameralnie
    ├── jarmark-festyn.html            # pakiety OSP / gmin
    └── event-firmowy.html             # B2B, do 300 os.
```

## SEO + GEO

Strona zoptymalizowana zarówno pod klasyczne wyszukiwarki (Google, Bing) jak i pod **AI agentów** (ChatGPT, Claude, Perplexity, Gemini):

### Classic SEO
- ✅ Meta tags (title, description, keywords, author)
- ✅ Open Graph + Twitter Card
- ✅ Canonical URLs
- ✅ Sitemap XML z image sitemap
- ✅ robots.txt z allowlist
- ✅ Semantic HTML (h1-h4, sections, articles)
- ✅ Responsive (mobile first)
- ✅ Schema.org JSON-LD (LocalBusiness, Service, FAQPage, BreadcrumbList)

### GEO (Generative Engine Optimization)
- ✅ `llms.txt` — standardowy plik dla AI agentów z podsumowaniem firmy i URLs
- ✅ Explicit AI crawler allowlist (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended i inne)
- ✅ `cennik.json` — machine-readable endpoint z pełnym cennikiem (schema.org compliant)
- ✅ Natural language Q&A (FAQ sections na landingu + w każdej podstronie okazji)
- ✅ Entity clarity (nazwa firmy, lokalizacja, kontakt wyraźne w strukturze)
- ✅ Freshness signals (lastmod w sitemap, lastUpdated w cennik.json)

## Tech stack

- **Frontend:** Pure HTML5 + CSS3 (zero JavaScript frameworków)
- **JS:** ~15 linii vanilla JS (scroll listener dla sticky nav)
- **Fonty:** Google Fonts (Archivo, Archivo Black, Instrument Serif, JetBrains Mono)
- **Formularz:** formsubmit.co (backend-less, darmowe)
- **Hosting:** Dowolny static host (GitHub Pages / Vercel / Netlify)

## Deploy

### GitHub Pages
```bash
# Po push'u na main:
# Settings → Pages → Source: main / root → Save
# Strona pod: https://zmrlk.github.io/wolny-site/
```

### Vercel (szybszy)
```bash
vercel --prod
# Dostajesz: https://wolny-site.vercel.app
```

### Własna domena (wolnynamiot.pl)
Po zakupie domeny + DNS setup:
- GitHub Pages: CNAME w repo + A record do GitHub IPs
- Vercel: domena w dashboard + DNS auto-setup

## Development

Otwórz `index.html` w Chrome / Safari. Kliknij kafle okazji → podstrony.

Do edycji: dowolny edytor tekstu. CSS + HTML w tym samym pliku (inline) dla łatwości modyfikacji.

## Roadmap

- [ ] Pro sesja zdjęć (zamienić namiot-N.jpg na pro photo)
- [ ] Google Business Profile integracja
- [ ] Własna domena wolnynamiot.pl (DNS)
- [ ] Formularz → własny backend (CloudFlare Workers / Supabase)
- [ ] Panel klienta (wolny namiot panel w stacku VSA)
- [ ] Integracja Google Calendar (dostępność real-time)
- [ ] Recenzje Google embedded
- [ ] Mapa dojazdu z Google Maps

## Licencja

Własność: wolny namiot. Kod open source do celów edukacyjnych.

---

**Rodzinna firma z Jędrzejowa. Pierwszy sezon 2025 za nami. 20+ eventów, 5.0★ pierwsza opinia Google.**
