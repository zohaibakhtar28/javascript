const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let startInterval;
  const startChangingColor = function () {
    const changebgColor = function () {
      document.body.style.backgroundColor = randomColor();
    };
    startInterval = setInterval(changebgColor, 1000);
  };
  const stopChangingColor = function () {
    clearInterval(startInterval);
    startInterval = '';
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  