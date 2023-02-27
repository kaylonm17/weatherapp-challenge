
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

        // Add weather icon to card
      const weatherIconClass = getWeatherIconClass(data.weather[0].description);
      weatherIcon.classList.add(weatherIconClass);
      
        card.style.display = 'block'; // Show weather card
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  });

  // function getWeatherIconClass(description) {
  //   // Map weather descriptions to Font Awesome weather icon classes
  //   const weatherIcons = {
  //     'clear sky': 'fa-sun',
  //     'few clouds': 'fa-cloud-sun',
  //     'scattered clouds': 'fa-cloud',
  //     'broken clouds': 'fa-cloud',
  //     'shower rain': 'fa-cloud-showers-heavy',
  //     'rain': 'fa-cloud-rain',
  //     'thunderstorm': 'fa-bolt',
  //     'snow': 'fa-snowflake',
  //     'mist': 'fa-smog',
  //   };
  
  //   // Return the weather icon class for the given weather description
  //   const lowercaseDescription = description.toLowerCase();
  //   return weatherIcons[lowercaseDescription] || 'fa-question'; // Return 'fa-question' as the default icon class if no match is found
  }