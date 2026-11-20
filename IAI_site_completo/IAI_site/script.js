(() => {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      toggle.textContent = open ? '✕' : '☰';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      toggle.textContent = '☰';
    }));
  }

  const planSelect = document.getElementById('plan');
  document.querySelectorAll('.choose-plan').forEach(link => link.addEventListener('click', () => {
    if (planSelect) planSelect.value = link.dataset.plan || 'Ainda não sei';
  }));

  const form = document.getElementById('contact-form');
  const result = document.getElementById('contact-result');
  const prepared = document.getElementById('prepared-message');
  const whatsappLink = document.getElementById('whatsapp-link');
  const status = document.getElementById('copy-status');
  if (form && result && prepared && whatsappLink) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const fd = new FormData(form);
      const clean = value => String(value || '').replace(/[<>]/g, '').trim();
      const message = [
        'Olá, IAI?! Gostaria de conversar sobre os serviços da agência.',
        '',
        'Nome: ' + clean(fd.get('name')),
        'Negócio: ' + clean(fd.get('business')),
        'Plano de interesse: ' + clean(fd.get('plan')),
        'O que preciso: ' + (clean(fd.get('message')) || 'Gostaria de saber mais.'),
        '',
        'Podemos conversar sobre uma proposta?'
      ].join('\n');
      prepared.value = message;
      const number = String(window.IAI_CONFIG?.whatsapp || '').replace(/\D/g, '');
      if (/^\d{12,15}$/.test(number)) {
        whatsappLink.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
        whatsappLink.hidden = false;
      } else {
        whatsappLink.hidden = true;
        whatsappLink.removeAttribute('href');
      }
      result.hidden = false;
      result.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center'});
      status.textContent = '';
    });
    document.getElementById('copy-message')?.addEventListener('click', async () => {
      try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(prepared.value);
        else { prepared.focus(); prepared.select(); const ok = document.execCommand('copy'); if (!ok) throw new Error('Cópia não disponível'); }
        status.textContent = 'Mensagem copiada!';
      } catch {
        prepared.focus(); prepared.select();
        status.textContent = 'Selecione e copie o texto da mensagem acima.';
      }
    });
  }
})();
