let userInput: unknown; // any is the most flexible type, it disable all type checking
let userName: string;

userInput = 5;
userInput = 'Max';

// unknown is better than any because it still enable type checking
// if you know what to do with a data eventually without knowing the actually type of the data, unknown is better
if (typeof userInput === 'string') {
  userName = userInput;
}