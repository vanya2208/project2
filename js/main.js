let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
});

function animateCounter(elementId, target, duration, suffix = '') {
    let counter = document.getElementById(elementId);
    let count = 0;
    let intervalTime = duration / target;

    let interval = setInterval(() => {
        count++;
        counter.textContent = count;

        if (count >= target) {
            clearInterval(interval);
            counter.textContent = count + suffix; 
        }
    }, intervalTime);
}


animateCounter('counter1', 70, 500, '%'); 
animateCounter('counter2', 11, 500, 'k'); 
animateCounter('counter3', 100, 500, '+'); 
animateCounter('counter4', 2, 500, 'k'); 

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

// Відкриття меню та overlay при натисканні на бургер-кнопку
burgerBtn.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Якщо меню активне, додаємо клас disabled до бургер-кнопки
  if (burgerMenu.classList.contains('active')) {
    burgerBtn.classList.add('disabled');
  } else {
    burgerBtn.classList.remove('disabled');
  }
});

// Закриття меню та overlay при натисканні на затемнення
overlay.addEventListener('click', function() {
  burgerMenu.classList.remove('active');
  overlay.classList.remove('active');
  burgerBtn.classList.remove('disabled'); // Відновлюємо активність бургер-кнопки
});

// Закриття меню при натисканні на кнопку закриття
closeBtn.addEventListener('click', function() {
  burgerMenu.classList.remove('active');
  overlay.classList.remove('active');
  burgerBtn.classList.remove('disabled'); // Відновлюємо активність бургер-кнопки
});




