(function($) {
	"use strict";
	new WOW().init();
	$(".cart_link > a").on("click", function() {
		$(".mini_cart").addClass("active");
	});
	$(".cart_cart_close > a").on("click", function() {
		$(".mini_cart").removeClass("active");
	});
})(jQuery);