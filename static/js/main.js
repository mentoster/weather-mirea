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
$("body").toggleClass("splat-toggle");
$(".splat-toggle.toggle").toggleClass("active");
// make rain
makeItRain();

var timeNode = document.getElementById("NowTime");
alert(timeNode);
function getCurrentTimeString() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	alert(hours.toString + ":" + minutes.toString);
	return hours.toString + ":" + minutes.toString;
}

setInterval(() => (timeNode.innerHTML = getCurrentTimeString()), 60000);
