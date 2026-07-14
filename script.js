let random255 = () => {
  return Math.floor(Math.random() * 256);
};

const rgbColor = () => {
  const colors = [random255(), random255(), random255()];
  return `rgb(${colors[0]},${colors[1]},${colors[2]})`;
};

const genHex = () => {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const boxes = document.querySelectorAll('.box');

const btnRGB = document.querySelector('#rgb-btn');
btnRGB.addEventListener('click', () => {
  let colors = [rgbColor(), rgbColor(), rgbColor(), rgbColor(), rgbColor()];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = `${colors[i]}`;
    boxes[i].style.backgroundColor = colors[i];
  }
});

const btnHEX = document.querySelector('#hex-btn');
btnHEX.addEventListener('click', () => {
  let colors = [genHex(), genHex(), genHex(), genHex(), genHex()];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = `${colors[i]}`;
    boxes[i].style.backgroundColor = colors[i];
  }
});
