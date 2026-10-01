async function search() {
    let word=document.getElementById("word").value;
    const apiKey="ab555e0878cd7547267665b3feb8d0d8";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${apiKey}&units=metric`;
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    document.getElementById("temp").innerHTML="Temperature: "+data.main.temp+"°C";
    document.getElementById("humidity").innerHTML="Humidity: "+data.main.humidity +"%";
    document.getElementById("wind").innerHTML="Wind Speed:"+data.wind.speed+" m/s";
    if(data.weather[0].main=="Clear"){
        document.getElementById("img").src="./images/clearweather.png";
        document.getElementById("img").style.visibility="visible";
    }else if(data.weather[0].main=="Clouds"){
        document.getElementById("img").src="./images/rainy.png";
        document.getElementById("img").style.visibility="visible";
    }else{
        document.getElementById("img").src="./images/summer.png";
        document.getElementById("img").style.visibility="visible";
    }
}