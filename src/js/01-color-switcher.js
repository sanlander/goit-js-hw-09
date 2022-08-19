function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;
refs.btnStop.toggleAttribute('disabled');

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function changeBodyBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStart(e) {
  timerId = setInterval(changeBodyBgColor, 1000);
  refs.btnStart.toggleAttribute('disabled');
  refs.btnStop.toggleAttribute('disabled');
}

function onBtnStop() {
  clearInterval(timerId);
  refs.btnStart.toggleAttribute('disabled');
  refs.btnStop.toggleAttribute('disabled');
}
