import sys
from day1.day1 import day_1
from day2.day2 import day_2

if __name__ == '__main__':
  day = sys.argv[1]

  if (day == '1'):
    day_1()
  if (day == '2'):
    day_2()
