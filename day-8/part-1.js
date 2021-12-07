const fs = require("fs");

const getInput = () => {
  const input = fs.readFileSync('./input', 'utf-8');
  
  return input.split(',').map(c => parseInt(c));
};

let input = getInput();