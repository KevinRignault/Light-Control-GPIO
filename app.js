//-------------
// GLOBAL VAR
//-------------

//-- IMPORT MODULES
var app = require('express')(),
    http = require('http').Server(app),
    Gpio = require('onoff').Gpio;

//-- DEFINE LEDS
var led_red = new Gpio(17, 'out'), // Red light
    led_green = new Gpio(18, 'out'); // Green light

//-- MAKE ARRAY LEDS
var leds = [led_red,led_green];


//-------------
// APPLICATION
//-------------

//-- TURN ON THE LIGHT
app.get('/on/:led', function(req, res){
	var this_led = req.params.led;	
	leds[this_led].writeSync(1);
	console.info("Switch on the light "+this_led);
	res.send("Turn on the light "+this_led);
});

//-- TURN OFF THE LIGHT
app.get('/off/:led', function(req, res){
	var this_led = req.params.led;	
	leds[this_led].writeSync(0);
	console.info("Switch off the light "+this_led);
	res.send("Turn off the light "+this_led);
});

//-- GET STATUS
app.get('/status/:led', function(req, res){
	leds[this_led].readSync();
	console.info(leds[this_led].readSync());
	res.send(leds[this_led].readSynch());
});

//-- Listen 3000
http.listen(3000, function(){
	console.info("Start app on :3000");
});