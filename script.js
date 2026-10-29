// Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('active');
  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Обработка формы
const form = document.getElementById('bookingForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Здесь можно подключить Telegram Bot / Email / Google Sheets
  // Пока просто имитация отправки

  alert(`${form.dataset.thanks}, ${data.name}!\n${form.dataset.demo}`);

  form.reset();
});