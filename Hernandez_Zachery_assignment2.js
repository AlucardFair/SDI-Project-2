/* 
Zachery Hernandez
March 8, 2012
Deliverable 2
BlackBerry, Themes, Resolutions
*/
/*
Functions needed
Arrays needed
for loop needed
*/
var devices = ["BlackBerry Bold 9700", "BlackBerry Storm 2 9550", "BlackBerry Curve 9300"],
	rWallpaper = ["480 px by 320 px", "320 px by 480 px", "320 px by 240 px"],
	rIcons = ["80 px by 80 px", "73 px by 73 px", "52 px by 50 px"];
var a = "BlackBerry Theme Studio",
	b = "import your",
	c = "export your theme";
var devicesLeft = 2;
while (devicesLeft > devices.length) {
	devicesLeft--;
};	
var chooseDevice = function(whatDevice) {
	var device = devices[whatDevice],
		rw = rWallpaper[deviceResolution],
		ri = rIcons[deviceResolution],
		console.log("For the " + device + ", make sure your wallpaper resolution is " + rw + " and your icon resolution is " + ri + " before you can " + b + " images into the " + a + ".");
		for (var wSize = rw; wSize === true;) {
		};
			console.log("Your wallpaper resolution is " + rWallpaper[whatDevice] + ", you may now " + b + " wallpapers into the " + a + ".");
			
for (var deviceResolution = 0; deviceResolution < devices.length; deviceResolution++) {
	var congrats = chooseDevice(deviceResolution);
};

alert("Designing for multiple devices.");