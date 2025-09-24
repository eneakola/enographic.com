// Funksioni për të ndryshuar slide
document.querySelectorAll('nav.menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const slideId = link.getAttribute('data-slide');

    // Hiq active nga të gjitha slide dhe menutë
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav.menu a').forEach(l => l.classList.remove('active'));

    // Aktivizo slide dhe linkun aktual
    document.getElementById(slideId).classList.add('active');
    link.classList.add('active');
  });
});

// Vendos gjuhën default shqip
setLanguage('sq');

function setLanguage(lang) {
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}
