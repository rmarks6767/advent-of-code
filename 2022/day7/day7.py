from helpers.getInput import get_input

def get_parse():
  txt = get_input(7)
  return txt.split('\n')

def day_7():
  lines = get_parse()

  ans1 = 0
  ans2 = 0

  print(f'Part 1 answer: {ans1}')
  print(f'Part 2 answer: {ans2}')
