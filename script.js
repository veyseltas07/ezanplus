// Smooth scrolling enhancement for older browsers and small offset for sticky header
(function () {
  const header = document.querySelector(".site-header");

  function scrollWithOffset(event) {
    const target = event.target;
    if (!(target instanceof HTMLAnchorElement)) return;
    const href = target.getAttribute("href");
    if (!href || !href.startsWith("#") || href === "#") return;

    const section = document.querySelector(href);
    if (!section) return;

    event.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const rect = section.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - (headerHeight + 8);

    window.scrollTo({
      top: offsetTop < 0 ? 0 : offsetTop,
      behavior: "smooth",
    });
  }

  document.addEventListener("click", scrollWithOffset);
})();


