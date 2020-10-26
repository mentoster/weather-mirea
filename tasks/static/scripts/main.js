var makeItRain = function () {
	//clear out everything
	$(".rain").empty();

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

function setWeather(day) {
	/*
	0 - at this time
	1 - next  day
	2 - next next day
	 */

	if (day == 0) {
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
		let hoursParams = ["DewPointC"];
		function Get(yourUrl) {
			var Httpreq = new XMLHttpRequest(); // a new request
			Httpreq.open("GET", yourUrl, false);
			Httpreq.send(null);
			return Httpreq.responseText;
		}
		// weather data
		var json_obj = JSON.parse(Get("http://wttr.in/moscow?format=j1&lang=ru"));
		// set currentParams
		for (let i = 0; i < currentParams.length; i++) {
			var element = document.getElementById(currentParams[i]);
			element.innerHTML = json_obj.current_condition[0][currentParams[i]];
		}
		// set lang_ru value
		var element = document.getElementById("weatherDesc");
		element.innerHTML = json_obj.current_condition[0].lang_ru[0].value;
		// set max and min temp
		for (let i = 0; i < allDayParams.length; i++) {
			var element = document.getElementById(allDayParams[i]);
			element.innerHTML = json_obj.weather[0][allDayParams[i]];
		}
	}
	makeItRain();
}
var date = new Date();
var timeNode = document.getElementById("NowTime");
function getCurrentTimeString() {
	var date2 = new Date();
	var hours = date2.getHours();
	var minutes = date2.getMinutes();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	var result = "" + hours + ":" + minutes;
	return result;
}
timeNode.innerHTML = getCurrentTimeString();

$("body").toggleClass("splat-toggle");
$(".splat-toggle.toggle").toggleClass("active");
setInterval(() => (timeNode.innerHTML = getCurrentTimeString()), 1000);
setWeather(0);
