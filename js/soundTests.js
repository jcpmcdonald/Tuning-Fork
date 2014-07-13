

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
		
		// Using PhoneGap 'Media': http://docs.phonegap.com/en/3.3.0/cordova_media_media.md.html
		if(typeof Media !== 'undefined'){
			this.gapMP3 = new Media('water.mp3');
			this.gapOGG = new Media('water.ogg');
			this.gapWAV = new Media('water.wav');
		}
		
		// Howler: https://github.com/goldfire/howler.js
		this.howlin = new Howl({ urls: ['water.mp3', 'water.ogg', 'water.wav'] });
		
		
		this.start();
	},
	
	start: function() {
		//if(Game.assetsLoaded && Game.DOMReady)
		{
			// alert("HTML Audio");
			// document.getElementById('htmlAudio').play();
			// 
			// alert("Crafty Audio");
			// Crafty.audio.play("water");
			// 
			// alert("SoundJS Audio");
			// createjs.Sound.play("water");
			// 
			// if(typeof Media !== 'undefined'){
				// alert("PhoneGap MP3");
				// this.gapMP3.play();
				// 
				// alert("PhoneGap OGG");
				// this.gapOGG.play();
				// 
				// alert("PhoneGap WAV");
				// this.gapWAV.play();
			// }
			// 
			// alert("Howler Audio");
			// this.howlin.play();
		}
	},
	
}
