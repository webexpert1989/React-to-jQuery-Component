/*************************
 * Grid View
 */

"use strict";

var GridView = function(opts) {
	this.opts = {
		wrap       : jQuery("[data-grid-view]"),
		opts       : {}, // grid view options
		url        : "", // ajax url
		pageItems  : 15, // loading items number in each time
		currentPage: 0,  // current loaded page number
		totalItems : 0,  // total page number
		itemColNum : 5,  // item columns
		tpl        : {   // template
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
					<div class=\"nav-indicator\">\
						<span class=\"icon icon-up\" aria-hidden=\"true\"></span>\
						<span class=\"text\">##label:return##</span>\
					</div>\
				</div>\
				<div class=\"grid-actions\">\
					<div class=\"sort\" data-grid-action>\
						<label>##label:sort##:</label>\
						<span>##sort##</span>\
					</div>\
					<div class=\"filter\">\
						<button class=\"add-filter\" data-grid-action>##label:addFilter## <span class=\"icon icon-plus\" aria-hidden=\"true\"></span></button>\
						##filters##\
					</div>\
					<div class=\"grid-item-count\">(<span class=\"grid-item-count-num\">##itemNum##</span>)</div>\
				</div>\
				<div class=\"grid-items-wrap\"><div class=\"grid-items\"></div></div>\
				<div class=\"grid-desc\"></div>\
			",
			filter: "<button data-grid-action>##filter## <span class=\"icon icon-close\" aria-hidden=\"true\"></span></button>",

			item: "\
				<div class=\"item\" data-item=\"##id##\" data-item-index=\"##index##\">\
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

			contents: "\
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
				<div class=\"item-description\">\
					<div>##desc##</div>\
				</div>\
				<div class=\"remote-action-wrap\">##remoteActions##</div>\
			",
			contentsRemoteAction: "<div class=\"remote-action remote-action-##color##\"><span class=\"remote-icon\"></span> ##text##</div>"
		}
	};

	/*
	 * Constructor
	 */
	this.construct = function(opts) {
		// reset opts
		jQuery.extend(this.opts, opts);

		// add items
		this.opts.data = [];

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
			selFilters = "";

		for(var i in opts.opts.filters) {
			selFilters += opts.tpl.filter.replace(/##filter##/g, opts.opts.filters[i]);
		}

		var pageData = {
				"title"          : opts.opts.title,
				"subTitle"       : opts.opts.subTitle,
				"date"           : opts.opts.date? opts.opts.date.format_date("D n H:I"): dateObj.format_date("D n H:I"),
				"logo"           : opts.opts.logo,
				"label:return"   : opts.opts.label.return,
				"label:sort"     : opts.opts.label.sort,
				"sort"           : opts.opts.sort,
				"label:addFilter": opts.opts.label.addFilter,
				"filters"        : selFilters,
				"itemNum"        : opts.data.length
			},
			appHtml = opts.tpl.app;

		for(var k in pageData) {
			var regex = new RegExp("##" + k + "##", "g");
			appHtml = appHtml.replace(regex, pageData[k]);
		}

		// print grid view
		jQuery(opts.wrap).html(appHtml);

		// save element object
		this.opts.elem = {
			gridItems: jQuery(opts.wrap).find(".grid-items"),
			gridDesc : jQuery(opts.wrap).find(".grid-desc")
		};
	};

	/*
	 * select item
	 */
	this.sel_item = function(index) {
		var $this = this,
			opts = $this.opts,
			elem = opts.elem,
			data = opts.data;

		// init index	
		index = typeof(index) == "undefined" || index < 0? 0: index;
		index = index < opts.data.length? index: opts.data.length - 1;

		// if current item
		if(elem.gridItems.find(".item.active").data("item-index") == index || typeof(data[index]) == "undefined") {
			return false;
		}

		// cleanup original activated item
		this.unsel_item();
		
		// active new item by index
		var hideRowIndex = Math.floor(index/ opts.itemColNum),
			hideRowHeight = hideRowIndex * elem.gridItems.find(".item").first().outerHeight(true),
			hideRowItem = hideRowIndex * opts.itemColNum;
		elem.gridItems.find(".item").removeClass("hidden").each(function(index) {
			if(index < hideRowItem) {
				$(this).addClass("hidden");
			}
		});
		elem.gridItems
			.css({transform: "translateY(-" + hideRowHeight + "px)"}) // active row that has activated item.
			.find(".item[data-item-index=\"" + index + "\"]").addClass("active");          // add active class to activated item

		// update description
		var selectedItem = data[index],
			remoteActions = "";

		for(var i in selectedItem.remoteActions) {
			var remote = opts.opts.remote[selectedItem.remoteActions[i]];
			if(remote) {
				remoteActions += opts.tpl.contentsRemoteAction.replace(/##color##/g, remote.color)
																											.replace(/##text##/g, remote.text);
			}
		}

		elem.gridDesc
			.html(opts.tpl.contents
				.replace(/##title##/g, selectedItem.title.length > 28? selectedItem.title.substring(0, 24) + "...": selectedItem.title)
				.replace(/##rating##/g, selectedItem.rating? 1: 0)
				.replace(/##topRating##/g, selectedItem.topRating? 1: 0)
				.replace(/##year##/g, selectedItem.year)
				.replace(/##temporadas##/g, selectedItem.temporadas? selectedItem.temporadas: 0)
				.replace(/##desc##/g, selectedItem.desc.length > 180? selectedItem.desc.substring(0, 177) + "...": selectedItem.desc)
				.replace(/##remoteActions##/g, remoteActions))
			.addClass("active");

		this.opts.active.gridItem = index;
	};

	/*
	 * remove active class from activated items
	 */
	this.unsel_item = function() {
		var opts = this.opts;

		opts.elem.gridItems.find(".item.hidden").removeClass("hidden");
		opts.elem.gridItems.find(".item.active").removeClass("active");
		opts.elem.gridDesc.removeClass("active").html("");

		// active row that has activated item.
		opts.elem.gridItems.css({transform: "translateY(0)"});
	};

	/*
	 * select grid action(sort, filter)
	 */
	this.sel_action = function(index) {
		var actionsWrap = this.opts.wrap.children(".grid-actions"),
			action = actionsWrap.find("[data-grid-action]");

		// init index	
		index = typeof(index) == "undefined" || index < 0? 0: index;
		index = index < action.length? index: action.length - 1;

		actionsWrap.find("[data-grid-action].active").removeClass("active");
		action.eq(index).addClass("active");

		this.opts.active.action = index;
	}

	/*
	 * remove active class from activated actions
	 */
	this.unsel_action = function() {
		var actionsWrap = this.opts.wrap.children(".grid-actions"),
			action = actionsWrap.find("[data-grid-action]");

		actionsWrap.removeClass("focused");
		actionsWrap.find("[data-grid-action].active").removeClass("active");
	};

	/*
	 * select type
	 */
	this.sel_view = function(url) {
		var $this = this,
			opts = $this.opts;

		if(!opts.url || opts.url != url) {
			var wrap = opts.wrap;
			wrap.find(".grid-item-count-num").text(0);
			wrap.children(".grid-items-wrap").children(".grid-items").html("");

			this.opts.data = [];
			this.opts.currentPage = 0;
			this.opts.url = url;

			$this.load_data();
		}

		return this;
	}

	/*
	 * return ajax url
	 */
	this.ajax_url = function(start, end) {
		return this.opts.url? this.opts.url.replace(/##start##/g, start).replace(/##end##/g, end): this.opts.url;
	};

	/*
	 * load json data from API by ajax calling
	 */
	this.load_data = function(successCallback) {
		var $this = this,
			opts = $this.opts,
			startItemIndex = opts.currentPage,
			endItemIndex = opts.currentPage > 0? opts.currentPage + opts.pageItems - 1: opts.currentPage + opts.pageItems;

		if(opts.totalItems > 0 && opts.currentPage >= opts.totalItems - 1 || opts.ajaxLoadingItems) {
			return;
		}

		var ajaxUrl = $this.ajax_url(startItemIndex, endItemIndex);
		if(!ajaxUrl) {
			return;
		}

		$this.ajax_preloader(true);
		axios.get(ajaxUrl)
			.then(function(response) {
				$this.ajax_preloader(false);

				var itemsData = response.data;
				if(itemsData.count > 0) {
					$this.parse_data(itemsData);

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
	 * parse data its got from API
	 */
	this.parse_data = function(itemsData) {
		var parsedData = [];

		// make items array for grid view from response data its got from API by ajax calling.
		//console.log(itemsData.Contenidos);
		for(var i in itemsData.Contenidos) {
			parsedData.push({
				id            : itemsData.Contenidos[i].DatosEditoriales.Id,
				title         : itemsData.Contenidos[i].DatosEditoriales.Titulo,
				desc          : gridData[i].desc,
				thumb         : itemsData.Contenidos[i].DatosEditoriales.Imagen,
				year          : gridData[i].year,
				temporadas    : itemsData.Contenidos[i].DatosEditoriales.Temporada,
				progress      : gridData[i].progress,
				indicator     : itemsData.Contenidos[i].DatosAccesoAnonimo.IndicadorSubtitulosSordos,
				rating        : gridData[i].rating,
				topRating     : gridData[i].topRating,
				remoteActions : gridData[i].remoteActions // sample: ["record", "filter", "gotostart", "menu"]
			});
		}

		//////////////////////////////////
		// rearrange grid items and options by new item data
		var $this = this,
			opts = $this.opts,
			newItemsNum = Math.max(parsedData.length, opts.pageItems);

		// update items data, total number
		this.opts.currentPage += newItemsNum;
		this.opts.totalItems = itemsData.totalCount? itemsData.totalCount: 0;
		this.opts.data = opts.data.concat(parsedData); // append new data to current item list

		// update total items number
		opts.wrap.find(".grid-item-count-num").text(this.opts.totalItems);

		// add items
		$this.append_items(parsedData, newItemsNum);
		return $this;
	};

	/*
	 * add grid items
	 */
	this.append_items = function(parsedData, newItemsNum) {
		var $this = this,
			opts = $this.opts,
			grid = opts.wrap.children(".grid-items-wrap"),
			startIndex = grid.find(".item").length;

		// create grid items
		for(var i = 0; i < newItemsNum; i++) {
			jQuery(
				opts.tpl.item.replace(/##id##/g, parsedData[i].id)
										 .replace(/##index##/g, i + startIndex)
										 .replace(/##src##/g, parsedData[i].thumb)
										 .replace(/##progress##/g, parsedData[i].progress)
										 .replace(/##indicator##/g, parsedData[i].indicator? 1: 0)
			).appendTo(opts.elem.gridItems);
		}

		if(grid.hasClass("focused") && !grid.find(".item.active").length) {
			$this.sel_item();
		}
	};

	/*
	 * show spinner while ajax calling
	 */
	this.ajax_preloader = function(visible) {
		var $this = this,
			opts = $this.opts,
			grid = opts.wrap.children(".grid-items-wrap").children(".grid-items");

		if(visible) {
			this.opts.ajaxLoadingItems = true;
			jQuery("<div>").appendTo(grid)
				.addClass("ajax-preloader")
				.html("<div class=\"uil-spin-css\">" + "<div><div></div></div>".repeat(8) + "</div>");
		} else {
			this.opts.ajaxLoadingItems = false;
			var preloader = grid.children(".ajax-preloader");
			if(preloader.length) {
				preloader.remove();
			}
		}
	};

	/*
	 * get activated item index
	 */
	this.get_index = function() {
		return this.opts.elem.gridItems.find(".item.active").data("item-index");
	};

	/*
	 * start grid view
	 */
	this.init = function(unactive) {
		var $this = this,
			opts = $this.opts,
			wrap = opts.wrap;

		opts.active = {
			action  : 0,
			gridItem: 0
		};

		opts.wrap.addClass("active");
		wrap.children(".app-header").removeClass("focused");
		wrap.children(".grid-actions").removeClass("focused");
		wrap.children(".grid-items-wrap").addClass("focused");

		if(opts.data.length) {
			$this.sel_item();
		}

		return this;
	};

	/*
	 * destroy slider
	 */
	this.destroy = function() {
		var $this = this,
			opts = $this.opts;

		opts.active = {
			action  : 0,
			gridItem: 0
		};

		opts.wrap.removeClass("active");
		
		$this.unsel_item();
		return $this;
	};

	/*
	 * move focus up
	 */
	this.section_up = function() {
		var $this = this,
			opts = $this.opts,
			wrap = opts.wrap,
			header = wrap.children(".app-header"),
			action = wrap.children(".grid-actions"),
			grid = wrap.children(".grid-items-wrap");


		if(action.hasClass("focused")) {
			$this.unsel_action();
			return true;
		}

		if(header.hasClass("focused")) {
			header.removeClass("focused");

			$this.destroy();
			return false;
		}

		if(grid.hasClass("focused")) {
			var newActiveItemIndex = grid.find(".item.active").index() - opts.itemColNum;

			if(newActiveItemIndex >= 0) {
				$this.sel_item(newActiveItemIndex);
			} else {
				grid.removeClass("focused");
				$this.unsel_item();

				header.addClass("focused");
				action.addClass("focused");
				$this.sel_action(opts.active.action);
			}
			return true;
		}

		return;
	};

	/*
	 * move focus down
	 */
	this.section_down = function() {
		var $this = this,
			opts = $this.opts,
			wrap = opts.wrap,
			header = wrap.children(".app-header"),
			action = wrap.children(".grid-actions"),
			grid = wrap.children(".grid-items-wrap");


		if(grid.hasClass("focused")) {
			var activeItemIndex = grid.find(".item.active").index(),
				index = activeItemIndex + opts.itemColNum;

			$this.sel_item(index);

			// load more items if selected last grid item
			if(index >= opts.data.length - 1 || Math.round(index / opts.itemColNum) >= Math.floor(opts.data.length / opts.itemColNum) - 2 ) {
				$this.load_data();
			}

			return true;
		}
		
		if(action.hasClass("focused")) {
			header.removeClass("focused");
			$this.unsel_action();

			grid.addClass("focused");
			$this.sel_item(opts.active.gridItem);

			return true;
		}

		if(header.hasClass("focused")) {
			action.addClass("focused");
			$this.sel_action(opts.active.action);
			return true;
		}

		header.addClass("focused");
		return false;
	};

	/*
	 * focus move to left
	 */
	this.focus_left = function() {
		var $this = this,
			wrap = $this.opts.wrap,
			action = wrap.children(".grid-actions"),
			grid = wrap.children(".grid-items-wrap");

		if(action.hasClass("focused")) {
			return $this.sel_action(action.find("[data-grid-action].active").index() - 1);
		}

		if(grid.hasClass("focused")) {
			return $this.sel_item(grid.find(".item.active").index() - 1);
		}
	};

	/*
	 * focus move to right
	 */
	this.focus_right = function() {
		var $this = this,
			wrap = $this.opts.wrap,
			action = wrap.children(".grid-actions"),
			grid = wrap.children(".grid-items-wrap");

		if(action.hasClass("focused")) {
			var activatedIndex = 0;
			action.find("[data-grid-action]").each(function(index) {
				if($(this).hasClass("active")) {
					activatedIndex = index;
				}
			});
			return $this.sel_action(activatedIndex + 1);
		}

		if(grid.hasClass("focused")) {
			return $this.sel_item(grid.find(".item.active").index() + 1);
		}
	};

	/*
	 * Pass opts when class instantiated
	 */
	this.construct(opts);
};