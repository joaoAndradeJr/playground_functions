// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(array) {
  let final = array.length - 1;
  let last = array[final];
  let first = array[0];
  let answer = `${last}, ${first}`;
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let sortedArray = array.sort();
  let bigger = sortedArray[sortedArray.length - 1];

  if (sortedArray[sortedArray.length - 1] < 0) {
    bigger = sortedArray[0];
  }
  let repeatedTimes = 0;

  for (let number in array) {
    if (array[number] === bigger) {
      repeatedTimes += 1;
    }
  }

  return repeatedTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (mouse > cat1 && mouse > cat2) {
    let aux = mouse - cat1;
    let aux2 = mouse - cat2;
    if (aux > aux2) {
      result = 'cat1';
    } else if (aux < aux2) {
      result = 'cat1';
    } else {
      result = 'os gatos trombam e o rato foge';
    }
  }
  if (mouse < cat1 && mouse < cat2) {
    let aux = cat1 - mouse;
    let aux2 = cat2 - mouse;
    if (aux > aux2) {
      result = 'cat1';
    } else if (aux < aux2) {
      result = 'cat1';
    } else {
      result = 'os gatos trombam e o rato foge';
    }
  }
  if (mouse > cat1 && mouse < cat2) {
    let aux = mouse - cat1;
    let aux2 = cat2 - mouse;
    if (aux > aux2) {
      result = 'cat1';
    } else if (aux < aux2) {
      result = 'cat1';
    } else {
      result = 'os gatos trombam e o rato foge';
    }
  }
  return result;
}

console.log(catAndMouse(0, 3, 2));
// Desafio 8
function mod(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'fizzBuzz';
  }
  if (value % 5 === 0) {
    return 'buzz';
  }
  if (value % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let answer = [];

  for (let i = 0; i < array.length; i += 1) {
    let result = mod(array[i]);
    answer.push(result);
  }

  return answer;
}

// Desafio 9
function changeCharEncode(char) {
  switch (char) {
  case 'a':
    return 1;
  case 'e':
    return 2;
  case 'i':
    return 3;
  case 'o':
    return 4;
  case 'u':
    return 5;
  default:
    return char;
  }
}

function changeCharDecode(char) {
  switch (char) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return char;
  }
}

function encode(str) {
  let sentence = str.split('');
  let encoded = [];

  for (let i = 0; i < sentence.length; i += 1) {
    encoded.push(changeCharEncode(sentence[i]));
  }

  return encoded.join('');
}

function decode(str) {
  let sentence = str.split('');
  let decoded = [];

  for (let i = 0; i < sentence.length; i += 1) {
    decoded.push(changeCharDecode(sentence[i]));
  }

  return decoded.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
