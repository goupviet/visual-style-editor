/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh  
*/

/*
	Edited for jquery plugin by WaspThemes Team.
*/

(function ($) {

    "use strict";

	$.fn.simple_parallax = function(settings){
		
		var defaults = {
			speed :1,
			x:50
		};
		
		var setting = $.extend(defaults, settings);
		 
		return this.each(function(){
			
			var $bgobj = $(this); // assigning the object
			
			
			// if not has background image; break.
			if($bgobj.css("background-image") == 'none' || $bgobj.hasClass("yp-parallax-disabled") == true){
				return false;
			}
			
			
			/*
			First Run
			*/
			// minimum speed is 1.
			if(setting.speed < 1){
				setting.speed = 1;
			}
			
			// Scroll the background at var speed
			// the yPos is a negative value because we're scrolling it UP!
			var yPos = -(($(window).scrollTop() / 10) * setting.speed); 
				
			// Put together our final background position
			//alert($bgobj.css("background-position"));
			var coords = ''+setting.x+'% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		
			
			// On scolling.
			$(window).scroll(function(){
				
				// if not has background image; break.
				if($bgobj.css("background-image") == 'none' || $bgobj.hasClass("yp-parallax-disabled") == true){
					return false;
				}
				
				// minimum speed is 1.
				if(setting.speed < 1){
					setting.speed = 1;
				}
				
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!
				var yPos = -(($(window).scrollTop() / 10) * setting.speed); 
				
				// Put together our final background position
				//alert($bgobj.css("background-position"));
				var coords = ''+setting.x+'% '+ yPos + 'px';

				// Move the background
				$bgobj.css({ backgroundPosition: coords });
				
			}); // window scroll Ends
		 
		});
		
	}

}(jQuery));