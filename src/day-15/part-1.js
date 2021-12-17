import { getInput } from '../helpers/index.js';

const solution = async () => {
  const input = await getInput('15', input => input.trim().split('\n').map(i => i.trim().split('').map(j => parseInt(j))));
  const queue = [{ 
    x: 0, 
    y: 0, 
    risk: input[0][0],
    prev: null,
  }];
  const end = [{ 
    x: input.length[0] - 1, 
    y: input.length - 1, 
    risk: input[input.length - 1][input.length[0] - 1],
    prev: null,
  }];

  while(queue.length !== 0) {
    const curr = queue.sort((c1, c2) => c1.risk - c2.risk).pop();
    if(curr.x === end.x && curr.y === end.y) return curr.risk;
    
    const adjs = [];
    if(curr.x - 1 >= 0) adjs.push({ x: curr.x - 1, y: curr.y, risk: Number.MAX_VALUE, prev: null, visited: false });
    if(curr.x + 1 < input[0].length) adjs.push({ x: curr.x + 1, y: curr.y, risk: Number.MAX_VALUE, prev: null });
    if(curr.y - 1 >= 0) adjs.push({ x: curr.x, y: curr.y - 1, risk: Number.MAX_VALUE, prev: null });
    if(curr.y + 1 < input.length) adjs.push({ x: curr.x, y: curr.y + 1, risk: Number.MAX_VALUE, prev: null });

    adjs.forEach(adj => {
      const { x, y, risk } = adj;

      const newRisk = curr.risk + input[y][x];
      if(newRisk < risk) {
        adj.risk = newRisk;
        adj.prev = [curr.y, curr.x];
        queue.push(adj);
      }
    });
  }
};

export default solution;
