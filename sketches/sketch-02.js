const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    // creating new sketch
    // background hotpink
    context.fillStyle = '#f8f8f8';
    context.fillRect(0, 0, width, height);

    // draw a rectangle

    context.beginPath();
    context.lineWidth = 40;
    context.strokeStyle = '#000';
    context.rect(512 + 256 -64, 512 + 256 -64, 1024, 1024);
    context.stroke();
     // draw on infront of the above one with fill
    
    context.beginPath();
    context.fillStyle = '#fafafa';
    context.fillRect(512, 512, 1024, 1024);
    context.stroke();

    context.beginPath();
    context.lineWidth = 40;
    context.strokeStyle = '#282828';
    context.rect(1024 - 256, 1024 - 256, 512, 512);
    context.stroke();

    for (let i = 0; i < 5; i++) {

      let x = (128 + 256) * i;
      let y = (128 + 256) * i;
      context.beginPath();
      context.lineWidth = 5;
      context.strokeStyle = '#282828';
      context.arc(x + 256, y + 256, 256, 0, Math.PI * 2);
      context.stroke(); 
      
      for (let j = 0; j < 5; j++) {
        let x = (128 + 128) * i;
        let y = (128 + 128) * j;
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = '#282828';
        context.arc(x + 1024, y + 1024, 256, 0, Math.PI * 2);
        context.stroke();
      }

     
    }

    // draw a white circle
    context.beginPath();
    context.strokeStyle = '#282828'
    context.lineWidth = 80
    context.arc(1024 + 512, 1024 + 512, 512 + 256, 0, Math.PI * 2);
    /* context.fillStyle = '#fafafa';
    context.fill(); */
    context.stroke();
  };
};

canvasSketch(sketch, settings);
