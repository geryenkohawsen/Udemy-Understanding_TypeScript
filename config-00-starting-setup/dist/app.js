"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function clickHandler(message) {
    let username = "unused";
    console.log('Clicked !' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));
}
