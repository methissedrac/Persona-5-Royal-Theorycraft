function searchDictionary() {
  var input, filter, dictionary, terms, title, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  dictionary = document.getElementById('dictionaryContent');
  terms = dictionary.getElementsByClassName('term');

  for (i = 0; i < terms.length; i++) {
    title = terms[i].getElementsByClassName('term-title')[0];
    if (title) {
      txtValue = title.textContent || title.innerText;
      if (txtValue.toUpperCase().includes(filter)) {
        terms[i].style.display = "";
      } else {
        terms[i].style.display = "none";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dictionaryContent = document.getElementById('dictionaryContent');
  const terms = Array.from(dictionaryContent.getElementsByClassName('term'));

  terms.sort(function (a, b) {
    const titleA = a.querySelector('.term-title').textContent.toUpperCase();
    const titleB = b.querySelector('.term-title').textContent.toUpperCase();
    return titleA.localeCompare(titleB, 'ru');
  });

  // Очищаем dictionaryContent перед добавлением отсортированных терминов
  dictionaryContent.innerHTML = '';

  // Добавляем термины обратно в dictionaryContent в отсортированном порядке
  terms.forEach(function (term) {
    dictionaryContent.appendChild(term);
  });
});
