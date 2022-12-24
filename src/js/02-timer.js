import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

flatpickr(selector, options);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
// if (selectedDates !== ) {
//   window.alert('Please choose a date in the future');
// }
