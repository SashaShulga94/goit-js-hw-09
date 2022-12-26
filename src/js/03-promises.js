import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name = "delay"]'),
  step: document.querySelector('input[name = "step"]'),
  amount: document.querySelector('input[name = "amount"]'),
};
refs.form.addEventListener('submit', clickFormSubmit);
function clickFormSubmit(e) {
  e.preventDefault();
  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let index = 1; index < amount; index += 1) {
    const delayStep = delay + step * (index + 1);
    createPromise(index, delayStep)
      .then(message => Notify.success(message))
      .catch(error => Notify.failure(error));
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        fulfill({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
