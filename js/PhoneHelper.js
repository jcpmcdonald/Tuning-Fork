

var PhoneHelper = {

	/**
	 * Determine whether the file loaded from PhoneGap or not
	 */
	isPhoneGap: function() {
		return (typeof cordova === 'undefined' ||
				typeof PhoneGap === 'undefined' ||
				typeof phonegap === 'undefined') 
		&& /^file:\/{3}[^\/]/i.test(window.location.href) 
		&& /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
	},
	
	//isCocoonJS: function() {
		// if(typeof navigator.isCocoonJS !== 'undefined')
		// {
			// return navigator.isCocoonJS();
		// }
		// return false;
	// },
	
	
	isPhone: function () {
		return this.isPhoneGap();// || isCocoonJS();
	},
	
	
	visitExternalPage: function (page)
	{
		if(this.isPhone())
		{
			navigator.app.loadUrl(page, { openExternal:true });
		}else{
			window.open(page, '_blank');
		}
	},
	
	
	soundLibrary: {},
	
	registerSound: function (src, name, count){
		if(this.isPhoneGap()){
			// Use PhoneGap's audio solution
			this.soundLibrary[name] = new Media(src, function(){console.log("success");}, function(){console.log("fail");});
		} else {
			// Use SoundJS
			createjs.Sound.registerSound(src, name, count);
		}
	},
	
	
	playSound: function (name){
		if(this.isPhoneGap()){
			// Use PhoneGap's audio solution
			if(typeof this.soundLibrary[name] !== 'undefined'){
				this.soundLibrary[name].play();
			}else{
				console.log("Sound file does not exist");
			}
		} else {
			// Use SoundJS
			createjs.Sound.play(name);
		}
	},

};
