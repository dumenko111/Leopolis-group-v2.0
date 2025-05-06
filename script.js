document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо всі необхідні елементи
  const mainButtons = document.getElementById('mainButtons');
  const passengerButtons = document.getElementById('passengerButtons');
  const cargoButtons = document.getElementById('cargoButtons');
  const tourismButtons = document.getElementById('tourismButtons');
  const aboutButtons = document.getElementById('aboutButtons');

  const navButtons = document.querySelectorAll('.nav-btn');
  const backButtons = document.querySelectorAll('.back-btn');
  const cityButtons = document.querySelectorAll('.city-btn');
  const cargoButtonsList = document.querySelectorAll('.cargo-btn');

  const infoCards = document.querySelectorAll('.info-card');

  // Обробник для основних кнопок навігації
  navButtons.forEach(button => {
    button.addEventListener('click', function () {
      const section = this.dataset.section;

      // Ховаємо всі кнопки
      mainButtons.classList.add('hidden');
      passengerButtons.classList.add('hidden');
      cargoButtons.classList.add('hidden');
      tourismButtons.classList.add('hidden');
      aboutButtons.classList.add('hidden');

      // Ховаємо всі інформаційні блоки
      infoCards.forEach(card => {
        card.classList.remove('active');
        card.classList.add('hidden');
      });

      // Показуємо потрібні кнопки
      switch (section) {
        case 'passenger':
          passengerButtons.classList.remove('hidden');
          break;
        case 'cargo':
          cargoButtons.classList.remove('hidden');
          break;
        case 'tourism':
          tourismButtons.classList.remove('hidden');
          document.getElementById('tourism').classList.remove('hidden');
          document.getElementById('tourism').classList.add('active');
          break;
        case 'about':
          aboutButtons.classList.remove('hidden');
          document.getElementById('about').classList.remove('hidden');
          document.getElementById('about').classList.add('active');
          break;
      }
    });
  });

  // Обробник для кнопок "Назад"
  backButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Ховаємо всі кнопки
      passengerButtons.classList.add('hidden');
      cargoButtons.classList.add('hidden');
      tourismButtons.classList.add('hidden');
      aboutButtons.classList.add('hidden');

      // Ховаємо всі інформаційні блоки
      infoCards.forEach(card => {
        card.classList.remove('active');
        card.classList.add('hidden');
      });

      // Показуємо основні кнопки
      mainButtons.classList.remove('hidden');
    });
  });

  // Обробник для кнопок міст
  cityButtons.forEach(button => {
    button.addEventListener('click', function () {
      const infoId = this.dataset.info;

      // Ховаємо всі інформаційні блоки
      infoCards.forEach(card => {
        card.classList.remove('active');
        card.classList.add('hidden');
      });

      // Показуємо потрібний блок
      document.getElementById(infoId).classList.remove('hidden');
      document.getElementById(infoId).classList.add('active');
    });
  });

  // Обробник для кнопок вантажних перевезень
  cargoButtonsList.forEach(button => {
    button.addEventListener('click', function () {
      const infoId = this.dataset.info;

      // Ховаємо всі інформаційні блоки
      infoCards.forEach(card => {
        card.classList.remove('active');
        card.classList.add('hidden');
      });
      // Показуємо потрібний блок
      document.getElementById(infoId).classList.remove('hidden');
      document.getElementById(infoId).classList.add('active');
    });
  });
});


// Обробник перемикання теми
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Перевірка збереженої теми
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.add('theme-transition');

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  }

  setTimeout(() => {
    body.classList.remove('theme-transition');
  }, 300);
});




























document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.custom-accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.custom-accordion-header');
    const content = item.querySelector('.custom-accordion-content');
    const closeBtn = item.querySelector('.custom-accordion-close');

    header.addEventListener('click', () => {
      item.classList.toggle('active');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        item.classList.remove('active');
      });
    }
  });
});