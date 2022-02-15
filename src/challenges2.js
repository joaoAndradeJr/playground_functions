// Desafio 10
function techList(array, person) {
  let newList = [];
  let sortedArray = array.sort();

  for (let i = 0; i < sortedArray.length; i += 1) {
    newList.push({ tech: sortedArray[i], name: person });
  }

  return newList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
