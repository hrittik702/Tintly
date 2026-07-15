const random = {
  rgb: () => {
    return Math.floor(Math.random() * 256);
  },
  hue: () => {
    return Math.floor(Math.random() * 361);
  },
  hundred: () => {
    return Math.floor(Math.random() * 101);
  },
  hex: () => {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  },
};

const rgbColor = () => {
  return `rgb(${random.rgb()},${random.rgb()},${random.rgb()})`;
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
  let colors = [random.hex(), random.hex(), random.hex(), random.hex(), random.hex()];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = `${colors[i]}`;
    boxes[i].style.backgroundColor = colors[i];
  }
});

// TODO :
// 1. Use hsl instead of rgb and hex
// 2. Interconversion of hex-rgb-hsl
// 3. Use Generic color names as suggested!

// WORKING  on 1

const randomHSL = () => {
  let hue = random.hue();
  let saturation = random.hundred();
  let light = random.hundred();
  return `hsl(${hue},${saturation}%,${light}%)`;
};

const btnHSL = document.querySelector('#hsl-btn');
btnHSL.addEventListener('click', () => {
  let colors = [randomHSL(), randomHSL(), randomHSL(), randomHSL(), randomHSL()];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = `${colors[i]}`;
    boxes[i].style.backgroundColor = colors[i];
  }
});
