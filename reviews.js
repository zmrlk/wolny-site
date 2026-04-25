(function(){
  var API_KEY = window.WN_GOOGLE_API_KEY || '';
  var PLACE_ID = window.WN_PLACE_ID || '';
  var container = document.getElementById('google-reviews');
  if (!container || !API_KEY || !PLACE_ID) return;

  // Brand colors dla avatarów (rotacja per index)
  var avatarColors = [
    {bg: 'var(--trawa)', fg: 'var(--plotno)'},
    {bg: 'var(--pomidor)', fg: 'var(--plotno)'},
    {bg: 'var(--granat)', fg: 'var(--zarowka)'}
  ];

  function timeAgo(isoDate) {
    var diff = Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000);
    if (diff < 86400) return 'dzisiaj';
    var days = Math.floor(diff / 86400);
    if (days < 7) return days + (days === 1 ? ' dzień' : ' dni') + ' temu';
    var weeks = Math.floor(days / 7);
    if (weeks < 5) return weeks + ' tyg. temu';
    var months = Math.floor(days / 30);
    if (months < 12) return months + ' mies. temu';
    return Math.floor(days / 365) + ' r. temu';
  }

  function renderReviews(reviews, rating, count) {
    // Filtruj 4-5 gwiazdkowe + sortuj po dacie
    var sorted = reviews
      .filter(function(r){ return r.rating >= 4; })
      .slice()
      .sort(function(a, b) {
        return new Date(b.publishTime) - new Date(a.publishTime);
      });
    var top3 = sorted.slice(0, 3);
    if (top3.length === 0) return; // nic nie nadpisuj jeśli brak danych

    // Zapamiętaj CTA card (ostatnia, do dołączenia po reviews)
    var cta = container.querySelector('.opinia.cta-opinia');
    var ctaHTML = cta ? cta.outerHTML : '';

    container.textContent = '';
    top3.forEach(function(r, i) {
      var card = document.createElement('div');
      card.className = 'opinia';

      var stars = document.createElement('div');
      stars.className = 'opinia-stars';
      var s = '';
      for (var j = 0; j < 5; j++) s += j < r.rating ? '★' : '☆';
      stars.textContent = s;

      var reviewText = (r.originalText && r.originalText.text) || (r.text && r.text.text) || '';
      var text = document.createElement('p');
      text.className = 'opinia-text';
      text.textContent = '„' + reviewText + '”';

      var author = document.createElement('div');
      author.className = 'opinia-author';

      var avatar = document.createElement('div');
      avatar.className = 'opinia-avatar';
      var color = avatarColors[i % avatarColors.length];
      avatar.style.background = color.bg;
      avatar.style.color = color.fg;
      avatar.textContent = '★';

      var meta = document.createElement('div');
      var name = document.createElement('div');
      name.className = 'opinia-name';
      name.textContent = r.authorAttribution ? r.authorAttribution.displayName : 'Klient Google';
      var info = document.createElement('div');
      info.className = 'opinia-meta';
      info.textContent = 'opinia google · ' + timeAgo(r.publishTime);

      meta.appendChild(name);
      meta.appendChild(info);
      author.appendChild(avatar);
      author.appendChild(meta);

      card.appendChild(stars);
      card.appendChild(text);
      card.appendChild(author);
      container.appendChild(card);
    });

    // Doklej CTA card
    if (ctaHTML) {
      container.insertAdjacentHTML('beforeend', ctaHTML);
    }

    // Aktualizuj nagłówek + count w kontakt-row
    if (rating && count) {
      var countEl = document.querySelector('#opinie .review-count');
      if (countEl) countEl.textContent = count + ' opini' + (count === 1 ? 'a' : (count < 5 ? 'e' : 'i'));
      var ratingEl = document.querySelector('#opinie .review-rating');
      if (ratingEl) ratingEl.textContent = rating.toFixed(1);
      var inlineCount = document.querySelectorAll('.review-count-inline em');
      inlineCount.forEach(function(el) {
        el.textContent = '· ' + count + ' opini' + (count === 1 ? 'a' : (count < 5 ? 'e' : 'i'));
      });
    }
  }

  var url = 'https://places.googleapis.com/v1/places/' + PLACE_ID +
    '?fields=reviews,rating,userRatingCount&languageCode=pl&key=' + encodeURIComponent(API_KEY);

  fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.reviews && data.reviews.length) {
        renderReviews(data.reviews, data.rating, data.userRatingCount);
      }
    })
    .catch(function() { /* fallback zostaje */ });
})();
