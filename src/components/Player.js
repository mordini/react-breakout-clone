class Player {
  constructor(xLoc, yLoc, power, alive) {
    this.xLocation = xLoc;
    this.yLocation = yLoc;
    this.power = power;
    this.alive = alive;
  }
  drawPlayer = (x, y, height) => {
    // First Drawing
    // context.fillStyle = '#000000';
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    // CALL DRAW
    // fillRect(x, y, height);
  };
}

export default Player;
