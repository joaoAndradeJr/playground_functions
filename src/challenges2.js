// Desafio 10
function techList(array, person) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let newList = [];
  let sortedArray = array.sort();

  for (let i = 0; i < sortedArray.length; i += 1) {
    newList.push({ tech: sortedArray[i], name: person });
  }

  return newList;
}

// Desafio 11
let notPossible = 'não é possível gerar um número de telefone com esses valores';
let incorrect = 'Array com tamanho incorreto.';

function mountPhone(array) {
  let phone = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0) return notPossible;
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
    }
    phone.push(array[i]);
  }
  return phone.join('');
}

function generatePhoneNumber(array) {
  if (array.length !== 11) return incorrect;
  let actual = '';
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9) return notPossible;
    actual = array[i];
    counter = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] === actual) {
        counter += 1;
      }
    }
    if (counter >= 3) return notPossible;
  }
  return mountPhone(array);
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a + b < c || a + c < b || b + c < a) return false;
  return true;
}

// Desafio 13
function hydrate(str) {
  let regex = /[0-9]/g;
  let values = str.match(regex);
  let sum = 0;

  for (let i = 0; i < values.length; i += 1) {
    sum += Number(values[i]);
  }

  if (sum > 1) {
    return `${sum} copos de água`;
  }

  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
