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
  let answer = [last, first];
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
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 > mouse - cat2) {
    return 'cat2';
  }
  if (mouse - cat1 < mouse - cat2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
