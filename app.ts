function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;

  // calculation
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // result type conversion
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result;
  }
}

const combinedAges = combine(13, 23, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('13', '23', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Max', 'as-text');
console.log(combinedNames);
