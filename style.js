let btn = document.querySelector("button");
let input = document.querySelector("#search");
let temp = document.querySelector(".temp")
const api_key = "67ca48d558fa4143a9600726230708";
let city = document.querySelector(".city")

function getData() {
  let cityName = input.value;
  fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName}&aqi=no`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      temp.innerHTML = data.current.temp_c+"°C"
      city.innerHTML = data.location.name
      // Handle the data as needed
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

btn.addEventListener('click', getData);
