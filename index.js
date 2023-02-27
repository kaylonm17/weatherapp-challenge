
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
         // Convert temperature from Celsius to Fahrenheit
      const tempInCelsius = data.main.temp - 273.15;
      const tempInFahrenheit = (tempInCelsius * 9/5) + 32;

      // Update weather card with returned data
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${Math.round(tempInFahrenheit)}°F`;
        description.textContent = `Conditions: ${data.weather[0].description}`;
        card.style.display = 'block'; // Show weather card
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });