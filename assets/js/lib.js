
if (!String.prototype.isHTML) {
	String.prototype.isHTML = function () {
		return /<[a-z][\s\S]*>/i.test("" + this);
	}
}

// repeat substring
if (!String.prototype.repeat) {

	String.prototype.repeat = function (count) {
		"use strict";

		if (this == null) {
			throw new TypeError("can't convert " + this + " to object");
		}
		var str = '' + this;
		count = +count;
		if (count != count) {
			count = 0;
		}
		if (count < 0) {
			throw new RangeError("repeat count must be non-negative");
		}
		if (count == Infinity) {
			throw new RangeError("repeat count must be less than infinity");
		}
		count = Math.floor(count);
		if (str.length == 0 || count == 0) {
			return '';
		}
		// Ensuring count is a 31-bit integer allows us to heavily optimize the
		// main part. But anyway, most current (August 2014) browsers can't handle
		// strings 1 << 28 chars or longer, so:
		if (str.length * count >= 1 << 28) {
			throw new RangeError("repeat count must not overflow maximum string size");
		}
		var rpt = '';
		for (; ;) {
			if ((count & 1) == 1) {
				rpt += str;
			}
			count >>>= 1;
			if (count == 0) {
				break;
			}
			str += str;
		}
		// Could we try:
		// return Array(count + 1).join(this);
		return rpt;
	}
}

// date prototype function
if (!Date.prototype.format_date) {
	Date.prototype.format_date = function (format) {
		var dateInfo = {},
			monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			dayName = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

		dateInfo["Y"] = this.getFullYear();
		dateInfo["y"] = dateInfo["Y"].toString().substring(2, 2);
		dateInfo["M"] = this.getMonth() + 1;
		dateInfo["m"] = dateInfo["M"] < 9 ? "0" + dateInfo["M"] : dateInfo["M"]; // getMonth() is zero-based
		dateInfo["D"] = this.getDate();
		dateInfo["d"] = dateInfo["D"] < 10 ? "0" + dateInfo["D"] : dateInfo["D"];
		dateInfo["H"] = this.getHours();
		dateInfo["h"] = dateInfo["H"] < 10 ? "0" + dateInfo["H"] : dateInfo["H"];
		dateInfo["I"] = this.getMinutes();
		dateInfo["i"] = dateInfo["I"] < 10 ? "0" + dateInfo["I"] : dateInfo["I"];
		dateInfo["S"] = this.getSeconds();
		dateInfo["s"] = dateInfo["S"] < 10 ? "0" + dateInfo["S"] : dateInfo["S"];
		dateInfo["N"] = monthName[this.getMonth()];
		dateInfo["n"] = monthName[this.getMonth()].substring(0, 3);
		dateInfo["W"] = dayName[this.getDay()];
		dateInfo["w"] = dayName[this.getDay()].substring(0, 3);

		for (var i in dateInfo) {
			var reg = new RegExp(i, "g");
			format = format.replace(reg, dateInfo[i]);
		}

		return format;
	};
}

// date prototype function
if (!Date.prototype.getWeek) {
	Date.prototype.getWeek = function() {
		var date = new Date(this.getTime());
		date.setHours(0, 0, 0, 0);
		// Thursday in current week decides the year.
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		// January 4 is always in week 1.
		var week1 = new Date(date.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	};
}