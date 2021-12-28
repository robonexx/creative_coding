// canvas and context 2d

const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext('2d');

// draw on canvas
ctx.fillStyle = 'aqua';
ctx.fillRect(150, 150, 300, 300);
// draw rectangle
ctx.lineWidth = 4;
ctx.beginPath();
ctx.rect(100, 100, 400, 400);
ctx.stroke();

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    let width = 60;
    let height = 60;
    let gap = 20;
    let x = 100 + (width + gap) * i;
    let y = 100 + (height + gap) * j;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();

    // conditionals - filling rectangels inside first line and last line

    /* if (i > 0 && i < 4) {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(x + 4, y + 4, width - 8, height - 8);
      ctx.rect(x + 8, y + 8, width - 16, height - 16);
      ctx.stroke();
    } */

    if (Math.random() > 0.5) {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(x + 4, y + 4, width - 8, height - 8);
      ctx.rect(x + 8, y + 8, width - 16, height - 16);
      ctx.stroke();
    }
  }
}

// draw circle
ctx.strokeStyle = 'lime';
ctx.lineWidth = 8;
ctx.beginPath();
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.stroke();

// arrays are the same as lists

let years = [];
let menu = ['starter', 'main', 'desserter', 'drinks'];

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (let i = 0; i < 10; i++) {
  years.push(1975 + i);
}
console.log(years);
