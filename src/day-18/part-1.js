import { getInput } from '../helpers/index.js';

const solution = async () => {
  // const input = await getInput('18', input => input.split('\n').map(i => JSON.parse(i)));

  const input = [
    [[[[4,3],4],4],[7,[[8,4],9]]],
    [1,1],
    // [[2,[[0,8],[3,4]]],[[[6,7],1],[7,[1,6]]]],
    // [[[[2,4],7],[6,[0,5]]],[[[6,8],[2,8]],[[2,1],[4,5]]]],
    // [7,[5,[[3,8],[1,4]]]],
    // [[2,[2,2]],[8,[8,1]]],
    // [2,9],
    // [1,[[[9,3],9],[[9,0],[0,7]]]],
    // [[[5,[7,4]],7],1],
    // [[[[4,2],2],6],[8,7]],
  ]

  const isPair = p => 
    typeof p === 'object' && typeof p[0] === 'number' && typeof p[1] === 'number'

  let hasExploded;
  const explode = (left, right, parent, depth) => {
    console.log('Left: ' + JSON.stringify(left) + ' Depth: ' + depth);
    console.log('Right: ' + JSON.stringify(right) + ' Depth: ' + depth);
    console.log();

    if(depth === 1) hasExploded = false;

    if(typeof left === 'number' && typeof right === 'number') return { result: parent };
    if(hasExploded) return { result: parent };

    if(depth >= 4) {
      if(isPair(left) && typeof right === 'number') {
        hasExploded = true;
        return {
          result: [0, left[1] + right],
          left: left[0],
          depth,
        }
      }
      if(isPair(right) && typeof left === 'number') {
        hasExploded = true;
        return {
          result: [right[0] + left, 0],
          right: right[1],
          depth,
        }
      }
    }

    if(!isPair(parent) && typeof parent === 'object') {
      let { 
        result: lr, 
        left: llv,
        right: lrv,
      } = explode(left[0], left[1], left, depth + 1)
      let { 
        result: rr,
        left: rlv,
        right: rrv, 
      } = explode(right[0], right[1], right, depth + 1)

      console.log('parent: ' + JSON.stringify(parent))
      console.log('rr: ' + JSON.stringify(rr))
      console.log('lr: ' + JSON.stringify(lr))
      console.log(`lrv: ${lrv} llv: ${llv}`);
      console.log(`rrv: ${rrv} rlv: ${rlv}`);



      return { result: [lr, rr], left:  llv || lrv, right: rrv || rlv };
    }

    return { result: parent }
  }

  const split = (left, right) => {
    if(typeof left === 'number') {
      if(left >= 10) {
        const half = Math.floor(left / 2);
        return [[half, half + (left % 2)], right];
      } 
    }
    if(typeof right === 'number') {
      if(right >= 10) {
        const half = Math.floor(right / 2);
        return [left, [half, half + (right % 2)]];
      } 
    }

    if(typeof left === 'number' && typeof right === 'number') return [left, right];
    else if(typeof left === 'number') return [left, split(right[0], right[1])]
    else if(typeof right === 'number') return [split(left[0], left[1]), left]

    return [
      split(left[0], left[1]),
      split(right[0], right[1]),
    ]
  }

  const reduce = toReduce => {
    let prevRes, result = toReduce;
    while (JSON.stringify(prevRes) !== JSON.stringify(result)) {
      prevRes = result;
      
      // console.log(JSON.stringify(result));

      let prevExplode;
      while(JSON.stringify(result) !== JSON.stringify(prevExplode)) {
        prevExplode = result;
        result = explode(result[0], result[1], result, 1).result;
        console.log('Exploding result: ' + JSON.stringify(result));
      }

      console.log('Splitting');
      result = split(result[0], result[1]);
      console.log('Splitting result: ' + JSON.stringify(result));
    }

    console.log('Finished Reduction');
    return result;
  }

  const add = (p1, p2) => [p1, p2];

  let r = add([[[[4,3],4],4],[7,[[8,4],9]]], [1, 1]);
  console.log('after addition: ' + JSON.stringify(r))
  r = explode(r[0], r[1], r, 1).result;
  console.log('after explode: ' + JSON.stringify(r))
  r = explode(r[0], r[1], r, 1).result;
  console.log('after explode: ' + JSON.stringify(r))
  r = split(r[0], r[1]);
  console.log('after split: ' + JSON.stringify(r))
  r = split(r[0], r[1]);
  console.log('after split: ' + JSON.stringify(r))
  r = explode(r[0], r[1], r, 1).result;
  console.log('after explode: ' + JSON.stringify(r))
  r = split(r[0], r[1]);

  const calculateMagnitude = num => {
    if(typeof num === 'number') return num;
    return 3 * calculateMagnitude(num[0]) + 2 * calculateMagnitude(num[1]);
  }

  // let result = input[0];
  // for(let i = 1; i < input.length; i++) {
  //   result = add(result, input[i]);
  //   result = reduce(result);
  // }
  

  return calculateMagnitude(result);
};

export default solution;


// Notes:
/**
 * To reduce a snailfish number, you must repeatedly do the first action in this list that applies to the snailfish number:
 * If any pair is nested inside four pairs, the leftmost such pair explodes.
 * If any regular number is 10 or greater, the leftmost such regular number splits.
 */

//  [[[[[4,3],4],4],[7,[[8,4],9]]],[1,1]]
//  [[[[0,7],4],[7,[[8,4],9]]],[1,1]]	
//  [[[[0,7],4],[15,[0,13]]],[1,1]]

[
  [
    [
      [[4,3], 4],
      4
    ],
    [
      7,
      [[8,4], 9]
    ]
  ],
  [1,1]
]