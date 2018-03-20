/*************************
 * Main
 */

"use strict";

var Main = function(opts) {
	this.opts = {
		wrap : jQuery("[data-slider=\"main\"]"),
		data : [],
		tpl  : {
			thumb	: "\
				<div class=\"item\" data-item=\"##id##\" data-item-index=\"##index##\">\
					<div class=\"item-wrap\">\
						<img class=\"img\" src=\"##src##\" alt=\"\">\
					</div>\
				</div>\
			"
		}
	};

	/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset opts
		jQuery.extend(this.opts, opts);

		////
		this.bind_items();
	};
	
	/*
	 * create items
	 */
	this.bind_items = function() {
		var opts = this.opts;

		if(!opts.wrap.length) {
			return false;
		}

		// dots
		opts.dots = jQuery("<div>").appendTo(opts.wrap).addClass("dots");

		// cleanup & create items wrap
		opts.items = jQuery("<div>").appendTo(opts.wrap).addClass("items");

		// create menu items
		for(var i in opts.data) {
			jQuery(
				opts.tpl.thumb
					.replace(/##id##/g, opts.data[i].id)
					.replace(/##index##/g, i)
					.replace(/##src##/g, opts.data[i].thumb)
			)
			.appendTo(opts.items);

			jQuery("<span>").appendTo(opts.dots);
		}

		// body background image
		if(!$(".slider-body-bg").length) {
			$("<div>").prependTo("body").addClass("slider-body-bg");
		}
	};

	/*
	 * make sliding with animation
	 */
	this.sel_slide = function(index) {
		var opts = this.opts;

		// init index	
		index = typeof(index) != "undefined"? index: 1;

		// if current item
		if(opts.items.find(".item.active").data("item-index") == index) {
			return false;
		}

		// remove active class of original item and make new activated item
		var left = 0;

		opts.items.find(".item.active").removeClass("active");
		opts.items.find(".item").each(function(i) {
			if (i < index) {
				left += jQuery(this).outerWidth();
			}
		});
		opts.items.css({transform: "translateX(-" + left + "px)"});

		var itemActived = opts.items.find(".item").eq(index).addClass("active");

		// body background image
		$(".slider-body-bg").removeClass("active").css("background-image", "url(" + opts.data[index].bg + ")");	
		if(typeof(opts.bgtimer) == "undefined") {
			clearTimeout(opts.bgtimer);
		}

		this.opts.bgtimer = setTimeout(function() {	
			$(".slider-body-bg").addClass("active");
		}, 100);

		// dots
		opts.dots.children().removeClass("active")
			.eq(index).addClass("active");
	};

	/*
	 * activate previous item
	 */
	this.prev_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index == 0) {
			this.sel_slide(opts.items.find(".item").length - 1);
		} else {
			this.sel_slide(index - 1);
		}
	};

	/*
	 * activate next item
	 */
	this.next_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index == opts.items.find(".item").length - 1) {
			this.sel_slide(0);
		} else {
			this.sel_slide(index + 1);
		}
	};

	/*
	 * get activated item index
	 */
	this.get_index = function() {
		return this.opts.wrap.find(".item.active").index();
	};

	/*
	 * start slider
	 */
	this.init = function(index) {
		if(!this.opts.items.find(".item.active").length) {
			this.sel_slide(index);
		}
		$(".slider-body-bg").fadeIn(150);
	};

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		this.opts.wrap.removeClass("active");
		this.opts.wrap.find(".item.active").removeClass("active");
		$(".slider-body-bg").fadeOut(150);
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};