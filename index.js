// canvas and context 2d

const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext('2d');

const btn = document.querySelector('#btn');

// setting a widht, height, gap and x, y variables
const width = 60;
const height = 60;
const gap = 20;
let x, y;

// draw on canvas
ctx.fillStyle = '#f8f8f8';
ctx.fillRect(100, 100, 400, 400);

// draw rectangle
ctx.lineWidth = 4;
ctx.beginPath();
ctx.rect(100, 100, 400, 400);
ctx.stroke();


// using for loops

btn.addEventListener('click', function () {
  
  changePattern()
});

function randomPattern() {
  
  if (Math.random() > 0.5) {
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.fillRect(x + 4, y + 4, width - 8, height - 8);
    ctx.rect(x + 8, y + 8, width - 16, height - 16);
    ctx.stroke();
  }
}

function changePattern() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      x = 100 + (width + gap) * i;
      y = 100 + (height + gap) * j;

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

      randomPattern();
    }
  }
}

/* for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 100 + (width + gap) * i;
    y = 100 + (height + gap) * j;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();


    if (i > 0 && i < 4) {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(x + 4, y + 4, width - 8, height - 8);
      ctx.rect(x + 8, y + 8, width - 16, height - 16);
      ctx.stroke();
    } */

/* if (Math.random() > 0.5) {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(x + 4, y + 4, width - 8, height - 8);
      ctx.rect(x + 8, y + 8, width - 16, height - 16);
      ctx.stroke();
    } */
/*  }
} */

/* 
// draw circle
ctx.strokeStyle = 'lime';
ctx.lineWidth = 8;
ctx.beginPath();
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.stroke(); */

const gravity = 9.81;
let velocity = 0;

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

menu.forEach((item) => {
  console.log(item);
});

const reversed = menu.reverse();
console.log(reversed);
