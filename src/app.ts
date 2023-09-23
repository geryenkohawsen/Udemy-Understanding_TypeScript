const form = document.querySelector('form')!;
const addressInput = document.getElementById('a')! as HTMLInputElement;

const GOOGLE_API_KEY = '<KEY>'; // fake key

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
}

form.addEventListener('submit', searchAddressHandler);
