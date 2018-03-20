/*************************
 * App responsive
 */


//////////////
(function($) {
	"use strict";

	$.extend({
		responsiveAppWrap: function() {
			var ratio = Math.min($(window).width() / 1920, $(window).height() / 1080);
			$("html").css("transform", "scale(" + ratio + ")");
		}
	});

	$(document).ready(function() {
		$.responsiveAppWrap();
	});

	$(window).resize(function() {
		$.responsiveAppWrap();
	});

})(jQuery);
