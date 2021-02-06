var card1Title =document.querySelector(".card1Title");
// var card1Icon = document.querySelector(".card1Icon");
var card1Temp = document.querySelector(".card1Temp");
var card1Humidity = document.querySelector(".card1Humidity");
var card1WindSpeed = document.querySelector(".card1WindSpeed");
var card1UVIndex = document.querySelector(".card1UVIndex");

var forcast1Date = document.querySelector(".forcast1Date");
var forcast1Icon = document.querySelector(".forcast1Icon");
var forcast1Temp = document.querySelector(".forcast1Temp");
var forcast1WindSpeed = document.querySelector(".forcast1WindSpeed");
var forcast1Humidity = document.querySelector(".forcast1Humidity");

var forcast2Date = document.querySelector(".forcast2Date");
var forcast2Icon = document.querySelector(".forcast2Icon");
var forcast2Temp = document.querySelector(".forcast2Temp");
var forcast2WindSpeed = document.querySelector(".forcast2WindSpeed");
var forcast2Humidity = document.querySelector(".forcast2Humidity");

var forcast3Date = document.querySelector(".forcast3Date");
var forcast3Icon = document.querySelector(".forcast3Icon");
var forcast3Temp = document.querySelector(".forcast3Temp");
var forcast3WindSpeed = document.querySelector(".forcast3WindSpeed");
var forcast3Humidity = document.querySelector(".forcast3Humidity");

var forcast4Date = document.querySelector(".forcast4Date");
var forcast4Icon = document.querySelector(".forcast4Icon");
var forcast4Temp = document.querySelector(".forcast4Temp");
var forcast4WindSpeed = document.querySelector(".forcast4WindSpeed");
var forcast4Humidity = document.querySelector(".forcast4Humidity");

var forcast5Date = document.querySelector(".forcast5Date");
var forcast5Icon = document.querySelector(".forcast5Icon");
var forcast5Temp = document.querySelector(".forcast5Temp");
var forcast5WindSpeed = document.querySelector(".forcast5WindSpeed");
var forcast5Humidity = document.querySelector(".forcast5Humidity");

var pastSearches = document.querySelector(".pastSearches")

var I = 0;
var arayToStoreSearches =[];
var cityChosen = "";
var lat = "";
var lon = "";
var cityBox =document.querySelector("#citySearch");

var getCity =document.querySelector("#getCity");
getCity.addEventListener("click", checkInput);

setPage();
function setPage(){
    var storedCity = localStorage.getItem(1)
    console.log(storedCity)
}

function checkInput () {
    I++
    var cityChoice = cityBox.value;
    console.log(cityChoice);
    cityChosen=cityChoice;
    localStorage.setItem(I, cityChoice);
    arayToStoreSearches.push(cityChoice);
    console.log(arayToStoreSearches)
    getWeather ();
}

function getWeather(){

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityChosen + "&units=imperial&appid=a3abe673413f0d723de9584cc5352708", {
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
        console.log(data);

        console.log(data.name);
        var dataName = (data.name)
        card1Title.innerHTML = dataName;

        console.log(data.coord.lat);
        console.log(data.coord.lon);
        console.log(data.weather.icon);
        // var dataIcon = (data.weather.icon);

        console.log(data.main.temp);
        var dataTemp = (data.main.temp);
        card1Temp.innerHTML = dataTemp;

        console.log(data.wind.speed);
        var dataWindSpeed = (data.wind.speed);
        card1WindSpeed.innerHTML = dataWindSpeed;

        console.log(data.main.humidity);
        var dataHumidity = (data.main.humidity);
        card1Humidity.innerHTML = dataHumidity;

        lat = (data.coord.lat);
        lon = (data.coord.lon);
        console.log(lat);
        console.log(lon);

        // var weatherImg = document.createElement("img");
        // weatherImg.setAttribute("src","http://openweathermap.org/img/wn/"+dataIcon+"@2xpng");
        // console.log(weatherImg);
  });

  
  
