var fortuneCookies = [
	"First cookie",
	"second cookie",
	"third cookie",
	"forth cookie",
	"fifth cookie"
];
exports.getFortune = function() {
	var idx = Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx];
}