let input=document.querySelector("input");
let btn=document.querySelector("button");

let curCity

function getWeather(curCity){
    fetch(`https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`)
    .then(res=>res.json())
    .then(data=>console.log(data))
}

