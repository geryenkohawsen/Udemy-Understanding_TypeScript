function combine(input1, input2, resultConversion) {
    var result;
    // calculation
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // result type conversion
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result;
    }
}
var combinedAges = combine(13, 23, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('13', '23', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Max', 'as-text');
console.log(combinedNames);
