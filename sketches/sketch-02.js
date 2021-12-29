const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
};

const degreesToRadius = (degrees) => (degrees / 180) * Math.PI;

const randomRange = (min, max) => Math.random() * (max - min) + min;

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // draw here

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.003;
    const h = height * 0.1;

    let x, y;

    const num = 12;
    const radius = width * 0.3;

    context.save();
    context.beginPath();

    // Create a linear gradient
    // The start gradient point is at x=cx, y=cy + 30
    // The end gradient point is at x=cx * 0.5, y=cy * 0.75
    var gradient = context.createLinearGradient(cx, cy + 25, cx, cy * 0.75);

    // Add three color stops
    gradient.addColorStop(0, 'hotpink');
    gradient.addColorStop(0.5, 'orange');
    gradient.addColorStop(1, 'tomato');

    context.fillStyle = gradient;
    context.arc(cx, cy, 100, 0, Math.PI * 2);
    context.fill();
    context.restore();

    for (let i = 0; i < num; i++) {
      const slice = degreesToRadius(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(randomRange(1, 5), 2);
      context.fillStyle = gradient;
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
