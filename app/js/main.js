"use strict";

var figure = document.querySelector('.figure'),
    borderInputs = document.querySelectorAll('.figure__border-input'),
    figureResult = figure.querySelector('.figure__result'),
    checkboxCss = document.querySelector('input#css'),
    checkboxWebkit = document.querySelector('input#webkit'),
    checkboxGecko = document.querySelector('input#gecko'),
    checkboxList = document.querySelector('.figure__checkbox-list');
figure.addEventListener('input', function (event) {
  if (event.target.classList.contains('figure__border-input--top-left') || event.target.classList.contains('figure__border-input--top-right') || event.target.classList.contains('figure__border-input--bottom-left') || event.target.classList.contains('figure__border-input--bottom-right')) {
    calculate();
  }
});
checkboxList.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkbox__input')) {
    calculate();
  }
});

function calculate() {
  figureResult.innerText = ''; // figure.style = '';

  borderInputs.forEach(function (item) {
    if (item.value !== '' && item.value !== null) {
      var position = item.id;
      console.clear();
      console.log(checkboxCss.checked);
      console.log(checkboxWebkit.checked);
      console.log(checkboxGecko.checked);

      if (checkboxCss.checked === true) {
        figureResult.innerHTML += 'border-' + position + '-radius: ' + item.value + 'px; <br>'; // todo пересмотреть запись и перезапись стилей, запимываеться только первый измененный радиус, += не работает

        figure.style = 'border-' + position + '-radius: ' + item.value + 'px;';
      }

      if (checkboxWebkit.checked === true) {
        figureResult.innerHTML += '-webkit-border-' + position + '-radius: ' + item.value + 'px; <br>'; // figure.style += 'border-' + position + '-radius: ' + item.value + 'px;';
      }

      if (checkboxGecko.checked === true) {
        figureResult.innerHTML += '-moz-border-radius-' + position + ': ' + item.value + 'px; <br>'; // figure.style += 'border-' + position + '-radius: ' + item.value + 'px;';
      }
    }
  });
}

function renderBorders() {}
//# sourceMappingURL=main.js.map
