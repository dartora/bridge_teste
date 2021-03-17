const formatToTable = (toFormat) => {
  let test = [];
  toFormat.forEach((element, index) => {
    return test.push({ id: index, number: element });
  });
};

module.exports = {
  formatToTable,
};
