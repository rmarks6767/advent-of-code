const fs = require("fs");

const getInput = () => {
  const input = fs.readFileSync('./input', 'utf-8');
  const fish = input.split(',');

  return fish.map(f => parseInt(f));  
};

const input = getInput();

for(let i = 0; i < 256; i++) { 
  input.forEach((_, i) => input[i]--);

  let newFish = 0;
  for(let j = 0; j < input.length; j++) {
    if(input[j] === -1) {
      input[j] = 6;
      newFish++;
    }
  }

  for(let j = 0; j < newFish; j++) input.push(8);
}

console.log(input.length);