import { getInput } from '../helpers/index.js';

const solution = async () => {
  const pathData = {};

  await getInput('12', input => {
    const lines = input.trim().split('\n');

    return lines.forEach(line => {
      const [p1, p2] = line.trim().split('-');

      if(pathData[p1]) pathData[p1].push(p2);
      else pathData[p1] = [p2];

      if(pathData[p2]) pathData[p2].push(p1);
      else pathData[p2] = [p1];
    });
  });

  let paths = 0;
  const queue = [['start']];

  while(queue.length !== 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if(current === 'end') {
      paths++;
    }

    pathData[current].forEach(point => {
      if(point.toUpperCase() === point) queue.push([...path, point]);
      else if(!path.includes(point)) queue.push([...path, point]);
    });
  };

  return paths;
};

export default solution;
