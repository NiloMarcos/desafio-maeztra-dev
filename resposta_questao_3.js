function sequenceValid(str) {
  const battery = [];

  const pairs = {
      '[': ']',
      '{': '}',
      '(': ')'
  };

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === '[' || char === '{' || char === '(') {
          battery.push(char);
      } else {
          const lastOpen = battery.pop();
          if (char !== pairs[lastOpen]) {
              return false;
          }
      }
  }

  return battery.length === 0;
}

console.log(sequenceValid("{[(()]}"));

console.log(sequenceValid("{[()(){}[]]{}}"));
