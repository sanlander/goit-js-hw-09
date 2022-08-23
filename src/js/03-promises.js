import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  form: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('click', onClickBtnForm);

function onClickBtnForm(e) {
  e.preventDefault();

  let amount = Number(refs.amount.value);
  let step = Number(refs.step.value);
  let currentDelay = Number(refs.firstDelay.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 3000,
          useIcon: false,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 3000,
          useIcon: false,
        });
      });

    currentDelay += step;
  }
}
