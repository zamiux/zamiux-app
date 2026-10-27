// پس از انتخاب هر گزینه، منوی جمع‌شده در نمایشگر موبایل بسته می‌شود.
const primaryNav = document.getElementById("primaryNav");

if (primaryNav && window.bootstrap) {
  primaryNav.querySelectorAll(".nav-link:not(.dropdown-toggle), .dropdown-item, [data-close-mobile-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 991.98px)").matches) {
        window.bootstrap.Collapse.getOrCreateInstance(primaryNav).hide();
      }
    });
  });
}

// بخش فوتر: درج خودکار سال جاری در متن حق نشر.
const footerYear = document.querySelector("[data-current-year]");

if (footerYear) {
  footerYear.textContent = new Intl.NumberFormat("fa-IR").format(new Date().getFullYear());
}