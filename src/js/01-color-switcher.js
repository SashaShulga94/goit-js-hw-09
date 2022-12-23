const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.body;

let currentClr = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener('click', () => {
  currentClr = setInterval(() => {
    const color = getRandomHexColor();
    bodyColor.style.backgroundColor = color;
  }, 1000);
});

// startBtn.addEventListener('click', startChangeClr);
// stopBtn.addEventListener('click', stopChangeClr);

// const colorField = function startChangeClr(evt) {
//   const color = getRandomHexColor();
//   bodyColor.style.backgroundColor = color;
//   console.dir(evt.currentTarget);
// };

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
