import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);

let intervalId = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = Date.now();
    const timeToDeadline = convertMs(selectedDates[0] - currentDate);

    if (selectedDates[0] < currentDate) {
      Notify.info('Please choose a date in the future');
      return;
    } else {
      refs.startBtn.disabled = false;
      initializeTimer(timeToDeadline);
    }
  },
};

const flpick = flatpickr('#datetime-picker', options);

function onStartBtnClick() {
  updateTimer();
  timerIntervalId = setInterval(updateTimer, 1000);

  refs.startBtn.disabled = true;
}

function initializeTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = startFromZero(days);
  refs.hours.textContent = startFromZero(hours);
  refs.minutes.textContent = startFromZero(minutes);
  refs.seconds.textContent = startFromZero(seconds);
}

function updateTimer() {
  const timeToDeeadline = flpick.selectedDates[0] - Date.now();
  const { days, hours, minutes, seconds } = convertMs(timeToDeeadline);
  refs.days.textContent = startFromZero(days);
  refs.hours.textContent = startFromZero(hours);
  refs.minutes.textContent = startFromZero(minutes);
  refs.seconds.textContent = startFromZero(seconds);

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    clearInterval(timerIntervalId);

    return;
  }
}

function startFromZero(value) {
  return value.toString().padStart(2, '0');
}

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
