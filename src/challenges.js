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
  let repeatedTimes = 0;

  for (let number in array) {
    if (array[number] === bigger) {
      repeatedTimes += 1;
    }
  }

  return repeatedTimes;
}

// Desafio 7
function catAndMouse() {
//   if (mouse - cat1 > mouse - cat2) {
//     return 'cat2';
//   }
//   if (mouse - cat1 < mouse - cat2) {
//     return 'cat1';
//   }

//   return 'os gatos trombam e o rato foge';
}

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
    let result = mod(array[number]);
    answer.push(result);
  }

  return answer;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
