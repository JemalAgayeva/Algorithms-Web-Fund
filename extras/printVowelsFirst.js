// given a string, print the vowels first and then the rest

function printVowelsFirst(str) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsStr = '';
  let consonantsStr = '';

  for (let i = 0; i < str.length; ++i) {
    let char = str[i];

    if (vowels.includes(char)) {
      vowelsStr += char;
    }
    else {
      consonantsStr += char;
    }
  }
  console.log(vowelsStr + consonantsStr);
}