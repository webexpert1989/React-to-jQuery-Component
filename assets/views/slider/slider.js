/*************************
 * Slider View
 */

"use strict";

var SliderView = function(opts) {
	this.opts = {
		wrap : jQuery("[data-view-slider]"),
		opts : {}, // slider view options
		url  : [], // ajax url
		tpl  : {   // template
			app: "\
				<div class=\"app-header\">\
					<div class=\"header-title\">\
						<span class=\"title\">##title##</span>\
						<span class=\"sub-title\">##subTitle##</span>\
					</div>\
					<div class=\"header-info\">\
						<div class=\"current-time\">##date##</div>\
						<div class=\"logo-min\"><img src=\"##logo##\"></div>\
					</div>\
				</div>\
				<div class=\"slider-items-wrap\"><div class=\"slider-items\"></div></div>\
				<div class=\"slider-view-bg\"></div>\
			",
			item: "\
				<div class=\"slider-item\">\
					<h2 class=\"slider-title\">##title##</h2>\
					<div class=\"slider-wrap\">\
						<div class=\"slider-count\"><span class=\"current\">0</span>de<span class=\"total\">0</span></div>\
					</div>\
				</div>\
			"
		},
		loadStart : 0,
		loadEnd   : 15,
	};

		/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset options
		jQuery.extend(this.opts, opts);

		////
		this.init_page();
	};
	
	/*
	 * initialize page
	 */
	this.init_page = function() {
		var $this = this,
			opts = $this.opts;

		// reset total count
		var dateObj = new Date,
			pageData = {
				"title"    : opts.opts.title,
				"subTitle" : opts.opts.subTitle,
				"date"     : opts.opts.date? opts.opts.date.format_date("D n H:I"): dateObj.format_date("D n H:I"),
				"logo"     : opts.opts.logo
			},
			appHtml = opts.tpl.app;

		for(var k in pageData) {
			var regex = new RegExp("##" + k + "##", "g");
			appHtml = appHtml.replace(regex, pageData[k]);
		}

		// print slider view
		jQuery(opts.wrap).html(appHtml);
	};

	/*
	 * select type
	 */
	this.sel_view = function(selSlider) {
		var $this = this,
			opts = $this.opts;

		if(!opts.title || opts.title != selSlider.title) {
			var wrap = opts.wrap;
			wrap.find(".header-title .title").text(selSlider.title);
			wrap.find(".slider-items").html("");

			this.opts.title = selSlider.title;
			this.opts.urls = selSlider.urls;
			this.opts.sliders = [];     // slider class object
			this.opts.slidersData = []; // slider data
			this.opts.activeSlider = 0;      // start slider in first time
			this.opts.activeSliderItem = []; // active item index in each sliders

			$this.load_sliders();
		}

		return this;
	}

	/*
	 * Bind Slider
	 */
	this.load_sliders = function() {
		var $this = this,
			urls = $this.opts.urls;

		this.loadNum = this.loadNum? this.loadNum: 0;

		var ajaxUrl = $this.ajax_url(urls[this.loadNum]);
		if(ajaxUrl) {
			$this.ajax_preloader(true).load_data(ajaxUrl, function() {
				$this.loadNum++;

				if($this.loadNum < $this.opts.urls.length) {
					$this.load_sliders();
				} else {
					$this.ajax_preloader(false).bind_sliders();
				}
			});
		}
	};

	/*
	 * return ajax url
	 */
	this.ajax_url = function(url) {
		var opts = this.opts,
			start = opts.loadStart,
			end = opts.loadEnd;

		return url? url.replace(/##start##/g, start).replace(/##end##/g, end): url;
	};

	/*
	 * load json data from API by ajax calling
	 */
	this.load_data = function(url, successCallback) {
		var $this = this,
			opts = $this.opts;

		axios.get(url)
			.then(function(response) {
				var itemsData = response.data;
				if(itemsData.count > 0) {
					$this.push_data(itemsData);

					if (typeof(successCallback) == "function") {
						successCallback();
					}
				}
			})
			.catch(function (error) {
				$this.ajax_preloader(false);
				
				console.log(error);
				// alert("AJAX ERROR!");
			});
	};

	/*
	 * show spinner while ajax calling
	 */
	this.ajax_preloader = function(visible) {
		var $this = this,
			opts = $this.opts,
			slider = opts.wrap.children(".slider-items-wrap").children(".slider-items");

		if(visible) {
			if(!this.opts.ajaxLoadingItems) {
				this.opts.ajaxLoadingItems = true;
				jQuery("<div>").appendTo(slider)
					.addClass("ajax-preloader")
					.html("<div class=\"uil-spin-css\">" + "<div><div></div></div>".repeat(8) + "</div>");
			}
		} else {
			this.opts.ajaxLoadingItems = false;
			var preloader = slider.children(".ajax-preloader");
			if(preloader.length) {
				preloader.remove();
			}
		}

		return $this;
	};

	/*
	 * parse data its got from API
	 */
	this.push_data = function(itemsData) {
		var $this = this,
			parsedData = [],
			newSliderIndex = $this.opts.slidersData.length;

		// add new slider data
		this.opts.slidersData[newSliderIndex] = {
			title: slidersData[newSliderIndex].title,
			count: slidersData[newSliderIndex].count,
			data : []
		}

		// make items array for slider view from response data its got from API by ajax calling.
		//console.log(itemsData.Contenidos);
		for(var i in itemsData.Contenidos) {
			this.opts.slidersData[newSliderIndex].data.push({
				id        : itemsData.Contenidos[i].DatosEditoriales.Id,
				kind      : itemsData.Contenidos[i].DatosEditoriales.GeneroComAntena,
				title     : itemsData.Contenidos[i].DatosEditoriales.Titulo,
				date      : itemsData.Contenidos[i].DatosAccesoAnonimo.FechaFinPublicacion,
				timeStart : slidersData[0].data[i].time.start,
				timeEnd   : slidersData[0].data[i].time.end,
				thumb     : itemsData.Contenidos[i].DatosEditoriales.Imagen,
				bg        : itemsData.Contenidos[i].DatosEditoriales.Imagen,
				rating    : itemsData.Contenidos[i].DatosEditoriales.Temporada,
				indicator : itemsData.Contenidos[i].DatosAccesoAnonimo.IndicadorSubtitulosSordos,
				issue     : slidersData[0].data[i].issue
			});
		}

		return $this;
	};

	/*
	 * add slider items
	 */
	this.bind_sliders = function() {
		var opts = this.opts,
			itemsWrap = opts.wrap.find(".slider-items");

		for(var i in opts.slidersData) {
			var $slider = $(opts.tpl.item.replace(/##title##/g, opts.slidersData[i].title)).appendTo(itemsWrap);

			if(!opts.slidersData[i].title) {
				$slider.find(".slider-title").remove();
			}

			if(!opts.slidersData[i].count) {
				$slider.find(".slider-count").remove();
			}

			opts.slidersData[i].wrap = $slider.children(".slider-wrap");
			opts.sliders[i] = new Slider(opts.slidersData[i]);
			opts.activeSliderItem[i] = 0;
		}

		// start first slider
		this.active_slider(0);
	};

	/*
	 * Active slider
	 */
	this.active_slider = function($sliderIndex) {
		var $wrap = this.opts.wrap,
			$sliders = this.opts.sliders,
			$activeSlider = this.opts.activeSlider,
			$activeItem = this.opts.activeSliderItem,
			$sliderWrap = $wrap.children(".slider-items-wrap").children(".slider-items"),
			$sliderElem = $wrap.find(".slider-item");

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
				moveTop += 351; // $sliderElem.eq(i).outerHeight()
				$sliderElem.eq(i).addClass("unvisible");console.log($sliderElem.eq(i).outerHeight())
			}

			$sliderWrap.css({transform: "translateY(-" + moveTop + "px)"});

			// reset activated slider index
			this.opts.activeSlider = $sliderIndex;
		}
	};

	/*
	 * select item
	 */
	this.sel_item  = function(index) {
		var opts = this.opts;
		opts.sliders[opts.activeSlider].sel_item(index);
		return this;
	};

	/*
	 * start slider view
	 */
	this.init = function() {
		opts.wrap.addClass("active");
		return this;
	};

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		this.opts.wrap.removeClass("active");
		return this;
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};


