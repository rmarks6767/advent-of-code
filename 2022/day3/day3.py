from helpers.getInput import get_input

def get_parse():
  txt = get_input(3)
  return txt.split('\n')

def day_3():
  lines = get_parse()

  ans1 = 0
  ans2 = 0

  for line in lines:
    f, b = line[:len(line)//2], line[len(line)//2:]

    rucksack = {}
    for l in f:
      rucksack[l] = 1
    
    for l in b:
      if rucksack.keys().__contains__(l):
        ans1 += (ord(l) - 96) if l.islower() else  (ord(l) - 65 + 27)
        break

  for i in range(0, len(lines) - 1, 3):
    rucksack = {}
    for l in lines[i]:
      if not rucksack.get(l):
        rucksack[l] = 1

    for l in lines[i + 1]:
      if rucksack.get(l) and rucksack.get(l) == 1:
        rucksack[l] += 1

    for l in lines[i + 2]:
      if rucksack.get(l) and rucksack.get(l) == 2:
        rucksack[l] += 1

    print(rucksack)

    for key, item in rucksack.items():
      if item == 3:
        ans2 += (ord(key) - 96) if key.islower() else  (ord(key) - 65 + 27)
        break


  print(f'Part 1 answer: {ans1}')
  print(f'Part 2 answer: {ans2}')
