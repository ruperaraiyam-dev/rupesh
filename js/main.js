
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');

      toggle.setAttribute('aria-expanded', String(open));

      toggle.innerHTML = open
        ? '✕ <span class="sr-only">Close navigation</span>'
        : '☰ <span class="sr-only">Toggle navigation</span>';
    });

    nav.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        nav.classList.remove('open');

        toggle.setAttribute('aria-expanded', 'false');

        toggle.innerHTML =
          '☰ <span class="sr-only">Toggle navigation</span>';
      })
    );
  }

  // Automatically update the copyright year.
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Contact form builds a WhatsApp message locally.
  // Customer details are not sent to a server.
  const form = document.querySelector('[data-whatsapp-form]');

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const data = new FormData(form);

      const name = String(data.get('name') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const area = String(data.get('area') || '').trim();
      const service = String(data.get('service') || '').trim();
      const message = String(data.get('message') || '').trim();

      const text =
        `Hello Aro Home Service, I would like to enquire about water purifier service.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AArea: ${encodeURIComponent(area)}%0AService: ${encodeURIComponent(service)}%0AProblem: ${encodeURIComponent(message)}`;

      window.open(
        `https://wa.me/919570268145?text=${text}`,
        '_blank',
        'noopener'
      );
    });
  }
})();
