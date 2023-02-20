import { getInput } from '../helpers/index.js';

const solution = async () => {
  let input = await getInput('15', input => input.trim().split('\n').map(i => i.trim().split('').map(j => parseInt(j))));
  
  let map = [];
  input.forEach((row, i) => {
    map.push([...row]);
    for(let j = 1; j < 5; j++) {
      row.forEach(s => {
        map[i].push(((s + j) % 10) + (s + j > 9 ? 1 : 0));
      })
    }
  });

  const newRows = []
  for(let j = 1; j < 5; j++) {
    map.forEach(row => {
      newRows.push([...row].map(s => ((s + j) % 10) + (s + j > 9 ? 1 : 0)))
    });
  }

  input = [...map, ...newRows].map((row, y) => {
    return row.map((risk, x) => ({
      x,
      y,
      risk,
      r: Number.MAX_VALUE,
      prev: null,
      visited: false,
    }));
  });
  
  const calculatePath = endNode => {
    let totalCost = 0;
    let current = endNode;
    while(current.prev) {
      totalCost += current.risk;
      current = input[current.prev[0]][current.prev[1]]
    }

    return totalCost;
  }

  const queue = [input[0][0]];
  queue[0].r = 0;
  const end = input[input.length - 1][input[0].length - 1];

  while(queue.length !== 0) {
    const curr = queue.sort((c1, c2) => c2.r - c1.r).pop();
    curr.visited = true;
    
    if(curr.x === end.x && curr.y === end.y) return calculatePath(curr);
    
    const adjs = [];
    if(curr.x - 1 >= 0) adjs.push(input[curr.y][curr.x - 1]);
    if(curr.x + 1 < input[0].length) adjs.push(input[curr.y][curr.x + 1]);
    if(curr.y - 1 >= 0) adjs.push(input[curr.y - 1][curr.x]);
    if(curr.y + 1 < input.length) adjs.push(input[curr.y + 1][curr.x]);

    adjs.forEach(adj => {
      const { risk, r, visited } = adj;

      if(!visited) {
        const newRisk = risk + curr.r;

        if(newRisk < r) {
          adj.r = newRisk;
          adj.prev = [curr.y, curr.x];
          queue.push(adj);
        }
      }
    });
  }
};

export default solution;
