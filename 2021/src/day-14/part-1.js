import { getInput } from '../helpers/index.js';

const solution = async () => {
  let { template, rules } = await getInput('14', input => {
    const [t, r] = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`.split('\n\n');

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

  for(let i = 0; i < 10; i++) {
    console.log(`Current Step: ${i}`);

    let newTemplate = [...template].join('');
    Object.keys(rules).forEach(rule => {
      for(let j = 1; j < template.length; j++) {
        const currentLetters = `${template[j - 1]}${template[j]}`;
        if(rule === currentLetters) {
          newTemplate = newTemplate.replace(currentLetters, `${template[j - 1]}${rules[rule]}${template[j]}`);
        }
      }
    });

    template = newTemplate;

    console.log(template);
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
