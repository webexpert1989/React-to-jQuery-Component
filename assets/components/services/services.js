/*************************
 * Channel
 */

"use strict";

var Services = function(opts) {
	this.opts = {
		wrap : jQuery(".services-slider"),
		data : {},
		tpl  : "\
			<div id=\"item-##index##\" class=\"item\">\
				<div class=\"item-wrap\">\
					<img src=\"##src##\" alt=\"chanels\" title=\"##title##\">\
				</div>\
			</div>\
		",
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
		var index = 0;
		for(var i in opts.data) {
			var newItemHtml = opts.tpl.replace(/##src##/g, opts.data[i].thumb)
																	 .replace(/##title##/g, opts.data[i].title)
																	 .replace(/##index##/g, i),
				newItem = jQuery(newItemHtml).appendTo(opts.items).css("margin-right", opts.itemsMargin + "px");
			newItem = newItem.attr({"data-item": i, "data-item-index": index});
			index++;
		}
	};

	/*
	 * make sliding with animation
	 */
	this.sel_slide = function(index) {
		var opts = this.opts;

		// init index	
		index = index? index: 0;

		// if current item
		if(opts.items.find(".item.active").data("item-index") == index) {
			return false;
		}

		// remove active class of original item and make new activated item
		var itemWidth = opts.items.find(".item").not(".active").first().width(),
			left = 0;

		opts.items.find(".item.active").removeClass("active");
		opts.items.find(".item").each(function(i) {
			if (i < index) {
				left += itemWidth + opts.itemsMargin;
			} else if(i == index) {
				jQuery(this).addClass("active");
			}
		});

		opts.items.css({transform: "translateX(-" + left + "px)"});

		opts.count.current.text(index + 1);
	};

	/*
	 * activate previous item
	 */
	this.prev_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index == 0) {
			return false;
		}

		this.sel_slide(index - 1);
	};

	/*
	 * activate next item
	 */
	this.next_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index == opts.items.find(".item").length - 1) {
			return false;
		}
		this.sel_slide(index + 1);
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
	};

	this.destroy = function() {
		this.opts.wrap.removeClass("active");
		this.opts.wrap.find(".item.active").removeClass("active");
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};