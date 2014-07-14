

var Game = {
	gapMP3: null,
	gapOGG: null,
	gapWAV: null,
	
	howlin: null,
	
	load: function() {
		// Load the sound all the ways
		
		// Using Crafty
		Crafty.load(['water.mp3', 'water.ogg', 'water.wav'], function(){
			Crafty.audio.add("water", [
				"water.mp3",
				"water.ogg",
				"water.wav"
			]);
		});
		
		// Using SoundJS: http://www.createjs.com/#!/SoundJS
		createjs.Sound.initializeDefaultPlugins();
		createjs.Sound.alternateExtensions = ["wav", "ogg"];
		createjs.Sound.registerSound('water.mp3', 'water');
		
		
		// Howler: https://github.com/goldfire/howler.js
		this.howlin = new Howl({ urls: ['water.mp3', 'water.ogg', 'water.wav'] });
		
		
		// Using PhoneGap 'Media': http://docs.phonegap.com/en/3.3.0/cordova_media_media.md.html
		if(typeof Media !== 'undefined'){
			this.gapMP3 = new Media('water.mp3');
			this.gapOGG = new Media('water.ogg');
			this.gapWAV = new Media('water.wav');
		}
		
		
		// Low Latency Audio plugin for PhoneGap: http://plugins.cordova.io/#/package/com.rjfun.cordova.plugin.lowlatencyaudio
		if( window.plugins && window.plugins.LowLatencyAudio ) {
			window.plugins.LowLatencyAudio.preloadFX("water.mp3", "water.mp3");
			window.plugins.LowLatencyAudio.preloadFX("water.ogg", "water.ogg");
			window.plugins.LowLatencyAudio.preloadFX("water.wav", "water.wav");
		}
	},
	
}
