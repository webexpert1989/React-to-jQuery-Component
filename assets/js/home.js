/*************************
 * Home, integrate all sliders by Up/Down Keypress
 */

"use strict";

var Home = function(opts) {
	this.opts = {
		wrap: jQuery(".sliders"),
		data: [],
		tpl : "\
			<div class=\"slider-item\">\
				<h2 class=\"slider-title\">##title##</h2>\
				<div class=\"slider-wrap\" data-slider=\"##type##\">\
					<div class=\"slider-count\"><span class=\"current\">0</span>de<span class=\"total\">0</span></div>\
				</div>\
			</div>\
		",

		// Class names as type
		classes   : {
			main    : "Main",
			menu    : "Menu",
			channels: "Channels",
			series  : "Series",
			movies  : "Movies",
			services: "Services",
			actors  : "Actors",
			movistar: "Movistar",
			temas   : "Temas"
		},

		// status variables
		activeSlider: 0,  // start slider in first time
		sliders     : [], // slider object
		activeItem  : [], // active item index in each sliders
	};

	/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset options
		jQuery.extend(this.opts, opts);

		// create sliders
		this.bind_sliders();

		// start first slider
		this.active_slider(0);
	};

	/*
	 * Bind Slider
	 */
	this.bind_sliders = function() {
		var opts = this.opts,
			sliderWrap = jQuery("<div>").appendTo(opts.wrap).addClass("slider-items");

		for(var i in opts.data) {
			var $slider = jQuery(opts.tpl.replace(/##type##/g, opts.data[i].type)
													 		.replace(/##title##/g, opts.data[i].title)).appendTo(sliderWrap);

			if(!opts.data[i].title) {
				$slider.find(".slider-title").remove();
			}

			if(!opts.data[i].count) {
				$slider.find(".slider-count").remove();
			}

			opts.data[i].wrap = $slider.find("[data-slider]")
			opts.sliders[i] = new window[opts.classes[opts.data[i].type]](opts.data[i]);
			opts.activeItem[i] = 0;
		}
	};

	/*
	 * Active slider
	 */
	this.active_slider = function($sliderIndex) {
		var $homeSliderElem = this.opts.wrap,
			$sliders = this.opts.sliders,
			$activeSlider = this.opts.activeSlider,
			$activeItem = this.opts.activeItem,
			$sliderElemWrap = $homeSliderElem.find(".slider-items"),
			$sliderElem = $sliderElemWrap.find(".slider-item");

		if($sliderIndex > -1 &&  $sliderIndex < $sliders.length) {
			$activeItem[$activeSlider] = $sliders[$activeSlider].get_index();
			$activeItem[$activeSlider] = $activeItem[$activeSlider] > -1? $activeItem[$activeSlider]: 0;

			// destroy original active
			$sliders[$activeSlider].destroy();
			$sliderElem.eq($activeSlider).removeClass("active");

			// create new active
			$sliders[$sliderIndex].init($activeItem[$sliderIndex]);
			$sliderElem.eq($sliderIndex).addClass("active");
			$sliderElem.removeClass("unvisible");

			var moveTop = 0;
			for(var i = 0; i < $sliderIndex; i++) {
				moveTop += $sliderElem.eq(i).addClass("unvisible").outerHeight();
			}

			$sliderElemWrap.css({transform: "translateY(-" + moveTop + "px)"});

			// reset activated slider index
			this.opts.activeSlider = $sliderIndex;

			if($sliderIndex == 0) {
				$homeSliderElem.addClass("focus-bg");
			} else {
				$homeSliderElem.removeClass("focus-bg");
			}
		}
	};

	///
	this.construct(opts);
};

//////////////
(function($) {

	$(document).ready(function() {
		var $homeSliderElem = $("#sliders").addClass("active");

		$.home = new Home({
			wrap : $homeSliderElem,
			data : homeData,
		});

		// go to selected section
		$homeSliderElem.on("click", ".slider-item", function() {
			if(!$(this).hasClass("active")){
				$.home.active_slider($(this).index());
			}
		});

		// up/down  keypress
		$(document).on("keyup", function(e) {
			if($homeSliderElem.hasClass("active")) {
				// up/down
				if(e.keyCode == 38) { // up
					return $.home.active_slider($.home.opts.activeSlider - 1);
				} else if(e.keyCode == 40) { // down
					return $.home.active_slider($.home.opts.activeSlider + 1);
				}

				// left/right sliding
				if(e.keyCode == 37) { // left
					return $.home.opts.sliders[$.home.opts.activeSlider].prev_slide();
				} else if(e.keyCode == 39) { // right
					return $.home.opts.sliders[$.home.opts.activeSlider].next_slide();
				}

				// enter key
				if(e.keyCode == 13){
					var activeElem = $(".slider-item.active [data-view-type].active");
					if(activeElem.length) {
						$homeSliderElem.removeClass("active");

						switch(activeElem.data("view-type")) {
							case "grid":
								$.gridView.sel_view(activeElem.data("ajax-url").split("@@")[0]).init();
								break;
							case "slider":
								$.sliderView.sel_view({
									title : activeElem.data("title"),
									urls  : activeElem.data("ajax-url").split("@@")
								}).init();
								break;
						}
					}
				}
			}
		});

		// define select item in each sliders
		$homeSliderElem.on("click", ".item", function(e) {
			var item = $(this),
				itemIndex = item.data("item-index"),
				slider = item.parents(".slider-item"),
				sliderIndex = slider.index();

			if(!slider.hasClass("active")) {
				$.home.active_slider(sliderIndex);
			}

			if(!item.hasClass("active")) {
				$.home.opts.sliders[sliderIndex].sel_slide(itemIndex);	
			}
		});

		//////////////////////////////////////////////////////////////
		// Grid View
		var $gridViewWrapElem = $("#grid-view").removeClass("active");

		$.gridView = new GridView({
			wrap: $gridViewWrapElem,
			opts: movistarOptions.grid,
		});

		// up/down  keypress
		$(document).on("keyup", function(e) {
			if($gridViewWrapElem.hasClass("active")) {
				// up/down
				if(e.keyCode == 38) { // up
					if(!$.gridView.section_up()) {
						$homeSliderElem.addClass("active");
					}
					return;
				} else if(e.keyCode == 40) { // down
					return $.gridView.section_down();
				}

				// left/right sliding
				if(e.keyCode == 37) { // left
					return $.gridView.focus_left();
				} else if(e.keyCode == 39) { // right
					return $.gridView.focus_right();
				}
			}
		});

		// click item
		$gridViewWrapElem.on("click", ".grid-items .item", function(e) {
			e.preventDefault();

			var header = $gridViewWrapElem.children(".app-header").removeClass("focused"),
				actions = $gridViewWrapElem.children(".grid-actions").removeClass("focused"),
				grid = $gridViewWrapElem.children(".grid-items-wrap").addClass("focused");
			
			$.gridView.unsel_action();
			$.gridView.sel_item($(this).index());
		});

		$gridViewWrapElem.on("click", ".grid-actions [data-grid-action]", function(e) {
			e.preventDefault();

			var header = $gridViewWrapElem.children(".app-header").addClass("focused"),
				actions = $gridViewWrapElem.children(".grid-actions").addClass("focused"),
				grid = $gridViewWrapElem.children(".grid-items-wrap").removeClass("focused"),
				selectedAction = $(this),
				activeIndex = 0;

			actions.find("[data-grid-action]").each(function(index) {
				if($(this).is(selectedAction)) {
					activeIndex = index;
				}
			});

			$.gridView.unsel_item();
			$.gridView.sel_action(activeIndex);
		});

		//////////////////////////////////////////////////////////////
		// Slider View
		var $sliderViewWrapElem = $("#slider-view").removeClass("active");

		$.sliderView = new SliderView({
			wrap: $sliderViewWrapElem,
			opts: movistarOptions.slider,
		});

		// up/down  keypress
		$(document).on("keyup", function(e) {
			if($sliderViewWrapElem.hasClass("active")) {
				// up/down
				if(e.keyCode == 38) { // up
					if($.sliderView.opts.activeSlider == 0) {
						$homeSliderElem.addClass("active");

						return $.sliderView.destroy();
					} else {
						return $.sliderView.active_slider($.sliderView.opts.activeSlider - 1);
					}
				} else if(e.keyCode == 40) { // down
					return $.sliderView.active_slider($.sliderView.opts.activeSlider + 1);
				}

				// left/right sliding
				if(e.keyCode == 37) { // left
					return $.sliderView.opts.sliders[$.sliderView.opts.activeSlider].prev_slide();
				} else if(e.keyCode == 39) { // right
					return $.sliderView.opts.sliders[$.sliderView.opts.activeSlider].next_slide();
				}
			}
		});

		// click item
		$sliderViewWrapElem.on("click", ".slider-item .item", function(e) {
			e.preventDefault();

			var item = $(this),
				itemIndex = item.data("item-index"),
				slider = item.parents(".slider-item"),
				sliderIndex = slider.index();

			if(!slider.hasClass("active")) {
				$.sliderView.active_slider(sliderIndex);
			}

			if(!item.hasClass("active")) {
				$.sliderView.opts.sliders[sliderIndex].sel_item(itemIndex);	
			}
		});

		////////////
	});

})(jQuery);
