import { getInput } from '../helpers/index.js';

const solution = async () => {
  let input = await getInput('11', input => input.split('\n').map(line => line.split('').map(i => ({
    s: parseInt(i.trim()),
    flashed: false,
  }))));

  const pointExists = (x, y, squids) => {
    if(x >= 0 && y >= 0 && x < squids.length && y < squids[x].length) return true;
    return false;
  }

  const flashAdj = (x, y, squids, strength) => {
    if(pointExists(x, y, squids)) {
      if(squids[x][y].s + strength > 9 && !squids[x][y].flashed) {
        squids[x][y].flashed = true;

        let flashes = 1;
        flashes += flashAdj(x + 1, y, squids, 1);
        flashes += flashAdj(x - 1, y, squids, 1);
        flashes += flashAdj(x, y + 1, squids, 1);
        flashes += flashAdj(x, y - 1, squids, 1);
        flashes += flashAdj(x + 1, y + 1, squids, 1);
        flashes += flashAdj(x + 1, y - 1, squids, 1);
        flashes += flashAdj(x - 1, y + 1, squids, 1);
        flashes += flashAdj(x - 1, y - 1, squids, 1);

        return flashes;
      }

      squids[x][y].s += strength;
    }
    return 0;
  }

  let totalFlashes = 0;
  for(let i = 0; i < 100; i++) {
    // Increase all squids
    input = input.map(l => l.map(s => ({ ...s, s: s.s + 1 })));

    // Flash time
    for(let i = 0; i < input.length; i++) {
      for(let j = 0; j < input[i].length; j++) {
        totalFlashes += flashAdj(i, j, input, 0);
      }
    }

    // Set all squids that have flashed back to 0
    input = input.map(l => l.map(s => s.flashed ? { s: 0, flashed: false } : { ...s, flashed: false }));
  }

  return totalFlashes;
};

export default solution;
