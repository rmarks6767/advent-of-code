from helpers.getInput import get_input

def get_parse():
  txt = get_input(2)
  return txt.split('\n')

outcomes = {
  "A": { 
    "type": "ROCK", 
    "beats": "SCISSORS", 
    "beatenBy": "PAPER", 
    "score": 1 
  },
  "X": { 
    "method": "LOSE", 
    "type": "ROCK", 
    "beats": "SCISSORS", 
    "beatenBy": "PAPER", 
    "score": 1 
  },
  "B": { 
    "type": "PAPER", 
    "beats": "ROCK", 
    "beatenBy": "SCISSORS", 
    "score": 2 
  },
  "Y": { 
    "method": "DRAW", 
    "type": "PAPER", 
    "beats": "ROCK", 
    "beatenBy": "SCISSORS", 
    "score": 2 
  },
  "C": { 
    "type": "SCISSORS", 
    "beats": "PAPER", 
    "beatenBy": "ROCK", 
    "score": 3 
  },
  "Z": { 
    "method": "WIN", 
    "type": "SCISSORS", 
    "beats": "PAPER", 
    "beatenBy": "ROCK", 
    "score": 3 
  },
}

scores = {
  "ROCK": 1,
  "PAPER": 2,
  "SCISSORS": 3
}

def day_2():
  plays = get_parse()

  ans1 = 0
  ans2 = 0

  for play in plays:
    if play == '':
      continue

    [p1, p2] = play.split(' ')

    o1 = outcomes.get(p1)
    o2 = outcomes.get(p2)
    
    ans1 += o2.get('score')

    if o2.get('method') == 'LOSE':
      ans2 += scores.get(o1.get('beats'))
    if o2.get('method') == 'DRAW':
      ans2 += scores.get(o1.get('type')) + 3
    if o2.get('method') == 'WIN':
      ans2 += scores.get(o1.get('beatenBy')) + 6

    if (o1.get('type') == o2.get('type')):
      ans1 += 3
    else:
      if o2.get('beats') == o1.get('type'):
        ans1 += 6

  print(f'Part 1 answer: {ans1}')
  print(f'Part 2 answer: {ans2}')
