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
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let phone = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (i === 0) {
      phone.push('(');
      phone.push(array[i]);
    } else if (i === 2) {
      phone.push(')');
      phone.push(' ');
      phone.push(array[i]);
    } else if (i === 7) {
      phone.push('-');
      phone.push(array[i]);
    } else {
      phone.push(array[i]);
    }
  }
  return phone.join('');
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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
