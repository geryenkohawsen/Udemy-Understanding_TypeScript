var userInput; // any is the most flexible type, it disable all type checking
var userName;
userInput = 5;
userInput = 'Max';
// unknown is better than any because it still enable type checking
// if you know what to do with a data eventually without knowing the actually type of the data, unknown is better
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('Error', 500);
console.log(result);
