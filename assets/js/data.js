// Home Sliders Data
var homeData = [
	{
		type : "menu",
		title: "",
		count: false,
		data : [
			{
				title: "Mi TV",
				type: "slider", 
				urls: [
					"http://akamaicache.dof6.com/vod/yomvi.svc/lg/contents/browse?profile=ANONIMO&mediaType=FOTOV&parentalRating=M18&showNonRated=true&start=1&end=15&showseries=series&mode=vod&sort=VA&filter=MA-GBLCICLO17,TD-CUP,AD-SINX",
					"http://akamaicache.dof6.com/vod/yomvi.svc/lg/contents/browse?profile=ANONIMO&mediaType=FOTOV&parentalRating=M18&showNonRated=true&start=1&end=15&showseries=series&mode=vod&sort=VA&filter=MA-GBLCICLO12,AD-SINX&showSeries=series",
					"http://akamaicache.dof6.com/vod/yomvi.svc/lg/contents/browse?profile=ANONIMO&mediaType=FOTOV&parentalRating=M18&showNonRated=true&start=1&end=15&showseries=series&mode=vod&sort=VA&filter=TD-CUP&topic=CN"
				]
			},
			{
				title: "Cine", 
				type: "grid",
				urls: [
					"http://akamaicache.dof6.com/vod/yomvi.svc/lg/contents/browse?start=##start##&end=##end##&profile=ANONIMO&mediaType=FOTOV&mode=vod&parentalRating=M18&showNonRated=true&showseries=series&sort=VA&topic=SR&filter=TD-CUP"
				]
			},
			{title: "Series"},
			{title: "Deportes"},
			{title: "Documentales"},
			{title: "Infantil"},
			{title: "Programas"},
			{title: "Adulto"},
			{title: "<span class='icon icon-gear' aria-hidden='true'></span>"},
			{title: "<span class='icon icon-search' aria-hidden='true'></span>"}
		]
	},
	{
		type : "channels",
		title: "Mis últimos canales",
		count: false,
		data : {
			TVE: {
				thumb: "./assets/images/TVE.png",
				title: "Telediario 2",
				episode: "Informativos",
				startTime: "21:00",
				endTime: "22:05",
				progress: 15
			},
			LA2: {
				thumb: "./assets/images/LA2.png",
				title: "Brain Games",
				episode: 'Ep. 1 "Watch This!"',
				startTime: "21:00",
				endTime: "22:30",
				progress: 8
			},
			A3: {
				thumb: "./assets/images/A3.png",
				title: "Antena 3 Noticias 2",
				episode: "Informativos",
				startTime: "21:00",
				endTime: "21:30",
				progress: 20
			},
			C4: {
				thumb: "./assets/images/C4.png",
				title: "Ven a cenar conmigo",
				episode: "Concursos",
				startTime: "20:30",
				endTime: "21:30",
				progress: 5
			},
			T5: {
				thumb: "./assets/images/T5.png",
				title: "Pasapalabra",
				episode: "Concursos",
				startTime: "20:05",
				endTime: "21:05",
				progress: 100
			},
			SEXTA: {
				thumb: "./assets/images/SEXTA.png",
				title: "Estación Sexta",
				episode: "Deportes",
				startTime: "20:55",
				endTime: "21:05",
				progress: 23
			},
			CPLUS: {
				thumb: "./assets/images/CPLUS.png",
				title: "El día después",
				episode: "Ep. 18",
				startTime: "20:50",
				endTime: "22:00",
				progress: 60
			}
		}
	},
	{
		type : "series",
		title: "Series",
		count: true,
		url  : "http://akamaicache.dof6.com/vod/yomvi.svc/lg/contents/browse?start=##start##&end=##end##&profile=ANONIMO&mediaType=FOTOV&mode=vod&parentalRating=M18&showNonRated=true&showseries=series&sort=VA&topic=CN",
		data : [
			{
				id: "1111111",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_h.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				temporadas: 3,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111112",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_h.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				temporadas: 0,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111113",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_h.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				temporadas: 3,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111114",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_h.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				temporadas: 0,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111115",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_h.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				temporadas: 3,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111116",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_h.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				temporadas: 0,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111117",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_h.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				temporadas: 3,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111118",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_h.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				temporadas: 0,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "all",
				title: "Ver todo",
				thumb: "./assets/images/view-all.webp",
				bg: "./assets/images/view-all.webp"
			}
		]
	},
	{
		type : "movies",
		title: "Movies",
		count: true,
		data : [
			{
				id: "1111111",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_v.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				duration: 120,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111112",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_v.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				duration: 160,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111113",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_v.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				duration: 120,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111114",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_v.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				duration: 160,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111115",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_v.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				duration: 120,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111116",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_v.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				duration: 160,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111117",
				title: "Mr. Robot",
				desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
				thumb: "./assets/images/1321119-caratula_v.jpg",
				bg: "./assets/images/1321119-fondo_1.webp",
				year: 2015,
				duration: 120,
				progress: 60,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "1111118",
				title: "Piratas del Caribe",
				desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
				thumb: "./assets/images/1282817-caratula_v.jpg",
				bg: "./assets/images/1282817-fondo_1.webp",
				year: 2015,
				duration: 160,
				progress: 30,
				indicator: true,
				rating: true,
				topRating: true 
			},
			{
				id: "all",
				title: "Ver todo",
				thumb: "./assets/images/view-all.webp",
				bg: "./assets/images/view-all.webp",
			}
		]
	},
	{
		type : "services",
		title: "Services",
		count: true,
		data : [
			{
				title: "NETFLIX",
				thumb: "./assets/images/netflix.webp"
			},
			{
				title: "HBO",
				thumb: "./assets/images/hbo.webp"
			},
			{
				title: "amazon",
				thumb: "./assets/images/amazon.webp"
			},
			{
				title: "mitele",
				thumb: "./assets/images/mitele.webp"
			},
			{
				title: "ATRES PLAYER",
				thumb: "./assets/images/atres.webp"
			}
		]
	},
	{
		type : "actors",
		title: "Actors",
		count: true,
		data : [
			{
				name: "BD Wong",
				photo: "./assets/images/foto1.jpg"
			},
			{
				name: "Bobby Cannavale",
				photo: "./assets/images/foto2.jpg"
			},
			{
				name: "Carly Chaikin",
				photo: "./assets/images/foto3.jpg"
			},
			{
				name: "Christian Slater",
				photo: "./assets/images/foto4.jpg"
			},
			{
				name: "Grace Gummer",
				photo: "./assets/images/foto5.jpg"
			},
			{
				name: "Joey Bada",
				photo: "./assets/images/foto6.jpg"
			},
			{
				name: "Martin Wallstrom",
				photo: "./assets/images/foto7.jpg"
			},
			{
				name: "Michael Cristofer",
				photo: "./assets/images/foto8.jpg"
			},
			{
				name: "Portia Doubleday",
				photo: "./assets/images/foto9.jpg"
			},
			{
				name: "Rami Malek",
				photo: "./assets/images/foto10.jpg"
			},
			{
				name: "Sandrine Holt",
				photo: "./assets/images/foto11.jpg"
			},
			{
				name: "Stephanie Corneliussen",
				photo: "./assets/images/foto12.jpg"
			}
		]
	},
	{
		type : "channels",
		title: "Mis últimos canales",
		count: false,
		data : {
			TVE: {
				thumb: "./assets/images/TVE.png",
				title: "Telediario 2",
				episode: "Informativos",
				startTime: "21:00",
				endTime: "22:05",
				progress: 15
			},
			LA2: {
				thumb: "./assets/images/LA2.png",
				title: "Brain Games",
				episode: 'Ep. 1 "Watch This!"',
				startTime: "21:00",
				endTime: "22:30",
				progress: 8
			},
			A3: {
				thumb: "./assets/images/A3.png",
				title: "Antena 3 Noticias 2",
				episode: "Informativos",
				startTime: "21:00",
				endTime: "21:30",
				progress: 20
			},
			C4: {
				thumb: "./assets/images/C4.png",
				title: "Ven a cenar conmigo",
				episode: "Concursos",
				startTime: "20:30",
				endTime: "21:30",
				progress: 5
			},
			T5: {
				thumb: "./assets/images/T5.png",
				title: "Pasapalabra",
				episode: "Concursos",
				startTime: "20:05",
				endTime: "21:05",
				progress: 100
			},
			SEXTA: {
				thumb: "./assets/images/SEXTA.png",
				title: "Estación Sexta",
				episode: "Deportes",
				startTime: "20:55",
				endTime: "21:05",
				progress: 23
			},
			CPLUS: {
				thumb: "./assets/images/CPLUS.png",
				title: "El día después",
				episode: "Ep. 18",
				startTime: "20:50",
				endTime: "22:00",
				progress: 60
			}
		}
	},
	{
		type : "movistar",
		title: "Originales de Movistar+",
		count: false,
		data : [
			{
				id: "1282817",
				thumb: "./assets/images/movistar1.webp",
				bg: "./assets/images/1282817-fondo_1.webp"
			},
			{
				id: "1321119",
				thumb: "./assets/images/movistar2.webp",
				bg: "./assets/images/1321119-fondo_1.webp"
			}
		]
	},
	{
		type : "temas",
		title: "Temas, actores y personajes",
		count: true,
		data : [
			"Precuelas",
			"Guerra Mundial", 
			"Drama", 
			"Exorcismos", 
			"Matthew McConaughey", 
			"Zombies", 
			"Comedia"
		]
	}
];

