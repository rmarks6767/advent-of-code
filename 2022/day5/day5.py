from helpers.getInput import get_input
import re

def get_parse():
  txt = get_input(5)
  return txt.split('\n')

def day_5():
  crates1 = [
    ['P', 'V', 'Z', 'W', 'D', 'T'],
    ['D', 'J', 'F', 'V', 'W', 'S', 'L'],
    ['H', 'B', 'T', 'V', 'S', 'L', 'M', 'Z'],
    ['J', 'S', 'R'],
    ['W', 'L', 'M', 'F', 'G', 'B', 'Z', 'C'],
    ['B', 'G', 'R', 'Z', 'H', 'V', 'W', 'Q'],
    ['N', 'D', 'B', 'C', 'P', 'J', 'V'],
    ['Q', 'B', 'T', 'P'],
    ['C', 'R', 'Z', 'G', 'H']
  ]

  crates2 = [
    ['P', 'V', 'Z', 'W', 'D', 'T'],
    ['D', 'J', 'F', 'V', 'W', 'S', 'L'],
    ['H', 'B', 'T', 'V', 'S', 'L', 'M', 'Z'],
    ['J', 'S', 'R'],
    ['W', 'L', 'M', 'F', 'G', 'B', 'Z', 'C'],
    ['B', 'G', 'R', 'Z', 'H', 'V', 'W', 'Q'],
    ['N', 'D', 'B', 'C', 'P', 'J', 'V'],
    ['Q', 'B', 'T', 'P'],
    ['C', 'R', 'Z', 'G', 'H']
  ]

  lines = get_parse()

  ans1 = ''
  ans2 = ''
  
  for line in lines:
    [num, fr, to] = re.split(r' from | to ', line.removeprefix('move '))
    num, fr, to = int(num), int(fr), int(to)

    for i in range(0, num):
      crates1[to - 1].insert(0, crates1[fr - 1].pop(0))
      crates2[to - 1].insert(i, crates2[fr - 1].pop(0))

  for crate1, crate2 in zip(crates1, crates2):
    ans1 += crate1.pop(0)
    ans2 += crate2.pop(0)

  print(f'Part 1 answer: {ans1}')
  print(f'Part 2 answer: {ans2}')
