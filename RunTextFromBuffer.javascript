function Get(yourUrl) {
	var Httpreq = new XMLHttpRequest(); // a new request
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	return Httpreq.responseText;
}
var json_obj = JSON.parse(Get("http://wttr.in/moscow?format=j1&lang=ru"));
console.log("this is the author name: " + json_obj.author_name);