import sys
from day1.day1 import day_1
from day2.day2 import day_2
from day3.day3 import day_3
from day4.day4 import day_4
from day5.day5 import day_5
from day6.day6 import day_6
from day7.day7 import day_7

if __name__ == '__main__':
  day = sys.argv[1]

  if (day == '1'):
    day_1()
  if (day == '2'):
    day_2()
  if (day == '3'):
    day_3()
  if (day == '4'):
    day_4()
  if (day == '5'):
    day_5()
  if (day == '6'):
    day_6()
  if (day == '7'):
    day_7()
