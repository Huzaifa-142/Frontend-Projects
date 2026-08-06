var input = document.querySelector("input");
var search = document.querySelector("#icon");
var head = document.querySelector("#head2");
var temp = document.querySelector(".head1");
var country = document.querySelector("#pk");
var humidity = document.querySelector("#p1");
var wind = document.querySelector("#p2");

var secret_api = "b38f7eba1b916973ccddb35bdf99012d";

search.addEventListener("click", () => {
    var city = input.value.trim();
    if (city == "") {
        alert("Please Enter City Name !")
    }
    var result = weatherApp(input.value)


})

async function weatherApp(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${secret_api}&units=metric`;
    var f1 = await fetch(url)
    var f2 = await f1.json()
    console.log(f2);
    
    if (f2.cod == "404") {
        alert("City Doesn't Exist !");
    }

    head.innerHTML = f2.name;
    temp.innerHTML = f2.main.temp + "°C";
    country.innerHTML = f2.sys.country;
    humidity.innerHTML = f2.main.humidity + "%";
    wind.innerHTML = f2.wind.speed + " km/h";
}
