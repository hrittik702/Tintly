const hslCode = [];
const rgbCode = [];
const hexCode = [];

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
};

const boxes = document.querySelectorAll('.box');

// TODO :
// 1. Use hsl instead of rgb and hex
// 2. Interconversion of hex-rgb-hsl
// 3. Use Generic color names as suggested!

// WORKING   on 1

const hslColor = {}; //0 = hue, 1 = sat, 2 = light

const randomHSL = () => {
  let hue = random.hue();
  hslColor.h = hue;
  let saturation = random.hundred();
  hslColor.s = saturation;
  let light = random.hundred();
  hslColor.l = light;
  rgbCode.push(hslToRgb(hue, saturation, light));
  hslCode.push(`hsl(${hue},${saturation}%,${light}%)`);
  return `hsl(${hue},${saturation}%,${light}%)`;
};

const btnHSL = document.querySelector('#hsl-btn');
btnHSL.addEventListener('click', () => {
  let colors = [randomHSL(), randomHSL(), randomHSL(), randomHSL(), randomHSL()];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].children[0].innerHTML = `${hexCode[i]}`;
    boxes[i].style.backgroundColor = colors[i];
  }
});

const hslToRgb = (h, s, l) => {
  h /= 60;
  s /= 100;
  l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h % 2) - 1));
  let m = l - c / 2;
  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 1 && h < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 2 && h < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 3 && h < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 4 && h < 5) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 5 && h < 6) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);
  hexCode.push(rgbToHex(r, g, b));
  return `rgb(${r},${g},${b})`;
};

const rgbToHex = (r, g, b) => {
  let hex = '0123456789ABCDEF';
  color = '#';
  color += hex[Math.floor(r / 16)];
  color += hex[r % 16];
  color += hex[Math.floor(g / 16)];
  color += hex[g % 16];
  color += hex[Math.floor(b / 16)];
  color += hex[b % 16];
  return color;
};
