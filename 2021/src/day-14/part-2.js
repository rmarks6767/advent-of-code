import { getInput } from '../helpers/index.js';

const solution = async () => {
  let { template, rules } = await getInput('14', input => {
    const [t, r] = input.split('\n\n');

    const rules = {};
    r.trim().split('\n').forEach(rule => {
      const [key, replacement] = rule.split(' -> ');
      rules[key] = replacement;
    });

    return {
      template: t.trim(),
      rules, 
    }
  });

  console.log(rules);

  for(let i = 0; i < 40; i++) {
    console.log(`Current Step: ${i}`);

    let newTemplate = [...template].join('');
    const currentRules = [];
    Object.keys(rules).forEach(rule => {
      for(let j = 1; j < template.length; j++) {
        const currentLetters = `${template[j - 1]}${template[j]}`;
        if(rule === currentLetters) {
          const pattern = `?!((${currentLetters.join(')|(')}))`
          // newTemplate = newTemplate.replaceAll(/?!, `${template[j - 1]}${rules[rule]}${template[j]}`);
        }
      }
    });

    template = newTemplate;
  }

  template = [...template];

  const letters = {};
  template.forEach(letter => letters[letter] ? letters[letter]++ : letters[letter] = 1);

  let max = 0, min = 10000000;
  Object.keys(letters).forEach(key => {
    if(letters[key] > max) max = letters[key];
    if(letters[key] < min) min = letters[key];
  });

  return max - min;
};

export default solution;
