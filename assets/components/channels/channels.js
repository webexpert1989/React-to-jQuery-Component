/*************************
 * Channel
 */

"use strict";

var Channels = function(opts) {
	this.opts = {
		wrap : jQuery("[data-slider=\"channels\"]"),
		data : {},
		tpl  : {
			thumb    : "\
				<div id=\"item-##index##\" class=\"item\">\
					<div class=\"item-wrap\">\
						<img src=\"##src##\" alt=\"chanels\">\
					</div>\
				</div>\
			",
			contents : "\
				<div class=\"desc-item\">\
					<div class=\"item-title\">##title##</div>\
					<div class=\"item-episode\">##episode##</div>\
					<div class=\"item-progress\">\
						<div class=\"item-startTime\">##startTime##</div>\
						<div class=\"item-endTime\">##endTime##</div>\
						<div class=\"item-progressbar\"><div style=\"width: ##progress##%\"></div></div>\
					</div>\
				</div>\
			"
		},
		itemsIndex  : 0,
		itemsMargin : 20
	};

	/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset options
		jQuery.extend(this.opts, opts);

		////
		this.bind_items();
	};
	
	/*
	 * create items
	 */
	this.bind_items = function() {
		if(!this.opts.wrap.length) {
			return false;
		}

		// cleanup & create items wrap
		this.opts.items = jQuery("<div>").appendTo(this.opts.wrap.html("")).addClass("items");

		// create menu items
		var index = 0;
		for(var i in this.opts.data) {
			var newItemHtml = this.opts.tpl.thumb.replace(/##src##/g, this.opts.data[i].thumb)
																							.replace(/##index##/g, i),
				newItem = jQuery(newItemHtml).appendTo(this.opts.items).css("margin-right", this.opts.itemsMargin + "px");

			newItem = newItem.attr({"data-item": i, "data-item-index": index});
			index++;
		}

		// create description wrapper
		this.opts.itemsDesc = jQuery("<div>").appendTo(this.opts.wrap).addClass("items-desc");
	};

	/*
	 * make sliding with animation
	 */
	this.sel_slide = function(index) {
		var options = this.opts;

		// init index	
		index = index? index: 0;

		// if current item
		if(options.items.find(".item.active").data("item-index") == index) {
			return false;
		}

		// remove active class of original item and make new activated item
		options.items.find(".item.active").removeClass("active");

		var left = 0;
		options.items.find(".item").each(function(i) {
			if (i < index) {
				left += jQuery(this).width() + options.itemsMargin;
			}
		});

		options.items.css({transform: "translateX(-" + left + "px)"});

		var itemActived = options.items.find(".item").eq(index).addClass("active"),
			itemId = itemActived.data("item");

		// item contents
		options.itemsDesc.removeClass("active");
		if(typeof(options.timer) == "undefined") {
			clearTimeout(options.timer);
		}

		options.itemsDesc.html(options.tpl.contents.replace(/##title##/g, options.data[itemId].title)
																							.replace(/##episode##/g, options.data[itemId].episode)
																							.replace(/##startTime##/g, options.data[itemId].startTime)
																							.replace(/##endTime##/g, options.data[itemId].endTime)
																							.replace(/##progress##/g, options.data[itemId].progress));
			
		this.opts.timer = setTimeout(function() {
			options.itemsDesc.addClass("active");
		}, 300);
	};

	/*
	 * activate previous item
	 */
	this.prev_slide = function() {
		var index = this.opts.items.find(".item.active").data("item-index");

		if(index == 0) {
			return false;
		}
		this.sel_slide(index - 1);
	};

	/*
	 * activate next item
	 */
	this.next_slide = function() {
		var index = this.opts.items.find(".item.active").data("item-index");

		if(index == this.opts.items.find(".item").length - 1) {
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

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		this.opts.wrap.removeClass("active");
		this.opts.wrap.find(".items-desc").removeClass("active");
		this.opts.wrap.find(".item.active").removeClass("active");
	};

	/*
	 * Pass options when class instantiated
	 */
	this.construct(opts);
};
