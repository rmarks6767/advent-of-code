from helpers.getInput import get_input

def get_parse():
  txt = get_input(6)
  return txt.strip()

def day_6():
  stream = get_parse()

  ans1 = 0
  ans2 = 0

  s = set()
  for i in range(3, len(stream)):      
    s = set()
    for j in range(0, 4):
      s.add(stream[i - j])

    if len(s) == 4 and ans1 == 0:
      ans1 = i + 1
    
    s = set()
    for j in range(0, 14):
      s.add(stream[i - j])

    if len(s) == 14:
      ans2 = i + 1
      break

  print(f'Part 1 answer: {ans1}')
  print(f'Part 2 answer: {ans2}')
