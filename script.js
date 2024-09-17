console.log("hello");

const apikey = '9f0121e5a0c83eea298871b61f62bd74';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai';

async function checkWeather(){
    const response = await fetch(url + `&apikey=${apikey}`);
    var data = await response.json();
    console.log(data);
}

checkWeather();