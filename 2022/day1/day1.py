from helpers.getInput import get_input

def get_parse():
  txt = get_input(1)
  return txt.split('\n')

def day_1():
  txt = get_parse()

  max = []
  total = 0
  for line in txt:
    if line.strip() == '':
      max.append(total)
      total = 0
    else:
      total += int(line)

  max.sort(reverse=True)

  print(f'Part 1 answer: {max[0]}')
  print(f'Part 2 answer: {max[0] + max[1] + max[2]}')
