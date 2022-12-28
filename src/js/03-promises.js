import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', clickFormSubmit);
function clickFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.target;
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let index = 1; index < amountValue; index += 1) {
    const delayStep = delayValue + stepValue * (index + 1);
    createPromise(index, delayStep)
      .then(message =>
        Notify.success(`✅ Fulfilled promise ${index} in ${delayStep}ms`)
      )
      .catch(error =>
        Notify.failure(`❌ Rejected promise ${index} in ${delayStep}ms`)
      );
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
