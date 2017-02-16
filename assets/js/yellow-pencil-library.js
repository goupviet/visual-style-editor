(function ($) {

    "use strict";

	// jquery visible plugin
	!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);
	
	
	// Check if yellow-pencil active.
	function is_yellow_pencil(){
		
		if($("body").hasClass("yp-yellow-pencil")){
			return true;
		}else{
			
			if($(document).find(".yp-select-bar").length > 0){
				return true;
			}else{
				return false;
			}
			
		}
		
	}
	
	
	// Getting Custom Selectors by Yellow Pencil Styles.
	function yp_get_selectors_array(selector,styles){

		if($("style#yellow-pencil,style#yp-live-preview,link#yp-custom-css,style#yellow-pencil-backend").length === 0){
			return false;
		}
		
		var styles = '';

		if(window.externalCSS == false){

			// backend css
			if($("#yellow-pencil-backend").length > 0){
				styles = styles + $("#yellow-pencil-backend").html();
			}

			// default css
			if($("style#yellow-pencil").length > 0){
				styles = styles + $("style#yellow-pencil").html();
			}

			// live preivew css
			if($("style#yp-live-preview").length > 0){
				styles = styles + $("style#yp-live-preview").html();
			}

		}else{

			styles = window.externalData;

			if($("style#yp-live-preview").length > 0){
				styles = styles + $("style#yp-live-preview").html();
			}

			// backend css
			if($("#yellow-pencil-backend").length > 0){
				styles = styles + $("#yellow-pencil-backend").html();
			}

		}

		
		styles = styles.replace(/(\r\n|\n|\r)/g,"").replace(/\t/g, '').replace(/\/\*(.*?)\*\//g, "");

		var selectors = $.trim(styles.replace(/\{.*?\}/g, "|"));
		selectors = selectors.replace(/\/\*.*?\*\//g, "");
		selectors = selectors.substring(0, selectors.length - 1);
		selectors = selectors.replace(/\}/g).replace(/\{/g);


		if(selectors.indexOf("@media") != -1){
			var media = $.trim(styles.match(/\{.*?\}/g).toString().match(/\{.*?\{/g).toString().replace(/\{/g,''));
			selectors = selectors.replace(/\@media /g,'');
			selectors = selectors + media;
			selectors = selectors.replace("|",'&&') + "|";
		}

		selectors = selectors.split("|");
		
		var arrayReturn = [];
		
		$.each(selectors,function(i,v){

			if(v.match(/\:|\}|\{|\;/)){
				return false;
			}

			var media = false;
			
			// If Has Media Query
			if(v.indexOf("&&") != -1){
				media = v.split("&&")[0];
				v = v.split("&&")[1];
			}

			// Continue
			if(media != false){

				// Match Media
				if(window.matchMedia(media).matches && v.indexOf(selector) >= 0 && v != ''){
					arrayReturn.push(v.replace(selector,""));
				}

			}else if (v.indexOf(selector) >= 0 && v != '' && media == false){

				arrayReturn.push(v.replace(selector,""));

			}
			
		});



		return arrayReturn.toString();
		
	}
	
	// detect if click on any element from yellow pencil,
	//so add click animation.
	function yp_click_checker(){
	
		var click = $(yp_get_selectors_array(".yp_click"));
	
		click.each(function(){
			$(this).click(function(){
				$(this).addClass("yp_click");
			});
		});
	
	}
	
	// detect if on screen any element from yellow pencil,
	//so add animation.
	function yp_onsceen_checker(){

		$(yp_get_selectors_array(".yp_onscreen")).each(function(){
		
			if($(this).visible(true)){
				$(this).addClass("yp_onscreen");
			}
			
		});
		
	}
	
	if(!is_yellow_pencil()){

		if($("link#yp-custom-css").length > 0){

			window.externalCSS = true;
			window.externalData = true;

			var href = $("link#yp-custom-css").attr("href");

			$.when($.get(href)).done(function(styles){

				window.externalData = styles;

				$(window).resize(function(){
					yp_onsceen_checker();
				});
				
				$(document).ready(function(){
					yp_onsceen_checker();
					yp_click_checker();
				});
				
				$(document).scroll(function(){
					yp_onsceen_checker();
				});

			});

		}else{

			window.externalCSS = false;

			$(window).resize(function(){
				yp_onsceen_checker();
			});
				
			$(document).ready(function(){
				yp_onsceen_checker();
				yp_click_checker();
			});
				
			$(document).scroll(function(){
				yp_onsceen_checker();
			});

		}
		
	}
	
	
}(jQuery));