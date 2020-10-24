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
setInterval(
	() => (timeNode.innerHTML = getCurrentTimeString() + downInfo),
	1000
);
makeItRain();