/*************************
 * Slider
 */

"use strict";

var Slider = function(opts) {
	this.opts = {
		wrap : jQuery(".slider-item"),
		url  : "",
		data : {},
		tpl  : {
			thumb	: "\
				<div class=\"item\" data-item=\"##id##\" data-item-index=\"##index##\">\
					<div class=\"item-wrap\">\
						<div class=\"img-wrap\">\
							<img class=\"img\" src=\"##src##\" alt=\"\">\
						</div>\
						<div class=\"item-indicator complete-indicator show-##indicator##\"><img src=\"./assets/images/complete-diagonal.webp\" alt=\"\"></div>\
						<h3 class=\"item-title\">##title##</h3>\
					</div>\
				</div>\
			",
			contents : "\
				<div class=\"desc-item\">\
					<h3 class=\"item-title\">##title##</h3>\
					<div class=\"item-info\">\
						<div class=\"item-meta-info\">\
							<span class=\"item-rating\">##rating##</span>\
							<span class=\"separator\">|</span>\
							<span class=\"item-kind\">##kind##</span>\
						</div>\
						<div class=\"item-issue\"><b>Emitido</b> en ##issue##</div>\
						<div class=\"item-info\">\
							<span class=\"item-date\">##date##</span>\
							<span class=\"separator\">|</span>\
							<span class=\"item-time\">##timeStart##h - ##timeEnd##h</span>\
						</div>\
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
					.replace(/##title##/g, opts.data[i].title)
					.replace(/##indicator##/g, opts.data[i].indicator? 1: 0)
			)
			.appendTo(opts.items)
			.css("margin-right", opts.itemsMargin + "px");
		}

		// create description wrapper
		opts.itemsDesc = jQuery("<div>").appendTo(opts.wrap).addClass("items-desc");
	};

	/*
	 * make sliding with animation
	 */
	this.sel_item = function(index) {
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
			var title = opts.data[index].title.length > 24? opts.data[index].title.substring(0, 21) + "...": opts.data[index].title,
				rating = opts.data[index].rating? opts.data[index].rating: 0,
				dateObj = opts.data[index].date? new Date(parseInt(opts.data[index].date)): new Date();

			opts.itemsDesc.html(
				opts.tpl.contents
					.replace(/##title##/g, title)
					.replace(/##rating##/g, rating)
					.replace(/##kind##/g, opts.data[index].kind)
					.replace(/##issue##/g, opts.data[index].issue)
					.replace(/##date##/g, dateObj.format_date("W D"))
					.replace(/##timeStart##/g, opts.data[index].timeStart)
					.replace(/##timeEnd##/g, opts.data[index].timeEnd)
			);

			opts.itemsDesc.addClass("active");
		}, 300);

		// body background image
		$(".slider-view-bg").removeClass("active").css("background-image", "url(" + opts.data[index].bg + ")");	
		if(typeof(opts.bgtimer) == "undefined") {
			clearTimeout(opts.bgtimer);
		}

		this.opts.bgtimer = setTimeout(function() {	
			$(".slider-view-bg").addClass("active");
		}, 100);

		// count
		var count = opts.items.find(".item.active").data("item-index") + 1;
		count = count <= opts.data.length? count: 0;
		opts.count.current.text(count);
	};

	/*
	 * activate previous item
	 */
	this.prev_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index == 0) {
			this.sel_item(opts.items.find(".item").length - 1);
		} else {
			this.sel_item(index - 1);
		}
	};

	/*
	 * activate next item
	 */
	this.next_slide = function() {
		var opts = this.opts,
			index = opts.items.find(".item.active").data("item-index");

		if(index == opts.items.find(".item").length - 1) {
			this.sel_item(0);
		} else {
			this.sel_item(index + 1);
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
			this.sel_item(index);
		}
		$(".slider-view-bg").fadeIn(150);
	};

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		this.opts.wrap.removeClass("active");
		this.opts.wrap.find(".item.active").removeClass("active");
		this.opts.wrap.find(".items-desc").removeClass("active");
		$(".slider-view-bg").fadeOut(150);
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};