let figureBody = document.querySelector('.figure__body'),
  borderInputs = document.querySelectorAll('.figure__border-input'),
  figureResult = figureBody.querySelector('.figure__result'),
  checkboxCss = document.querySelector('input#css'),
  checkboxWebkit = document.querySelector('input#webkit'),
  checkboxGecko = document.querySelector('input#gecko'),
  checkboxList = document.querySelector('.figure__checkbox-list');

figureBody.addEventListener('input', (event) => {
  if (
    event.target.classList.contains('figure__border-input--top-left') ||
    event.target.classList.contains('figure__border-input--top-right') ||
    event.target.classList.contains('figure__border-input--bottom-left') ||
    event.target.classList.contains('figure__border-input--bottom-right')
  ) {
    calculate();
  }
});

checkboxList.addEventListener('click', (event) => {
  if (event.target.classList.contains('checkbox__input')) {
    calculate();
  }
});

function calculate() {
  figureResult.innerText = '';
  borderInputs.forEach((item, number) => {
    if (item.value !== '' && item.value !== null) {
      let position = item.id;
      console.clear();
      console.log(checkboxCss.checked);
      console.log(checkboxWebkit.checked);
      console.log(checkboxGecko.checked);
      if (checkboxCss.checked === true) {
        figureResult.innerHTML += 'border-' + position + '-radius: ' + item.value + 'px; <br>';
      }
      if (checkboxWebkit.checked === true) {
        figureResult.innerHTML +=
          '-webkit-border-' + position + '-radius: ' + item.value + 'px; <br>';
      }
      if (checkboxGecko.checked === true) {
        figureResult.innerHTML += '-moz-border-radius-' + position + ': ' + item.value + 'px; <br>';
      }
    }
  });
}

function renderBorders() {}
