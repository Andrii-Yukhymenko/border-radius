let figureBody = document.querySelector('.figure__body'),
  borderInputs = document.querySelectorAll('.figure__border-input'),
  figureResult = figureBody.querySelector('.figure__result'),
  checkboxCss = document.querySelector('input#css'),
  checkboxWebkit = document.querySelector('input#css'),
  checkboxGecko = document.querySelector('input#css');
// console.log(checkboxCss.checked);

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

function calculate() {
  let position = event.target.id;
  figureResult.innerText = '';
  borderInputs.forEach((item, number) => {
    if (item.value !== '' && item.value !== null) {
      // if()
      // if (i){}
      // else {}
      console.log(item.value);
      figureResult.innerHTML += 'border-' + position + '-radius: ' + item.value + 'px; <br>';
    }
  });
}

function renderBorders(){

}
