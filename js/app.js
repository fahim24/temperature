const API_KEY = "275a1ec40c0fba81749272e6b60ba7f0";

const searchTemperature = () => {
	const searchText = document.getElementById("location-search");
	const searchValue = searchText.value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}`;
	console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {};
