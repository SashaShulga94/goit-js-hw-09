const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.body;

let currentClr = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener('click', () => {
  currentClr = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(currentClr);
  startBtn.disabled = false;
});
