$(document).ready(function() {
  
  var apiKey = "&APPID=882b63baa9443a22fc668314dc0f6de8";
  var longitude;
  var latitude;
  
  function weatherApp() {
    // Get user's current city & state
    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            $("#city-state").html((data.city) + ", " + data.region);
      
      // Declare lat & lon to pinpoint user
      longitude = data.lon;
      latitude = data.lat;
      var openWeatherAddress = "http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + latitude + "&lon=" + longitude + apiKey;
      
      // Get user's weather info & update html
      $.getJSON(openWeatherAddress, function(d){
        var description = d.weather[0].main;
        var currentTemp = d.main.temp;
        var maxTemp = d.main.temp_max;
        var minTemp = d.main.temp_min;
        $("#description").html("Current Conditions: " + description);
        $("#current-temp").html(Math.floor(currentTemp) + "&#176F");
        $("#temp-high").html("High: " + Math.floor(maxTemp) + "&#176F");
        $("#temp-low").html("Low: " + Math.floor(minTemp) + "&#176F");
        
        // Declare background image based off weather description
        if (description == "Clouds") {
          $("body").css('background-image', 'url("https://images.unsplash.com/photo-1455735459330-969b65c65b1c?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=991&amp;h=659&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg=")')
        } else if (description == "Clear") {
          $("body").css('background-image', 'url("https://images.unsplash.com/photo-1431319076055-2754a86a1105?dpr=2&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=")')
        } else if (description == "Drizzle") {
          $("body").css('background-image', 'url("https://images.unsplash.com/photo-1486016006115-74a41448aea2?dpr=2&auto=compress,format&fit=crop&w=991&h=663&q=80&cs=tinysrgb&crop=&bg=")')
        } else if (description == "Thunderstorm") {
          $("body").css('background-image', 'url("https://images.unsplash.com/photo-1485796421752-3bfd31ffdf85?dpr=2&auto=compress,format&fit=crop&w=991&h=623&q=80&cs=tinysrgb&crop=&bg=")')
        } else if (description == "Rain") {
          $("body").css('background-image', 'url("https://images.unsplash.com/photo-1438449805896-28a666819a20?dpr=2&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=&bg=")')
        } else if (description == "Snow") {
            $("body").css('background-image', 'url("https://images.unsplash.com/photo-1487239954692-e6a970698056?dpr=2&auto=compress,format&fit=crop&w=991&h=734&q=80&cs=tinysrgb&crop=&bg=")')
          }
        }) 
     });
    
    // Change between celsius & farenheight
     //change between celsius and farenheight
        $("#cel").click( function() {
          openWeatherAddress = "http://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + latitude + "&lon=" + longitude + apiKey;
          $.getJSON(openWeatherAddress, function(c){
        var description = c.weather[0].main;
        var currentTemp = c.main.temp;
        var maxTemp = c.main.temp_max;
        var minTemp = c.main.temp_min;
        $("#description").html("Current Conditions: " + description);
        $("#current-temp").html(Math.floor(currentTemp) + "&#176C");
        $("#temp-high").html("High: " + Math.floor(maxTemp) + "&#176C");
        $("#temp-low").html("Low: " + Math.floor(minTemp) + "&#176C");
        });
        })
    $("#far").click( function() {
      var openWeatherAddress = "http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + latitude + "&lon=" + longitude + apiKey;
          $.getJSON(openWeatherAddress, function(c){
        var description = c.weather[0].main;
        var currentTemp = c.main.temp;
        var maxTemp = c.main.temp_max;
        var minTemp = c.main.temp_min;
        $("#description").html("Current Conditions: " + description);
        $("#current-temp").html(Math.floor(currentTemp) + "&#176F");
        $("#temp-high").html("High: " + Math.floor(maxTemp) + "&#176F");
        $("#temp-low").html("Low: " + Math.floor(minTemp) + "&#176F");
        });
        })
  }
  
  function timeAndDay() {
    
    var d = new Date();
    var dayNum = d.getDay();
    var weekday = new Array(7);
      weekday[0] =  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
    var day = weekday[dayNum];
    
    function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
    
    function formatAMPM(date) {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
document.getElementById('time').innerHTML = day + " " + strTime;
}
    formatAMPM();
    
  }  
    
          
  // Call functions
  weatherApp();
  timeAndDay();

})