// fetch("http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&units=imperial&appid=a3abe673413f0d723de9584cc5352708", {
//   cache: 'reload',
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         console.log(lat);
//         console.log(lon);
//     })

  

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityChosen + "&units=imperial&appid=a3abe673413f0d723de9584cc5352708", {
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
        console.log(data.list[0]);

            console.log(data.list[0].wind.speed);
            var dataWindSpeed1 = (data.list[0].wind.speed);
            forcast1WindSpeed.innerHTML = dataWindSpeed1;
            console.log(data.list[0].main.temp);
            var dataTemp1 = (data.list[0].main.temp);
            forcast1Temp.innerHTML = dataTemp1;
            console.log(data.list[0].main.humidity);
            var dataHumidity1 = (data.list[0].main.humidity);
            forcast1Humidity.innerHTML = dataHumidity1;
            console.log(data.list[0].weather.icon);
            var dataIcon1 = (data.list[0].weather.icon);
            forcast1Icon = dataIcon1;
            console.log(data.list[0].dt_txt);
            var dataDate1 =(data.list[0].dt_txt);
            forcast1Date.innerHTML = dataDate1;

        console.log(data.list[8]);
        
            console.log(data.list[8].wind.speed);
            var dataWindSpeed2 = (data.list[8].wind.speed);
            forcast2WindSpeed.innerHTML = dataWindSpeed2;
            console.log(data.list[8].main.temp);
            var dataTemp2 = (data.list[8].main.temp);
            forcast2Temp.innerHTML = dataTemp2;
            console.log(data.list[8].main.humidity);
            var dataHumidity2 = (data.list[8].main.humidity);
            forcast2Humidity.innerHTML = dataHumidity2;
            console.log(data.list[8].weather.icon);
            var dataIcon2 = (data.list[8].weather.icon);
            forcast2Icon = dataIcon2;
            console.log(data.list[8].dt_txt);
            var dataDate2 =(data.list[8].dt_txt);
            forcast2Date.innerHTML = dataDate2;

        console.log(data.list[16]);

            console.log(data.list[16].wind.speed);
            var dataWindSpeed3 = (data.list[16].wind.speed);
            forcast3WindSpeed.innerHTML = dataWindSpeed3;
            console.log(data.list[16].main.temp);
            var dataTemp3 = (data.list[16].main.temp);
            forcast3Temp.innerHTML = dataTemp3;
            console.log(data.list[16].main.humidity);
            var dataHumidity3 = (data.list[16].main.humidity);
            forcast3Humidity.innerHTML = dataHumidity3;
            console.log(data.list[16].weather.icon);
            var dataIcon3 = (data.list[16].weather.icon);
            forcast3Icon = dataIcon3;
            console.log(data.list[16].dt_txt);
            var dataDate3 =(data.list[16].dt_txt);
            forcast3Date.innerHTML = dataDate3;

        console.log(data.list[24]);

            console.log(data.list[24].wind.speed);
            var dataWindSpeed4 = (data.list[24].wind.speed);
            forcast4WindSpeed.innerHTML = dataWindSpeed4;
            console.log(data.list[24].main.temp);
            var dataTemp4 = (data.list[24].main.temp);
            forcast4Temp.innerHTML = dataTemp4;
            console.log(data.list[24].main.humidity);
            var dataHumidity4 = (data.list[24].main.humidity);
            forcast4Humidity.innerHTML = dataHumidity4;
            console.log(data.list[24].weather.icon);
            var dataIcon4 = (data.list[24].weather.icon);
            forcast4Icon = dataIcon4;
            console.log(data.list[24].dt_txt);
            var dataDate4 =(data.list[24].dt_txt);
            forcast4Date.innerHTML = dataDate4;

        console.log(data.list[32]);

            console.log(data.list[32].wind.speed);
            var dataWindSpeed5 = (data.list[32].wind.speed);
            forcast5WindSpeed.innerHTML = dataWindSpeed5;

            console.log(data.list[32].main.temp);
            var dataTemp5 = (data.list[32].main.temp);
            forcast5Temp.innerHTML = dataTemp5;

            console.log(data.list[32].main.humidity);
            var dataHumidity5 = (data.list[32].main.humidity);
            forcast5Humidity.innerHTML = dataHumidity5;

            console.log(data.list[32].weather.icon);
            var dataIcon5 = (data.list[32].weather.icon);
            forcast5Icon = dataIcon5;

            console.log(data.list[32].dt_txt);
            var dataDate5 =(data.list[32].dt_txt);
            forcast5Date.innerHTML = dataDate5;
  });

}