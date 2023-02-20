const solution = async () => {
  const minX = 236, minY = -78, maxX = 262, maxY = -58;

  const findVelocityPoints = (x, y) => {
    const points = [];
    let currX = 0, currY = 0
    while(x > 0 || currY >= minY) {
      points.push([currX, currY]);
      currX += x;
      currY += y;
      if(x !== 0) x--;
      y--;
    }

    return points;
  }

  // 22 is the only x that lands in the space, 77 gives the highest Y
  const points = findVelocityPoints(22, 77);

  let mxY = 0;
  points.forEach(([_, y]) => {
    if(y > mxY) mxY = y;
  });

  return mxY;
};

export default solution;
