/*************************
 * Menu
 */

"use strict";

var Menu = function(opts) {
	this.opts = {
		wrap : jQuery("[data-slider=\"menu\"]"),
		data : [],
		tpl  : "\
			<div class=\"nav-item\" data-nav-id=\"##id##\" data-title=\"##title##\" data-view-type=\"##type##\" data-ajax-url=\"##urls##\">\
				<div class=\"nav nav-item-content\">##title##</div>\
			</div>\
		"
	};

	/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset opts
		jQuery.extend(this.opts, opts);

		////
		this.init_items();
		this.bind_slick();
	};
	
	/*
	 * create items
	 */
	this.init_items = function() {
		var opts = this.opts;

		if(!opts.wrap.length) {
			return false;
		}

		// cleanup
		opts.wrap.html("");

		// create menu items
		for(var i in opts.data) {
			opts.wrap.append(
				opts.tpl.replace(/##title##/g, opts.data[i].title)
								.replace(/##id##/g, opts.data[i].title.isHTML()? i: opts.data[i].title.toLowerCase())
								.replace(/##type##/g, opts.data[i].type? opts.data[i].type: "")
								.replace(/##urls##/g, opts.data[i].urls? encodeURIComponent(JSON.stringify(opts.data[i].urls)): "")
			);
		}
	};

	/*
	 * start slick slider
	 */
	this.bind_slick = function() {
		var opts = this.opts;

		if(!opts.wrap.length) {
			return false;
		}

		// start slick slider
		opts.wrap.slick({
			dots: false,
			prevArrow: false,
			nextArrow: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: false,
			variableWidth: true
		})
		.on("beforeChange", function() {
			jQuery(this).find(".slick-active").removeClass("active");
		})
		.on("afterChange", function() {
			jQuery(this).find(".slick-active").addClass("active");
		})
		.on("click", ".slick-slide", function(e) {
				e.stopPropagation();

				var item = jQuery(this),
					wrap = item.parents("[data-slider]"),
					index = item.index() - 1;

				if (wrap.slick("slickCurrentSlide") !== index) {
					wrap.slick("slickGoTo", index);
				}
		});

		// initializing
		opts.wrap.find(".slick-active").addClass("active");
	}

	/*
	 * make force sliding
	 */
	this.sel_slide = function(index) {
		this.opts.wrap.slick("slickGoTo", index);
	};

	/*
	 * activate previous item
	 */
	this.prev_slide = function() {
		this.opts.wrap.slick("slickPrev");
	};

	/*
	 * activate next item
	 */
	this.next_slide = function() {
		this.opts.wrap.slick("slickNext");
	};

	/*
	 * get activated item index
	 */
	this.get_index = function() {
		if(typeof(opts.wrap.slickCurrentSlide) != "undefined") {
			console.log(opts.wrap.slickCurrentSlide());
		}
		
		return opts.wrap.find(".active").data("slick-index");
	};

	/*
	 * start slider
	 */
	this.init = function(index) {
		index = index? index: 0;
		opts.wrap.slick("slickGoTo", index);
		opts.wrap.parents(".slider-section").addClass("active");
	};

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		opts.wrap.parents(".slider-section").removeClass("active");
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};