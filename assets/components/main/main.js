/*************************
 * Main
 */

"use strict";

var Main = function(opts) {
	this.opts = {
		wrap : jQuery("[data-slider=\"series\"]"),
		url  : "",
		data : {},
		tpl  : {
			thumb	: "\
				<div class=\"item item-##all##\" data-item-index=\"##index##\" data-view-type=\"grid\" data-ajax-url=\"##urls##\">\
					<div class=\"item-wrap\">\
						<div class=\"img-wrap\">\
							<img class=\"img\" src=\"##src##\" alt=\"\">\
						</div>\
						<div class=\"progress-bar\">\
							<div class=\"progress-bar-back\">\
								<div class=\"progress-bar-progress\" style=\"width: ##progress##%;\"></div>\
							</div>\
						</div>\
						<div class=\"item-indicator complete-indicator show-##indicator##\"><img src=\"./assets/images/complete-diagonal.webp\" alt=\"\"></div>\
					</div>\
				</div>\
			",
			contents : "\
				<div class=\"desc-item item-##all##\">\
					<h3 class=\"item-title\">##title##</h3>\
					<div class=\"item-info\">\
						<div class=\"item-info-elem\" show-##rating##>\
							<div class=\"item-rating\">\
								<span class=\"icon icon-rat-tp show-##topRating##\" aria-hidden=\"true\"></span>\
								<span class=\"icon icon-rating show-##rating##\" aria-hidden=\"true\"></span>\
							</div>\
						</div>\
						<div class=\"item-info-elem\">\
							<div class=\"item-year\">##year##</div>\
						</div>\
						<div class=\"item-info-elem show-##temporadas##\">\
							<div class=\"item-seasons\">\
								<span class=\"seasons\">##temporadas##</span> Temporadas\
							</div>\
						</div>\
					</div>\
					<div class=\"clamp-lines item-description\">\
						<div>##desc##</div>\
					</div>\
				</div>\
			"
		},
		itemsMargin : 20
	};

	/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset opts
		jQuery.extend(this.opts, opts);
		
		this.opts.count = {
			current: opts.wrap.find(".slider-count .current"),
			total: opts.wrap.find(".slider-count .total")
		};

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

		// reset total count
		opts.count.total.text(opts.data.length);

		// cleanup & create items wrap
		opts.items = jQuery("<div>").appendTo(opts.wrap).addClass("items");

		// create menu items
		for(var i in opts.data) {
			jQuery(
				opts.tpl.thumb
					.replace(/##id##/g, opts.data[i].id)
					.replace(/##index##/g, i)
					.replace(/##src##/g, opts.data[i].thumb)
					.replace(/##progress##/g, opts.data[i].progress)
					.replace(/##indicator##/g, opts.data[i].indicator? 1: 0)
					.replace(/##urls##/g, opts.url)
					.replace(/##all##/g, opts.data[i].id == "all"? "all": "")
			)
			.appendTo(opts.items)
			.css("margin-right", opts.itemsMargin + "px");
		}

		// create description wrapper
		opts.itemsDesc = jQuery("<div>").appendTo(opts.wrap).addClass("items-desc");

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
				left += jQuery(this).width() + opts.itemsMargin;
			}
		});
		opts.items.css({transform: "translateX(-" + left + "px)"});

		var itemActived = opts.items.find(".item").eq(index).addClass("active");

		// item contents
		opts.itemsDesc.removeClass("active");
		if(typeof(opts.timer) == "undefined") {
			clearTimeout(opts.timer);
		}

		this.opts.timer = setTimeout(function() {
			if(opts.data[index].id == "all") {
				opts.itemsDesc.html(
					opts.tpl.contents
						.replace(/##title##/g, opts.data[index].title)
						.replace(/##all##/g, "all")
				);
			} else {
				var desc = opts.data[index].desc.length > 180? opts.data[index].desc.substring(0, 177) + "...": opts.data[index].desc;
				opts.itemsDesc.html(
					opts.tpl.contents
						.replace(/##title##/g, opts.data[index].title)
						.replace(/##rating##/g, opts.data[index].rating? 1: 0)
						.replace(/##topRating##/g, opts.data[index].topRating? 1: 0)
						.replace(/##year##/g, opts.data[index].year)
						.replace(/##temporadas##/g, opts.data[index].temporadas)
						.replace(/##desc##/g, desc)
				);
			}

			opts.itemsDesc.addClass("active");
		}, 300);

		// body background image
		$(".slider-body-bg").removeClass("active").css("background-image", "url(" + opts.data[index].bg + ")");	
		if(typeof(opts.bgtimer) == "undefined") {
			clearTimeout(opts.bgtimer);
		}

		this.opts.bgtimer = setTimeout(function() {	
			$(".slider-body-bg").addClass("active");
		}, 100);

		// count
		var count = opts.items.find(".item.active").data("item-index") + 1;
		count = count < opts.data.length? count: 0;
		opts.count.current.text(count);
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
		this.opts.wrap.find(".items-desc").removeClass("active");
		$(".slider-body-bg").fadeOut(150);
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};