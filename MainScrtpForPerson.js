
// Стрелка, которая возвращает в начало страницы

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

document.getElementById('nav-toggle').addEventListener('change', function (e) {
  if (e.target.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});


// Получаем элемент чекбокса гамбургер-меню
const navToggle = document.getElementById('nav-toggle');

// Добавляем обработчик события на изменение состояния чекбокса
navToggle.addEventListener('change', function () {
  // Если чекбокс включен (гамбургер-меню открыто)
  if (navToggle.checked) {
    // Закрываем аккордеон
    const accordionToggle = document.getElementById('characters-toggle');
    if (accordionToggle && accordionToggle.checked) {
      accordionToggle.checked = false;
    }
  }
});




document.addEventListener("DOMContentLoaded", function () {
  // Выборка всех элементов с классом 'lazy'
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        // Проверка на пересечение с вьюпортом
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.srcset = lazyImage.dataset.srcset; // Активация srcset скопированным значением из data-srcset
          lazyImage.classList.remove("lazy"); // Удаление класса 'lazy', чтобы не загружать изображение повторно
          lazyImageObserver.unobserve(lazyImage); // Отписываемся от наблюдения за элементом
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage); // Запуск наблюдения за каждым изображением
    });
  } else {
    // Fallback для браузеров без поддержки IntersectionObserver
    lazyImages.forEach(function (lazyImage) {
      lazyImage.srcset = lazyImage.dataset.srcset;
      lazyImage.classList.remove("lazy");
    });
  }
});

if ("serviceWorkerPersona" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

window.addEventListener('pagehide', function (event) {
  if (myWebSocket) {
    myWebSocket.close();
  }
});
