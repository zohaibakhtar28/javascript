function generateRandomColors() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
const defaultColor = document.body.style.backgroundColor;
let startInterval = '';
const startChangingColors = function () {
  const changebgColor = function () {
    document.body.style.backgroundColor = generateRandomColors();
  };

  startInterval = setInterval(changebgColor, 1000);
};

const stopChangingColor = function () {
  clearInterval(startInterval);
  startInterval = '';
  document.body.style.backgroundColor = defaultColor;
};

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener('click', startChangingColors);
stop.addEventListener('click', stopChangingColor);
