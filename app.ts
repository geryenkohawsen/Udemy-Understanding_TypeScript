let userInput: unknown; // any is the most flexible type, it disable all type checking
let userName: string;

userInput = 5;
userInput = 'Max';

// unknown is better than any because it still enable type checking
// if you know what to do with a data eventually without knowing the actually type of the data, unknown is better
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never { // this will NEVER return anything because it will break/crash our script
  throw { message: message, errorCode: code };
}

const result = generateError('Error', 500);
console.log(result);
