const API_KEY = "275a1ec40c0fba81749272e6b60ba7f0";

const searchTemperature = () => {
	const searchText = document.getElementById("location-search");
	const searchValue = searchText.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
	console.log(data);
	const name = document.getElementById("loaction");
	const temperature = document.getElementById("loaction-temperature");
	const weather = document.getElementById("location-weather");
	const icon = document.getElementById("weather-icon");

	const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	icon.setAttribute("src", url);
	name.innerText = `${data.name}`;
	temperature.innerHTML = `<span>${data.main.temp}</span>&deg;C`;
	weather.innerText = `${data.weather[0].main}`;
};
