import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

// const inputRef = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
btnStart.addEventListener('click', onStartCountdown);

let userDate = null;
let intervalId = null;

//   function flatpickr(selector, options)
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userDate = selectedDates[0];
    if (userDate < Date.now()) {
      window.alert('Please choose a date in the future');
    }
  },
};

function onStartCountdown() {
  intervalId = setInterval(() => {
    updateDate();
  }, 1000);
}

function updateDate() {
  const deltaTime = userDate - Date.now();

  if (deltaTime < 0) {
    return;
  }
}
//   function flatpickr(selector, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