// Grid Sample Data
var gridData = [
	{
		id: "1111111",
		title: "Mr. Robot",
		desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
		thumb: "./assets/images/1321119-caratula_h.jpg",
		bg: "./assets/images/1321119-fondo_1.webp",
		year: 2015,
		temporadas: 3,
		progress: 60,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111112",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111113",
		title: "Mr. Robot",
		desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
		thumb: "./assets/images/1321119-caratula_h.jpg",
		bg: "./assets/images/1321119-fondo_1.webp",
		year: 2015,
		temporadas: 3,
		progress: 60,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111114",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111115",
		title: "Mr. Robot",
		desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
		thumb: "./assets/images/1321119-caratula_h.jpg",
		bg: "./assets/images/1321119-fondo_1.webp",
		year: 2015,
		temporadas: 3,
		progress: 60,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111116",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111117",
		title: "Mr. Robot",
		desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
		thumb: "./assets/images/1321119-caratula_h.jpg",
		bg: "./assets/images/1321119-fondo_1.webp",
		year: 2015,
		temporadas: 3,
		progress: 60,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111118",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111119",
		title: "Mr. Robot",
		desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
		thumb: "./assets/images/1321119-caratula_h.jpg",
		bg: "./assets/images/1321119-fondo_1.webp",
		year: 2015,
		temporadas: 3,
		progress: 60,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111120",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1111121",
		title: "Mr. Robot",
		desc: "Mr. Robot sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de dÃ­a y como hacker-justiciero de noche.",
		thumb: "./assets/images/1321119-caratula_h.jpg",
		bg: "./assets/images/1321119-fondo_1.webp",
		year: 2015,
		temporadas: 3,
		progress: 60,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1112122",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1113122",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1145122",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	},
	{
		id: "1161122",
		title: "Piratas del Caribe",
		desc: "'Mr. Robot' sigue los pasos de Elliot Alderson, un brillante programador con problemas de ansiedad social que trabaja como ingeniero de ciberseguridad de día y como hacker-justiciero de noche.",
		thumb: "./assets/images/1282817-caratula_h.jpg",
		bg: "./assets/images/1282817-fondo_1.webp",
		year: 2015,
		temporadas: 0,
		progress: 30,
		indicator: true,
		rating: true,
		topRating: true,
		remoteActions: ["record", "filter", "gotostart", "menu"]
	}
];

// Slider Sample Data
var slidersData = [
	{
		title: "Últimos siete días",
		count: true,
		data : [
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			}
		]
	},
	{
		title: "Si te gusta la Ciencia Ficción",
		count: true,
		data : [
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			}
		]
	},
	{
		title: "Si te gusta Drama",
		count: true,
		data : [
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			},
			{
				id        : "1111111",
				kind      : "Cine Comedia",
				title     : "Mr. Robot",
				date      : 1551981599000,
				time      : {
					start : "21.00",
					end   : "23.30"
				},
				thumb     : "./assets/images/1321119-caratula_h.jpg",
				bg        : "./assets/images/1321119-fondo_1.webp",
				rating    : 12,
				indicator : false,
				issue     : "TELE 5"
			}
		]
	}
];
