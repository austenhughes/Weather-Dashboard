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

var forcast = document.querySelector(".forcast");
var today = document.querySelector(".today");

var pastSearches = document.querySelector(".pastSearches");

var I = 0;
var arayToStoreSearches =[];
var cityChosen = "";
var Lat = "";
var Lon = "";
var LatAndLon = "";

var cityBox =document.querySelector("#citySearch");

var getCity =document.querySelector("#getCity");
getCity.addEventListener("click", checkInput);

setPage();
function setPage(){
    console.log(localStorage)
    var city = localStorage
    console.log(city);
    var cityOnPageStart = document.createElement("div");
    cityOnPageStart.textContent=city
    pastSearches.append(cityOnPageStart);
    
    // var storedCity = localStorage.getItem(pastSearches);
    // var storedCityOnPage = JSON.parse(storedCity);
    // console.log(storedCityOnPage);
}

function checkInput () {
    card1Title.innerHTML = "";
    forcast1Icon.innerHTML = "";
    forcast2Icon.innerHTML = "";
    forcast3Icon.innerHTML = "";
    forcast4Icon.innerHTML = "";
    forcast5Icon.innerHTML= "";

    I++
    var cityChoice = cityBox.value;
    console.log(cityChoice);

    var cityOnPage = document.createElement("div");
    cityOnPage.textContent=cityChoice
    pastSearches.append(cityOnPage);

    cityChosen=cityChoice;
    arayToStoreSearches.push(cityChoice);
    localStorage.setItem( "pastSearches" ,JSON.stringify(arayToStoreSearches));
    console.log(arayToStoreSearches);
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

        // console.log(data.coord.lat);
        // console.log(data.coord.lon);
        console.log(data.weather[0].icon);
       
        var dataIconSelected = (data.weather[0].icon);
        dataIcon = document.createElement("img");
        dataIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + (dataIconSelected) + "@2x.png" );
        card1Title.append(dataIcon);
        console.log(dataIcon);

        console.log(data.main.temp);
        var dataTemp = (data.main.temp);
        card1Temp.innerHTML = "Temp : " + dataTemp +" degrees fahrenheit";

        console.log(data.wind.speed);
        var dataWindSpeed = (data.wind.speed);
        card1WindSpeed.innerHTML = "Wind speed : " + dataWindSpeed;

        console.log(data.main.humidity);
        var dataHumidity = (data.main.humidity);
        card1Humidity.innerHTML = "Humidity : " + dataHumidity;

        // Lat = (data.coord.lat);
        // Lon = (data.coord.lon);
        // console.log(Lat);
        // console.log(Lon);
        // LatAndLon = (Lat+"&lon="+Lon);
        // console.log(LatAndLon)
        
  });  

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
            forcast1WindSpeed.innerHTML = "Wind speed : " + dataWindSpeed1;
            console.log(data.list[0].main.temp);
            var dataTemp1 = (data.list[0].main.temp);
            forcast1Temp.innerHTML = "Temp : "+ dataTemp1;
            console.log(data.list[0].main.humidity);
            var dataHumidity1 = (data.list[0].main.humidity);
            forcast1Humidity.innerHTML = "Humidity : "+ dataHumidity1;
            console.log(data.list[0].weather[0].icon);
            var dataIconSelected1 = (data.list[0].weather[0].icon);
            dataIcon1 = document.createElement("img");
            dataIcon1.setAttribute("src", "http://openweathermap.org/img/wn/" + (dataIconSelected1) + "@2x.png" );
            forcast1Icon.append(dataIcon1);
            console.log(dataIcon1);
            console.log(data.list[0].dt_txt);
            var dataDate1 =(data.list[0].dt_txt);
            forcast1Date.innerHTML = dataDate1;

        console.log(data.list[8]);
        
            console.log(data.list[8].wind.speed);
            var dataWindSpeed2 = (data.list[8].wind.speed);
            forcast2WindSpeed.innerHTML = "Wind speed : " + dataWindSpeed2;
            console.log(data.list[8].main.temp);
            var dataTemp2 = (data.list[8].main.temp);
            forcast2Temp.innerHTML = "Temp : " + dataTemp2;
            console.log(data.list[8].main.humidity);
            var dataHumidity2 = (data.list[8].main.humidity);
            forcast2Humidity.innerHTML = "Humidity : " + dataHumidity2;
            console.log(data.list[8].weather[0].icon);
            var dataIconSelected2 = (data.list[8].weather[0].icon);
            dataIcon2 = document.createElement("img");
            dataIcon2.setAttribute("src", "http://openweathermap.org/img/wn/" + (dataIconSelected2) + "@2x.png" );
            forcast2Icon.append(dataIcon2);
            console.log(dataIcon2);
            console.log(data.list[8].dt_txt);
            var dataDate2 =(data.list[8].dt_txt);
            forcast2Date.innerHTML = dataDate2;

        console.log(data.list[16]);

            console.log(data.list[16].wind.speed);
            var dataWindSpeed3 = (data.list[16].wind.speed);
            forcast3WindSpeed.innerHTML = "Wind speed : " + dataWindSpeed3;
            console.log(data.list[16].main.temp);
            var dataTemp3 = (data.list[16].main.temp);
            forcast3Temp.innerHTML = "Temp : " + dataTemp3;
            console.log(data.list[16].main.humidity);
            var dataHumidity3 = (data.list[16].main.humidity);
            forcast3Humidity.innerHTML = "Humidity : " + dataHumidity3;
            console.log(data.list[16].weather[0].icon);
            var dataIconSelected3 = (data.list[16].weather[0].icon);
            dataIcon3 = document.createElement("img");
            dataIcon3.setAttribute("src", "http://openweathermap.org/img/wn/" + (dataIconSelected3) + "@2x.png" );
            forcast3Icon.append(dataIcon3);
            console.log(dataIcon3);
            console.log(data.list[16].dt_txt);
            var dataDate3 =(data.list[16].dt_txt);
            forcast3Date.innerHTML = dataDate3;

        console.log(data.list[24]);

            console.log(data.list[24].wind.speed);
            var dataWindSpeed4 = (data.list[24].wind.speed);
            forcast4WindSpeed.innerHTML = "Wind speed : " + dataWindSpeed4;
            console.log(data.list[24].main.temp);
            var dataTemp4 = (data.list[24].main.temp);
            forcast4Temp.innerHTML = "Temp : " + dataTemp4;
            console.log(data.list[24].main.humidity);
            var dataHumidity4 = (data.list[24].main.humidity);
            forcast4Humidity.innerHTML = "Humidity : " + dataHumidity4;
            console.log(data.list[24].weather[0].icon);
            var dataIconSelected4 = (data.list[24].weather[0].icon);
            dataIcon4 = document.createElement("img");
            dataIcon4.setAttribute("src", "http://openweathermap.org/img/wn/" + (dataIconSelected4) + "@2x.png" );
            forcast4Icon.append(dataIcon4);
            console.log(dataIcon4);
            console.log(data.list[24].dt_txt);
            var dataDate4 =(data.list[24].dt_txt);
            forcast4Date.innerHTML = dataDate4;

        console.log(data.list[32]);

            console.log(data.list[32].wind.speed);
            var dataWindSpeed5 = (data.list[32].wind.speed);
            forcast5WindSpeed.innerHTML = "Wind speed : " + dataWindSpeed5;

            console.log(data.list[32].main.temp);
            var dataTemp5 = (data.list[32].main.temp);
            forcast5Temp.innerHTML = "Temp : " + dataTemp5;

            console.log(data.list[32].main.humidity);
            var dataHumidity5 = (data.list[32].main.humidity);
            forcast5Humidity.innerHTML = "Humidity : " + dataHumidity5;

            console.log(data.list[32].weather[0].icon);
            var dataIconSelected5 = (data.list[32].weather[0].icon);
            dataIcon5 = document.createElement("img");
            dataIcon5.setAttribute("src", "http://openweathermap.org/img/wn/" + (dataIconSelected5) + "@2x.png" );
            forcast5Icon.append(dataIcon5);
            console.log(dataIcon5);

            console.log(data.list[32].dt_txt);
            var dataDate5 =(data.list[32].dt_txt);
            forcast5Date.innerHTML = dataDate5;
  });

  fetch("http://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&appid=a3abe673413f0d723de9584cc5352708", {
    cache: 'reload',
  })
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
          console.log(data.value);
          var UVIndex = (data.value);
          card1UVIndex.innerHTML = "UV Index : "+ UVIndex;

          if (UVIndex>8){
            card1UVIndex.style.color = "red"
          }else if (UVIndex<8 && UVIndex>5){
            card1UVIndex.style.color = "orange"
          }else if (UVIndex<6 && UVIndex>2){
            card1UVIndex.style.color = "yellow"
          } else {
            card1UVIndex.style.color ="green"
          }
      })

}