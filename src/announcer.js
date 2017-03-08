export function announcePageTitle() {
  const el = document.getElementById('announcer');
  const tEl = document.querySelector('[data-page-title]');
  const title = tEl.value || tEl.textContent;
  document.title = title;
  el.textContent = `ページ「${title}」を開きました`;
}
