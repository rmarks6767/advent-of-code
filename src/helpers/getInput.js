import axios from 'axios';

const getInput = async (day, processor) => {
  const { data } = await axios.get(`https://adventofcode.com/2021/day/${day}/input`, {
    "headers": {
      Cookie: `session=${process.env.SESSION}`
    },
  })

  return processor(data.trim());
};

export default getInput;
