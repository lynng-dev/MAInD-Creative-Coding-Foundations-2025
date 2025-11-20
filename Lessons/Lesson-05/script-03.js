const MY_API_KEY = "abc" // here add your API key
const API_URL = "https://api.openweathermap.org/data/2.5/forecast?lat=45.9&lon=8.96&units=metric&appid=" + MY_API_KEY

fetch(API_URL)
  .then(response => response.json()) 
  .then(data => console.log(data)
  .catch(error => displayError(error)));
  
function displayData(data){
    console.log(data)

    const FORECAST = data.list;
    console.log(FORECAST)

    for (let item of FORECAST){
        const DATE = item.ft_txt;
        const TIME = item.main;

        const TEMP
        console.log(DATE, TIME, TEMP)

    }

}

function displayError(error){
    console.log(error)
}