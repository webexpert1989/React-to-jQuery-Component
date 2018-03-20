/*************************
 * Channel
 */

"use strict";

var Temas = function(opts) {
	this.opts = {
		wrap : jQuery(".temas-slider"),
		data : {},
		tpl  : "\
			<div id=\"item-##index##\" class=\"item\">\
				<div class=\"item-wrap\">\
					<span class=\"tag\">##tag##</span>\
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
		this.opts.items = jQuery("<div>").appendTo(opts.wrap).addClass("items");

		// create menu items
		var index = 0;
		for(var i in opts.data) {
			var newItemHtml = opts.tpl.replace(/##tag##/g, opts.data[i])
																.replace(/##index##/g, i),
				newItem = jQuery(newItemHtml).appendTo(opts.items).css("margin-right", opts.itemsMargin + "px");
			newItem = newItem.attr({"data-item": i, "data-item-index": index});
			index++;
		}

		opts.wrap.children(".temas-slider-count").children(".total").text(index);
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
				left += $(this).width() + opts.itemsMargin;
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

		if(index > 0) {
			this.sel_slide(index - 1);
		}
	};

	/*
	 * activate next item
	 */
	this.next_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index < opts.items.find(".item").length - 1) {
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
	};

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		this.opts.wrap.removeClass("active");
		this.opts.wrap.find(".item.active").removeClass("active");
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};