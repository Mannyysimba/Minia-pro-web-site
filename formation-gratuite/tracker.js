// Tracker de performance articles — logs temps de lecture
(function() {
  const article = document.querySelector('[data-article-id]');
  if (!article) return;
  const id = article.getAttribute('data-article-id');
  const start = Date.now();

  window.addEventListener('beforeunload', () => {
    const duration = Math.round((Date.now() - start) / 1000);
    const data = { article: id, duration, date: new Date().toISOString() };
    // Log dans localStorage pour analyse manuelle
    const logs = JSON.parse(localStorage.getItem('minia_article_logs') || '[]');
    logs.push(data);
    localStorage.setItem('minia_article_logs', JSON.stringify(logs));
  });
})();
