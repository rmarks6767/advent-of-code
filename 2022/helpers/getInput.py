from dotenv import load_dotenv
import os
import requests

load_dotenv(os.path.join(os.path.dirname(__file__),'../.env'))

def get_input(day):
  file_path = os.path.join(os.path.dirname(__file__), f'../inputs/input-{str(day)}')

  # Check if input file exists, don't make a request if it does:
  if (os.path.exists(file_path)):
    f = open(file_path, "r")
    return f.read()

  request = requests.get(f'https://adventofcode.com/2022/day/{str(day)}/input', cookies={'session': str(os.environ.get('SESSION')) })
  content = request.text

  # Write the file
  f = open(file_path, "w")
  f.write(request.text)
  f.close()

  return content
