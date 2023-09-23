import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('a')! as HTMLInputElement;

const GOOGLE_API_KEY = '<KEY>'; // fake key

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
  type GoogleGeocodingResponse = {
    results: {
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      };
    }[];
    status: 'OK' | 'ZERO_RESULTS';
  };
  axios
    .get<GoogleGeocodingResponse>(
      `http://maps.google.com/maps/api/js?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

form.addEventListener('submit', searchAddressHandler);
