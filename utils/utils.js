const isPrime = (startNumber, endNumber) => {
  let listPrime = [];
  for (let count = startNumber; count <= endNumber; count++) {
    let divisores = 0;

    for (let aux = 1; aux <= count; aux++) if (count % aux == 0) divisores++;

    if (divisores == 2) {
      listPrime.push(count);
    }
  }
  return listPrime;
};

module.exports = {
  isPrime,
};
