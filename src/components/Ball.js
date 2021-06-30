class Ball {
  constructor() {
    const draw = (ctx) => {
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(50, 100, 20, 0, 2 * Math.PI);
      ctx.fill();
    };
  }
}
