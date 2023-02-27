
const apiKey = 'c1ff3d4c323f2ce64c986ccd83c9e8bc';
const form = document.querySelector('form');
const input = form.querySelector('input');
const card = document.querySelector('.card');
const cityName = card.querySelector('#city-name');
const temperature = card.querySelector('#temperature');
const description = card.querySelector('#description');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = input.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // or do something else with the weather data
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });