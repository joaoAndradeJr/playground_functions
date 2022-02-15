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
  let answer = array[final] + ', ' + array[0];
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
  repeatedTimes = 0;

  for (let number in array) {
    if (array[number] === bigger) {
      repeatedTimes += 1;
    }
  }

  return repeatedTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
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
