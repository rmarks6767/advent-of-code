const solution = async () => {
  const minX = 236, minY = -78, maxX = 262, maxY = -58;

  const findVelocityPoints = (x, y) => {
    const points = [];
    let currX = 0, currY = 0
    while(x !== 0 || currY >= minY) {
      points.push([currX, currY]);
      currX += x;
      currY += y;

      if(x > 0 && x !== 0) x--;
      if(x < 0 && x !== 0) x++;

      y--;
    }

    return points;
  }

  const checkPoint = (x, y) => x <= maxX && x >= minX && y <= maxY && y >= minY;

  let maxVelocities = 0;
  for(let i = -500; i < 500; i++) {
    for(let j = 0; j < 500; j++) {
      const points = findVelocityPoints(j, i);

      let isValid = false;
      points.forEach(([x, y]) => {
        if(checkPoint(x, y)) isValid = true;
      })

      if(isValid) maxVelocities++;
    }
  }

  return maxVelocities;
};

export default solution;
