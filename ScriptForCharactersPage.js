document.addEventListener('DOMContentLoaded', (event) => {
  const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;

      if (content.style.maxHeight) {
        // Если свойство maxHeight установлено, заворачиваем аккордеон и убираем отступы
        content.style.maxHeight = null;
        // Устанавливаем таймаут, равный длительности анимации, чтобы убрать отступы после её завершения
        setTimeout(() => {
          content.style.paddingTop = '0';
          content.style.paddingBottom = '0';
        }, 200); // Задержка должна соответствовать CSS свойству transition
      } else {
        // Устанавливаем отступы перед открытием аккордеона
        content.style.paddingTop = '20px';
        content.style.maxHeight = content.scrollHeight + "600px";
      }
    });
  });

  // Обработчик, предотвращающий копирование текста из элементов с классом 'no-select'
  document.querySelector('.no-select').addEventListener('copy', (e) => {
    e.preventDefault();
  });
});
