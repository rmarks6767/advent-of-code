// THIS FILE IS MANAGED USING THE generateDay FUNCTION

import dotenv from 'dotenv'
import day1 from "./day-1/index.js";
import day2 from "./day-2/index.js";
import day3 from "./day-3/index.js";
import day4 from "./day-4/index.js";
import day5 from "./day-5/index.js";
import day6 from "./day-6/index.js";
import day7 from "./day-7/index.js";
import day8 from "./day-8/index.js";
import day9 from "./day-9/index.js";
import day10 from "./day-10/index.js";
import day11 from './day-11/index.js';
import day12 from './day-12/index.js';
import day13 from './day-13/index.js';
import day14 from './day-14/index.js';
// <NEW_DAY_IMPORT>
import generateDay from './helpers/generateDay.js';

dotenv.config();

const main = async () => {
  const [_, __, DAY, PART] = process.argv;

  switch(DAY) {
    case '1': console.log(PART === '1' ? await day1.part1() : await day1.part2()); break;
    case '2': console.log(PART === '1' ? await day2.part1() : await day2.part2()); break;
    case '3': console.log(PART === '1' ? await day3.part1() : await day3.part2()); break;
    case '4': console.log(PART === '1' ? await day4.part1() : await day4.part2()); break;
    case '5': console.log(PART === '1' ? await day5.part1() : await day5.part2()); break;
    case '6': console.log(PART === '1' ? await day6.part1() : await day6.part2()); break;
    case '7': console.log(PART === '1' ? await day7.part1() : await day7.part2()); break;
    case '8': console.log(PART === '1' ? await day8.part1() : await day8.part2()); break;
    case '9': console.log(PART === '1' ? await day9.part1() : await day9.part2()); break;
    case '10': console.log(PART === '1' ? await day10.part1() : await day10.part2()); break;
		case '11': console.log(PART === '1' ? await day11.part1() : await day11.part2()); break;
		case '12': console.log(PART === '1' ? await day12.part1() : await day12.part2()); break;
		case '13': console.log(PART === '1' ? await day13.part1() : await day13.part2()); break;
		case '14': console.log(PART === '1' ? await day14.part1() : await day14.part2()); break;
		// <NEW_DAY_CASE>
    case 'generateDay': generateDay(PART); break;
  }
}

main();
