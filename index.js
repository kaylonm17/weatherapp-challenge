
const apiKey = 'your-api-key-here';
const form = document.querySelector('form');
const input = form.querySelector('input');

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