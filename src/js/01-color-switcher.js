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
  }, 1500);
});

stopBtn.addEventListener('click', () => {
  clearInterval(currentClr);
});
