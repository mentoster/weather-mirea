var makeItRain = function () {
	return;
	//clear out everything
	$(".rain").empty();
	// document.getElementById("weather").src = "/static/images/cloud.png";
	var increment = 0;
	var drops = "";
	var backDrops = "";

	while (increment < 100) {
		if (window.CP.shouldStopExecution(0)) break;
		//couple random numbers to use for various randomizations
		//random number between 98 and 1
		var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
		//random number between 5 and 2
		var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
		//increment
		increment += randoFiver;

		//add in a new raindrop with various randomizations to certain CSS properties
		drops +=
			'<div class="drop" style="left: ' +
			increment +
			"%; bottom: " +
			(randoFiver + randoFiver - 1 + 100) +
			"%; animation-delay: 0." +
			randoHundo +
			"s; animation-duration: 0.5" +
			randoHundo +
			's;"><div class="stem" style="animation-delay: 0.' +
			randoHundo +
			"s; animation-duration: 0.5" +
			randoHundo +
			's;"></div><div class="splat" style="animation-delay: 0.' +
			randoHundo +
			"s; animation-duration: 0.5" +
			randoHundo +
			's;"></div></div>';
		backDrops +=
			'<div class="drop" style="right: ' +
			increment +
			"%; bottom: " +
			(randoFiver + randoFiver - 1 + 100) +
			"%; animation-delay: 0." +
			randoHundo +
			"s; animation-duration: 0.5" +
			randoHundo +
			's;"><div class="stem" style="animation-delay: 0.' +
			randoHundo +
			"s; animation-duration: 0.5" +
			randoHundo +
			's;"></div><div class="splat" style="animation-delay: 0.' +
			randoHundo +
			"s; animation-duration: 0.5" +
			randoHundo +
			's;"></div></div>';
	}
	window.CP.exitedLoop(0);

	$(".rain.front-row").append(drops);
	$(".rain.back-row").append(backDrops);
};
function makeItSnow() {
	// document.getElementById("weather").src = "/static/images/cold.png";
}
function makeItMisty() {
	// document.getElementById("weather").src = "/static/images/mist.png";
}
function makeItClear() {
	// document.getElementById("weather").src = "/static/images/sun.png";
}
function checkWeather(weather) {
	var weatherDesc = [
		"туман", // 0
		"дождь", // 1
		"пасмурно", // 2
		"снег", // 3
		"mist", // 4
		"rain", // 5
		"cloudy", // 6
		"snow", // 7
	];
	for (let i = 0; i < weatherDesc.length; i++) {
		const element = weatherDesc[i];
		if (weather.includes(element)) {
			if (i == 0 || i == 4) makeItMisty();
			else if (i == 1 || i == 5) makeItRain();
			else if (i == 2 || i == 6) makeItRain();
			else if (i == 3 || i == 7) makeItSnow();
			else makeItClear();
		} else {
			makeItRain();
		}
	}
}
function setWeather(day) {
	/*
	0 - at this time
	1 - next  day
	2 - next next day
	 */

	let currentParams = [
		"FeelsLikeC",
		"temp_C",
		"visibility",
		"humidity",
		"pressure",
		"precipMM",
		// compass params
		// "windspeedKmph",
		// "winddir16Point",
		// "winddirDegree",
	];
	let allDayParams = ["maxtempC", "mintempC"];
	function Get(yourUrl) {
		var Httpreq = new XMLHttpRequest(); // a new request
		Httpreq.open("GET", yourUrl, false);
		Httpreq.send(null);
		return Httpreq.responseText;
	}
	// weather data
	var json_obj = JSON.parse(Get("https://wttr.in/moscow?format=j1&lang=ru"));
	// set currentParams
	for (let i = 0; i < currentParams.length; i++) {
		var element = document.getElementById(currentParams[i]);
		element.innerHTML = json_obj.current_condition[0][currentParams[i]];
	}
	// set lang_ru value
	var element = document.getElementById("weatherDesc");
	var weather = json_obj.current_condition[0].lang_ru[0].value;
	checkWeather(weather);
	element.innerHTML = weather;
	console.log(
		"setWeather -> json_obj.current_condition[0].lang_ru[0].value",
		json_obj.current_condition[0].lang_ru[0].value
	);
	$("body").css(
		"background-image",
		json_obj["current_condition"][0]["weatherDesc"][0]["value"]
			.split(" ")[0]
			.replace(/,/g, "")
	);
	console.log(
		"weather dec " +
			json_obj["current_condition"][0]["weatherDesc"][0]["value"]
				.split(" ")[0]
				.replace(/,/g, "")
	);

	// set max and min temp
	for (let i = 0; i < allDayParams.length; i++) {
		var element = document.getElementById(allDayParams[i]);
		element.innerHTML = json_obj.weather[0][allDayParams[i]];
	}
	for (let i = 0; i < 7; i++) {
		var element = document.getElementById("h" + [i]);
		element.innerHTML = json_obj.weather[0]["hourly"][i]["DewPointC"] + "°";
	}
}
function getCurrentTimeString() {
	var date2 = new Date();
	var hours = date2.getHours();
	var minutes = date2.getMinutes();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	var result = "" + hours + ":" + minutes;
	return result;
}
// start
var timeNode = document.getElementById("NowTime");
timeNode.innerHTML = getCurrentTimeString();
$("body").toggleClass("splat-toggle");
$(".splat-toggle.toggle").toggleClass("active");
setWeather();
setInterval(() => (timeNode.innerHTML = getCurrentTimeString()), 1000);
