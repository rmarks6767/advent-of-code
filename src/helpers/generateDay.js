import fs, { writeFileSync } from 'fs';

const indexFile =
`import part1 from "./part-1.js";
import part2 from "./part-2.js";

export default { part1, part2 };
`;
const partFileBase = 
`import { getInput } from '../helpers/index.js';

const solution = async () => {
  let input = await getInput('<DAY>', input => input.split(',').map(i => parseInt(i)));

};

export default solution;
`;
const importBase = "import day<DAY> from './day-<DAY>/index.js';"
const caseBase = "case '<DAY>': console.log(PART === '1' ? await day<DAY>.part1() : await day<DAY>.part2()); break;"

const generateDay = day => {
  const dayFile = partFileBase.replace('<DAY>', day);

  // Create the directory for the new day
  if(!fs.existsSync(`src/day-${day}`)) fs.mkdirSync(`src/day-${day}`);
  else {
    console.log('This day already exists');
    process.exit(1);
  }

  // Write all the new files to that dir
  fs.writeFileSync(`src/day-${day}/part-1.js`, dayFile);
  fs.writeFileSync(`src/day-${day}/part-2.js`, dayFile);
  fs.writeFileSync(`src/day-${day}/index.js`, indexFile);

  // Add the imports and case to the index file
  fs.writeFileSync(`src/index.js`, fs.readFileSync('src/index.js').toString()
    .replace('// <NEW_DAY_CASE>', `${caseBase.replaceAll('<DAY>', day)}\n\t\t// <NEW_DAY_CASE>`)
    .replace('// <NEW_DAY_IMPORT>', `${importBase.replaceAll('<DAY>', day)}\n// <NEW_DAY_IMPORT>`));

  console.log('All done :)');
};

export default generateDay;
