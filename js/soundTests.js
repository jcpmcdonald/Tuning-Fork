

var Game = {
	gapMP3: null,
	gapOGG: null,
	gapWAV: null,
	
	howlin: null,
	
	load: function() {
		var mp3 = "water.mp3";
		var ogg = "water.ogg";
		var wav = "water.wav";
		
		if (device.platform == 'Android') {
			mp3 = '/android_asset/www/' + mp3;
			ogg = '/android_asset/www/' + ogg;
			wav = '/android_asset/www/' + wav;
		}
		
		
		// Load the sound all the ways
		
		// Using Crafty
		Crafty.load([mp3, ogg, wav], function(){
			Crafty.audio.add("water", [
				mp3,
				ogg,
				wav
			]);
		});
		
		// Using SoundJS: http://www.createjs.com/#!/SoundJS
		createjs.Sound.initializeDefaultPlugins();
		createjs.Sound.alternateExtensions = ["wav", "ogg"];
		createjs.Sound.registerSound(mp3, 'water');
		
		
		// Howler: https://github.com/goldfire/howler.js
		this.howlin = new Howl({ urls: [mp3, ogg, wav] });
		
		
		// Using PhoneGap 'Media': http://docs.phonegap.com/en/3.3.0/cordova_media_media.md.html
		if(Media){
			this.gapMP3 = new Media(mp3);
			this.gapOGG = new Media(ogg);
			this.gapWAV = new Media(wav);
		}
		
		
		// Low Latency Audio plugin for PhoneGap: http://plugins.cordova.io/#/package/com.rjfun.cordova.plugin.lowlatencyaudio
		if( window.plugins && window.plugins.LowLatencyAudio ) {
			window.plugins.LowLatencyAudio.preloadFX(mp3, mp3, function(){}, function(){ alert('fail'); });
			window.plugins.LowLatencyAudio.preloadFX(ogg, ogg, function(){}, function(){ alert('fail'); });
			window.plugins.LowLatencyAudio.preloadFX(wav, wav, function(){}, function(){ alert('fail'); });
		}
	},
	
}
