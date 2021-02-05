fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=a3abe673413f0d723de9584cc5352708', {
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });