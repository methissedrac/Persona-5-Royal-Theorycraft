document.querySelectorAll('.img-container img').forEach(img => {
  img.addEventListener('click', function () {
    const popUp = document.querySelector('.pop-up');
    const popUpImg = popUp.querySelector('img');
    const downloadBtn = popUp.querySelector('.download-btn');

    // Получаем URL изображения
    const imageUrl = this.getAttribute('src');

    // Проверяем, действительно ли imageUrl указывает на файл изображения
    if (imageUrl.match(/.(jpeg|jpg|gif|png)$/i)) {
      popUpImg.src = imageUrl;
      const imageName = imageUrl.split('/').pop();

      // Обработчик клика на кнопку скачивания
      downloadBtn.onclick = function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        fetch(imageUrl) // Получаем изображение
          .then(response => response.blob()) // Преобразуем его в Blob
          .then(blob => {
            // Создаём URL для скачивания
            const blobUrl = URL.createObjectURL(blob);
            const tempLink = document.createElement('a');
            tempLink.style.display = 'none';
            tempLink.href = blobUrl;
            tempLink.setAttribute('download', imageName);

            // Temporarily add link to the body and trigger the download
            document.body.appendChild(tempLink);
            tempLink.click(); // Запускаем скачивание
            document.body.removeChild(tempLink);

            // Удаляем созданный URL объекта
            URL.revokeObjectURL(blobUrl);
          })
          .catch(() => {
            console.error('Не могу скачать изображение');
          });
      };

      // Отображаем модальное окно с изображением
      popUp.style.display = 'block';
    } else {
      console.error('URL не является путем к изображению:', imageUrl);
    }
  });
});

function closePopup() {
  const popUp = document.querySelector('.pop-up');
  popUp.style.display = 'none';
}

// Закрытие модального окна при клике на фон
window.addEventListener('click', function (event) {
  let modal = document.querySelector('.pop-up');
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = ''; // Возвращаем прокрутку страницы
  }
});

// Код остальных обработчиков...





//крестики для закрытия изображения, анимация увеличения картинки при нажатии

document.querySelectorAll('.img-container img').forEach(img => {
  img.onclick = () => {
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = img.getAttribute('src');

  }
});

window.onclick = function (event) {
  let modal = document.querySelector('.pop-up');
  if (event.target === modal) { // Проверяем, что клик был не по изображению, а по фону модального окна
    modal.style.display = "none";
    document.body.style.overflow = ''; // Возвращаем прокрутку страницы
  }
}

document.querySelectorAll('.img-container .img-fluid').forEach(img => {
  img.onclick = function () {
    let modal = document.querySelector('.pop-up');
    modal.style.display = "flex"; // Теперь используем flex для центрирования
    modal.querySelector('img').src = this.src;
    document.body.style.overflow = 'hidden'; // Отключаем прокрутку на фоне модального окна
  };
});



document.querySelector('.pop-up span').onclick = function () {
  document.querySelector('.pop-up').style.display = "none";
  document.body.style.overflow = ''; // Возвращаем прокрутку страницы
};


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

// создание плавной анимации перехода между страницами

// $(document).ready(function () {
//   $(" body").css("display", "none"); $("body").fadeIn(2000); $("a").click(function (event) {
//     event.preventDefault(); linkLocation = this.href; $("body").fadeOut(1000, redirectPage);
//   }); function
//     redirectPage() { window.location = linkLocation; }
// });
