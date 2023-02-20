from helpers.getInput import get_input

def get_parse():
  txt = get_input(4)
  return txt.split('\n')

def day_4():
  lines = get_parse()

  ans1 = 0
  ans2 = 0

  for i in range(0, len(lines)):
    [e1, e2] = lines[i].split(',')
    [lo1, hi1] = e1.split('-')
    [lo2, hi2] = e2.split('-')
    lo1, lo2, hi1, hi2 = int(lo1), int(lo2), int(hi1), int(hi2)

    if (lo1 >= lo2 and hi1 <= hi2) or (lo2 >= lo1 and hi2 <= hi1) :
      ans1 += 1

    if (hi1 >= lo2 and hi2 >= lo1):
      ans2 += 1

  print(f'Part 1 answer: {ans1}')
  print(f'Part 2 answer: {ans2}')
