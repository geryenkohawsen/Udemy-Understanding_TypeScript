// store union types in custom types! (type alias)
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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
