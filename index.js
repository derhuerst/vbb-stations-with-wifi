'use strict'

module.exports = {
	// U Schwartzkopffstr.
	'900000100501': {
		wifi: false,
		accessPoints: []
	},
	// U Reinickendorfer Str.
	'900000008102': {
		wifi: false,
		accessPoints: []
	},

	// U Leopoldplatz
	'900000009102': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009101'] // U Amrumer Str.
				],
				position: 0.25, // todo: this is inexact
				bssid: '00:f6:63:cc:00:9f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009101'] // U Amrumer Str.
				],
				position: 0.6, // todo: this is inexact
				bssid: '00:81:c4:f6:12:8f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009201'] // U Nauener Platz
				],
				position: 0.25, // todo: this is inexact
				bssid: '00:f6:63:cc:26:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009201'] // U Nauener Platz
				],
				position: 0.5, // todo: this is inexact
				bssid: '00:81:c4:e7:0e:0f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000009104'] // S+U Wedding
				],
				position: null, // todo
				bssid: '00:81:c4:90:d2:7f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000009103'] // U Seestr.
				],
				position: null, // todo
				bssid: '00:81:c4:7c:ce:90',
				mac: null
			},
		]
	},
	// U Amrumer Str.
	'900000009101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000001201'] // S+U Westhafen
				],
				position: 0.5,
				bssid: '00:81:c4:93:c6:ef',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000001201'] // S+U Westhafen
				],
				position: 0.75, // todo: this is inexact
				bssid: '00:81:c4:93:c5:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009102'] // U Leopoldplatz
				],
				position: 0.5,
				bssid: '00:81:c4:90:cf:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009102'] // U Leopoldplatz
				],
				position: 0.75, // todo: this is inexact
				bssid: '00:81:c4:91:06:7f',
				mac: null
			},
			{
				type: 'other',
				comment: 'west entrance',
				bssid: '00:81:c4:f8:88:cf',
				mac: null
			}
		]
	},
	// S+U Zoologischer Garten
	'900000023201': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000023101'] // U Ernst-Reuter-Platz
				],
				position: 0.5, // todo: this is inexact
				bssid: '00:f6:63:e1:41:2f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000003101'] // U Hansaplatz
				],
				position: 0.1,
				bssid: '00:f6:63:cb:fe:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000003101'] // U Hansaplatz
				],
				position: 0.5,
				bssid: '00:f6:63:af:fb:0f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000023203'] // U Kurfürstendamm
				],
				position: 0.25,
				bssid: '00:f6:63:af:fa:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000023203'] // U Kurfürstendamm
				],
				position: 0.8,
				bssid: '00:f6:63:9f:3c:9f',
				mac: null
			}
			// todo: stairs U2 -> U9
		]
	},
	// U Ernst-Reuter-Platz
	'900000023101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000022201'] // U Deutsche Oper
				],
				position: 0.35,
				bssid: '00:81:c4:e7:0d:8f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000022201'] // U Deutsche Oper
				],
				position: 0.65,
				bssid: '00:81:c4:e7:0e:7f',
				mac: null
			},
			{
				type: 'other',
				comment: 'entrance to U2 towards Pankow',
				bssid: '00:81:c4:9d:b4:af',
				mac: null
			},
			{
				type: 'other',
				comment: 'entrance to U2 towards Ruhleben',
				bssid: '00:f6:63:af:f8:af',
				mac: null
			}
		]
	},
	// todo: there's also `900000100701` "U Stadtmitte U2"
	// U Stadtmitte
	'900000100011': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100012'] // U Hausvogteiplatz
				],
				position: 0,
				bssid: '00:81:c4:f6:0f:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100012'] // U Hausvogteiplatz
				],
				position: 0.5,
				bssid: '00:81:c4:9d:b4:8f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100010'] // U Mohrenstr.
				],
				position: 0.2,
				bssid: '00:81:c4:33:26:ff',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100010'] // U Mohrenstr.
				],
				position: 0.75,
				bssid: '00:81:c4:93:c2:5f',
				mac: null
			},
			{
				type: 'other',
				comment: 'north end of U2 <-> U6 tunnel',
				bssid: '00:81:c4:f6:12:2f',
				mac: null
			},
			{
				type: 'other',
				comment: 'middle of U2 <-> U6 tunnel',
				bssid: '00:81:c4:93:fb:ef',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100027'] // U Französische Str.
				],
				position: 0.9,
				bssid: '00:81:c4:9d:b5:b0',
				mac: null
			}
		]
	},
	// U Französische Str.
	'900000100027': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100011'] // U Stadtmitte
				],
				position: 0.7,
				bssid: '00:81:c4:91:08:60',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100001'] // S+U Friedrichstr.
				],
				position: 0.3,
				bssid: '00:81:c4:91:08:6f',
				mac: null
			}
		]
	},
	// U Walther-Schreiber-Platz
	'900000061101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000061102'] // U Friedrich-Wilhelm-Platz
				],
				position: 0.6,
				bssid: '00:81:c4:f8:84:bf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000061102'] // U Friedrich-Wilhelm-Platz
				],
				position: 1,
				bssid: '00:81:c4:21:59:df',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000062203'] // U Schloßstr.
				],
				position: 0.4,
				bssid: '00:81:c4:f8:84:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000062203'] // U Schloßstr.
				],
				position: 1,
				bssid: '00:81:c4:e6:70:8f',
				mac: null
			}
		]
	},
	// U Berliner Str.
	'900000044201': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000043201'] // U Güntzelstr.
				],
				position: 0.25,
				bssid: '00:81:c4:e6:6c:df',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000043201'] // U Güntzelstr.
				],
				position: 0.75,
				bssid: '00:81:c4:f6:15:e0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000044202'] // S+U Bundesplatz
				],
				position: 0.25,
				bssid: '00:81:c4:e6:aa:1f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000044202'] // S+U Bundesplatz
				],
				position: 0.8,
				bssid: '00:81:c4:9d:9c:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000055102'] // U Bayerischer Platz
				],
				position: 0.35,
				bssid: '00:81:c4:9d:b5:df',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000055102'] // U Bayerischer Platz
				],
				position: 0.9,
				bssid: '00:81:c4:6e:64:7f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000041102'] // U Blissestr.
				],
				position: 0.3,
				bssid: '00:81:c4:f6:1b:3f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000041102'] // U Blissestr.
				],
				position: 0.9,
				bssid: '00:81:c4:f8:c4:0f',
				mac: null
			},
			{
				type: 'other',
				comment: 'main entrance',
				bssid: '00:81:c4:e7:10:7f',
				mac: null
			}
		]
	},
	// U Theodor-Heuss-Platz
	'900000026201': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000026101'] // Neu-Westend
				],
				position: 1,
				bssid: '00:81:c4:91:0d:ff',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000026101'] // Neu-Westend
				],
				position: 0.5,
				bssid: '00:81:c4:91:05:0f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000026101'] // Neu-Westend
				],
				position: 0.05,
				bssid: '00:81:c4:e6:a9:4f',
				mac: null
			}
		]
	},
	// U Moritzplatz
	'900000013101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000013102'] // Kottbusser Tor
				],
				position: 0.3,
				bssid: '00:81:c4:21:5e:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000013102'] // Kottbusser Tor
				],
				position: 0.8,
				bssid: '00:81:c4:6e:4e:df',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000100008'] // Heinrich-Heine-Str.
				],
				position: 0.8,
				bssid: '00:81:c4:9d:6d:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000100008'] // Heinrich-Heine-Str.
				],
				position: 0.4,
				bssid: '00:81:c4:7c:7f:a0',
				mac: null
			}
		]
	},
	// U Rosa-Luxemburg-Platz
	'900000100016': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100703'] // S+U Alexanderplatz [U2]
				],
				position: 0.5,
				bssid: '00:81:c4:f6:19:30',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000110005'] // U Senefelderplatz
				],
				position: 0.5,
				bssid: '00:78:88:ad:a4:7f',
				mac: null
			}
		]
	},
	// U Oranienburger Tor
	'900000100019': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100009'] // U Naturkundemuseum
				],
				position: .3, // todo: this is not exact
				bssid: '00:81:c4:e7:0d:1f',
				mac: null
			}
			// todo: there are more
		]
	},
	// S+U Schönhauser Allee
	'900000110001': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000110006'] // U Eberswalder Str.
				],
				position: 0,
				bssid: '00:81:c4:f6:15:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000110006'] // U Eberswalder Str.
				],
				position: .7,
				bssid: '00:81:c4:e6:9f:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000110006'] // U Eberswalder Str.
				],
				position: 1,
				bssid: '00:81:c4:f8:8c:9f',
				mac: null
			}
		]
	},
	// U Vinetastr.
	'900000130011': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000130002'] // S+U Pankow
				],
				position: .7,
				bssid: '00:81:c4:f6:3d:5f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000110001'] // S+U Schönhauser Allee
				],
				position: .3,
				bssid: '00:81:c4:e7:0d:af',
				mac: null
			}
		]
	},
	// S+U Yorckstr
	'900000057103': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000017104'] // U Möckernbrücke
				],
				position: .5, // todo: is this correct?
				bssid: '00:81:c4:f6:24:a0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000017104'] // U Möckernbrücke
				],
				position: .9, // todo: is this correct?
				bssid: '00:81:c4:f8:8b:9f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000054102'] // U Kleistpark
				],
				position: .5, // todo: is this correct?
				bssid: '00:81:c4:9d:b4:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U7', '900000054102'] // U Kleistpark
				],
				position: .15, // todo: is this correct?
				bssid: '00:81:c4:9d:b3:df',
				mac: null
			}
			// todo: where is `00:81:c4:9d:b3:d0`?
		]
	},
	// S+U Wedding
	'900000009104': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000009102'] // U Leopoldplatz
				],
				position: .5, // todo: this is inexact
				bssid: '00:81:c4:93:da:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000008102'] // U Reinickendorfer Str.
				],
				position: .5, // todo: this is inexact
				bssid: '00:81:c4:7c:8b:7f',
				mac: null
			}
			// todo: where is `00:81:c4:93:da:ff`?
		]
	},
	// U Hermannstr
	'900000079221': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000079201'] // U Leinestr
				],
				position: .1,
				bssid: '00:81:c4:7c:ea:5f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					// todo: actually it's .6 on the south-bound side
					['U8', '900000079201'] // U Leinestr
				],
				position: .4,
				bssid: '00:81:c4:93:c2:60',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000079201'] // U Leinestr
				],
				position: .7,
				bssid: '00:81:c4:93:c4:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					// todo: actually it's .2 on the south-bound side
					['U8', '900000079201'] // U Leinestr
				],
				position: .8,
				bssid: '00:81:c4:7c:d0:1f',
				mac: null
			},
			{
				type: 'other',
				comment: 'south entrance',
				bssid: '00:81:c4:93:c7:7f',
				mac: null
			},
			{
				type: 'other',
				comment: 'north entrance',
				bssid: '00:81:c4:93:c5:1f',
				mac: null
			}
		]
	},
	// U Osloer Str
	'900000009202': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000085202'] // U Franz-Neumann-Platz
				],
				position: 1,
				bssid: 'a4:6c:2a:37:96:2f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000085202'] // U Franz-Neumann-Platz
				],
				position: .3,
				bssid: 'a4:6c:2a:4a:ac:6f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .65,
				bssid: 'a4:6c:2a:2f:68:5f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .9,
				bssid: 'a4:6c:2a:47:5f:df',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009201'] // U Nauener Platz
				],
				position: .4,
				bssid: 'a8:9d:21:8c:99:6f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000009201'] // U Nauener Platz
				],
				position: .9,
				bssid: 'a4:6c:2a:2f:65:0f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					// todo: actually it's .9 on the north-bound side
					['U9', '900000009201'] // U Nauener Platz
				],
				position: .1,
				bssid: 'a4:6c:2a:6c:0e:0f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					// todo: actually it's .65 on the north-bound side
					['U9', '900000009201'] // U Nauener Platz
				],
				position: .35,
				bssid: 'a4:6c:2a:6c:10:8f',
				mac: null
			},
			{
				type: 'other',
				comment: 'tram entrance',
				bssid: 'a4:6c:2a:51:89:4f',
				mac: null
			},
			{
				type: 'other',
				comment: 'west entrance',
				bssid: 'a4:6c:2a:20:bf:9f',
				mac: null
			},
			{
				type: 'other',
				comment: 'center of the entrance area',
				bssid: 'a4:6c:2a:20:c5:4f',
				mac: null
			},
			{
				type: 'other',
				comment: 'center of the entrance area',
				bssid: 'a4:6c:2a:51:89:40',
				mac: null
			}
		]
	},
	// U Platz der Luftbrücke
	'900000017102': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000068101'] // U Paradestr.
				],
				position: .5, // actually .6, but pointing south
				bssid: '00:81:c4:7c:cf:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000068101'] // U Paradestr.
				],
				position: .75, // actually .65, but pointing north
				bssid: '00:81:c4:7c:d9:8f',
				mac: null
			}
		]
	},
	// U Seestr.
	'900000009103': {
		wifi: true,
		accessPoints: [
			// todo: where is `00:81:c4:91:06:ef`?
		]
	},
	// U Pankow
	'900000130002': {
		wifi: true,
		accessPoints: [
			// todo: where is `00:81:c4:90:fe:8f`?
		]
	},
	// U Hallesches Tor
	'900000012103': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000012102'] // U Kochstr./Checkpoint Charlie
				],
				position: .25,
				bssid: '00:81:c4:f8:8c:30',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000012102'] // U Kochstr./Checkpoint Charlie
				],
				position: .25,
				bssid: '00:81:c4:f8:8c:3f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000017101'] // U Mehringdamm
				],
				position: .15,
				bssid: '00:81:c4:6e:6e:20',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000017101'] // U Mehringdamm
				],
				position: .15,
				bssid: '00:81:c4:6e:6e:2f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000017101'] // U Mehringdamm
				],
				position: .75,
				bssid: '00:81:c4:7c:cf:30',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000017101'] // U Mehringdamm
				],
				position: .75,
				bssid: '00:81:c4:7c:cf:3f',
				mac: null
			},
			{
				type: 'other',
				comment: 'southern entrance of U6 section',
				bssid: '00:81:c4:9d:bb:30',
				mac: null
			},
			{
				type: 'other',
				comment: 'southern entrance of U6 section',
				bssid: '00:81:c4:9d:bb:3f',
				mac: null
			},
			{
				type: 'other',
				comment: 'northern entrance of U6 section',
				bssid: '00:81:c4:74:42:50',
				mac: null
			}
		]
	},
	// U Kurt-Schumacher-Platz
	'900000086102': {
		wifi: true,
		accessPoints: [
			{
				type: 'other',
				comment: 'entrance',
				bssid: '00:6b:f1:29:e2:80',
				mac: null
			},
			{
				type: 'other',
				comment: 'entrance',
				bssid: '00:6b:f1:29:e2:bf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:2a:10:22:ee:ff',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:2a:10:22:ee:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f6:1a:df',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:8e:cf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f6:1a:d0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:6b:f1:29:e2:8f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:e7:0d:7f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:90:d3:8f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:8e:c0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:e7:0d:70',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:bb:9f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'], // U Afrikanische Str.
					['U6', '900000087101'] // U Scharnweberstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:bb:90',
				mac: null
			}
		]
	},
	// U Möckernbrücke
	'900000017104': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U1', '900000012103'], // U Hallesches Tor
					['U1', '900000017103'], // U Gleisdreieck
					['U3', '900000012103'], // U Hallesches Tor
					['U3', '900000017103'] // U Gleisdreieck
				],
				position: null, // todo
				bssid: '00:81:c4:9d:92:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U1', '900000012103'], // U Hallesches Tor
					['U1', '900000017103'], // U Gleisdreieck
					['U3', '900000012103'], // U Hallesches Tor
					['U3', '900000017103'] // U Gleisdreieck
				],
				position: null, // todo
				bssid: '00:81:c4:90:bc:a0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U1', '900000012103'], // U Hallesches Tor
					['U1', '900000017103'], // U Gleisdreieck
					['U3', '900000012103'], // U Hallesches Tor
					['U3', '900000017103'] // U Gleisdreieck
				],
				position: null, // todo
				bssid: '00:81:c4:9d:92:ff',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U1', '900000012103'], // U Hallesches Tor
					['U1', '900000017103'], // U Gleisdreieck
					['U3', '900000012103'], // U Hallesches Tor
					['U3', '900000017103'] // U Gleisdreieck
				],
				position: null, // todo
				bssid: '00:81:c4:90:bc:af',
				mac: null
			}
		]
	},
	// U Klosterstr.
	'900000100015': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100014'], // U Märkisches Museum
					['U2', '900000100003'] // U Alexanderplatz
				],
				position: null, // todo
				bssid: '00:81:c4:7c:d3:40',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100014'], // U Märkisches Museum
					['U2', '900000100003'] // U Alexanderplatz
				],
				position: null, // todo
				bssid: '00:81:c4:90:ff:ef',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100014'], // U Märkisches Museum
					['U2', '900000100003'] // U Alexanderplatz
				],
				position: null, // todo
				bssid: '00:81:c4:90:ff:e0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000100014'], // U Märkisches Museum
					['U2', '900000100003'] // U Alexanderplatz
				],
				position: null, // todo
				bssid: '00:81:c4:7c:d3:4f',
				mac: null
			}
		]
	},
	// U Neu-Westend
	'900000026101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000025203'], // U Olympia-Stadion
					['U2', '900000026201'] // U Theodor-Heuss-Platz
				],
				position: null, // todo
				bssid: '00:81:c4:7c:7c:7f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000025203'], // U Olympia-Stadion
					['U2', '900000026201'] // U Theodor-Heuss-Platz
				],
				position: null, // todo
				bssid: '00:81:c4:7c:7c:70',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000025203'], // U Olympia-Stadion
					['U2', '900000026201'] // U Theodor-Heuss-Platz
				],
				position: null, // todo
				bssid: '00:81:c4:e6:69:1f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000025203'], // U Olympia-Stadion
					['U2', '900000026201'] // U Theodor-Heuss-Platz
				],
				position: null, // todo
				bssid: '00:81:c4:e6:69:10',
				mac: null
			}
		]
	},
	// U Walther-Schreiber-Platz
	'900000061101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:e6:70:80',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:e6:70:8f',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:84:b0',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:84:bf',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:84:40',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:f8:84:4f',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:9d:74:f0',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:21:59:d0',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:21:59:df',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:9d:74:ff',
				mac: null,
			},
		]
	},
	// U Paradestr
	'900000068101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:90:e6:00',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:90:e6:0f',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:91:06:c0',
				mac: null,
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000061102'] // U Friedrich-Wilhelm-Pl.
				],
				position: null, // todo
				bssid: '00:81:c4:91:06:cf',
				mac: null,
			},
		]
	},
	// U Sophie-Charlotte-Platz
	'900000022101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U2', '900000024201'] // U Bismarckstr.
				],
				position: .2, // this is inexact
				bssid: '00:81:c4:74:0f:5f',
				mac: null
			},
			// todo
		]
	},
	// U Reinickendorfer Str.
	'900000008102': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000009104'] // S+U Wedding
				],
				position: .3,
				bssid: '00:81:c4:9d:b6:70',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000009104'] // S+U Wedding
				],
				position: .3,
				bssid: '00:81:c4:9d:b6:7f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100501'], // U Schwartzkopffstr.
				],
				position: .7,
				bssid: '00:f6:63:1c:5d:00',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100501'], // U Schwartzkopffstr.
				],
				position: .7,
				bssid: '00:f6:63:1c:5d:0f',
				mac: null
			}
		]
	},
	// U Rehberge
	'900000011101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .1, // todo: this is inexact
				bssid: 'bc:26:c7:31:f4:60',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .1, // todo: this is inexact
				bssid: 'bc:26:c7:31:f4:6f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .2, // todo: this is inexact
				bssid: 'bc:26:c7:4b:44:20',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .2, // todo: this is inexact
				bssid: 'bc:26:c7:4b:44:2f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .2, // todo: this is inexact
				bssid: 'bc:26:c7:5b:70:6f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .2, // todo: this is inexact
				bssid: 'bc:26:c7:5b:70:60',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .6, // todo: this is inexact
				bssid: 'bc:26:c7:39:55:00',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .6, // todo: this is inexact
				bssid: 'bc:26:c7:39:55:0f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .8, // todo: this is inexact
				bssid: 'bc:26:c7:26:1d:a0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .8, // todo: this is inexact
				bssid: 'bc:26:c7:26:1d:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .9, // todo: this is inexact
				bssid: 'bc:26:c7:36:45:e0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000011102'] // U Afrikanische Str.
				],
				position: .9, // todo: this is inexact
				bssid: 'bc:26:c7:36:45:ef',
				mac: null
			},
		]
	},
	// U Klosterstr
	'900000100015': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100014'] // U Märkisches Museum
				],
				position: .5, // todo: this is inexact
				bssid: '00:81:c4:7c:d3:40',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100014'] // U Märkisches Museum
				],
				position: .5, // todo: this is inexact
				bssid: '00:81:c4:7c:d3:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100014'] // U Märkisches Museum
				],
				position: .5, // todo: this is inexact
				bssid: '00:81:c4:90:ff:e0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100014'] // U Märkisches Museum
				],
				position: .5, // todo: this is inexact
				bssid: '00:81:c4:90:ff:ef',
				mac: null
			},
		]
	},
	// U Britz-Süd
	'900000080402': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000080401'] // U Parchimer Allee
				],
				position: null, // todo
				bssid: '00:81:c4:74:4c:40',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000080401'] // U Parchimer Allee
				],
				position: null, // todo
				bssid: '00:81:c4:74:4c:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000080401'] // U Parchimer Allee
				],
				position: null, // todo
				bssid: '00:81:c4:93:f0:00',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000080401'] // U Parchimer Allee
				],
				position: null, // todo
				bssid: '00:81:c4:93:f0:0f',
				mac: null
			},
			{
				type: 'other',
				comment: 'south entrance',
				bssid: '70:79:b3:68:d1:c2',
				mac: null
			},
			{
				type: 'other',
				comment: 'south entrance',
				bssid: '70:79:b3:68:d1:cd',
				mac: null
			},
		]
	},
	// U Al-Tempelhof
	'900000068202': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.1, // todo: this is inexact
				bssid: '00:81:c4:7c:cd:b0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.1, // todo: this is inexact
				bssid: '00:81:c4:7c:cd:bf',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.5, // todo: this is inexact
				bssid: '6c:99:89:a0:05:a0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.5, // todo: this is inexact
				bssid: '6c:99:89:a0:05:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.5, // todo: this is inexact
				bssid: '00:c8:8b:13:98:a0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.5, // todo: this is inexact
				bssid: '00:c8:8b:13:98:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.9, // todo: this is inexact
				bssid: '00:2a:10:22:ed:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U9', '900000068201'] // S+U Tempelhof
				],
				position: 0.9, // todo: this is inexact
				bssid: '00:2a:10:22:ed:ff',
				mac: null
			},
		]
	},
	// U Weberwiese
	'900000120025': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U5', '900000120008'] // U Frankfurter Tor
				],
				position: null, // todo
				bssid: '00:81:c4:f6:52:40',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U5', '900000120008'] // U Frankfurter Tor
				],
				position: null, // todo
				bssid: '00:81:c4:f6:52:4f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U5', '900000120008'] // U Frankfurter Tor
				],
				position: null, // todo
				bssid: '00:81:c4:90:a7:30',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U5', '900000120008'] // U Frankfurter Tor
				],
				position: null, // todo
				bssid: '00:81:c4:90:a7:3f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U5', '900000120008'] // U Frankfurter Tor
				],
				position: .8, // todo: this is inexact
				bssid: '00:81:c4:93:c7:a0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U5', '900000120008'] // U Frankfurter Tor
				],
				position: .8, // todo: this is inexact
				bssid: '00:81:c4:93:c7:af',
				mac: null
			},
		]
	},
	// S+U Gesundbrunnen
	'900000007102': {
		wifi: true,
		accessPoints: [
			// todo: correct the directions, U8 platform is very wide
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .2, // todo: this is inexact
				bssid: '00:81:c4:e7:12:00',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .2, // todo: this is inexact
				bssid: '00:81:c4:e7:12:0f',
				mac: null
			},
			{ // todo: probably on the other side of the platform
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .2, // todo: this is inexact
				bssid: '00:81:c4:9d:b2:a0',
				mac: null
			},
			{ // todo: probably on the other side of the platform
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .2, // todo: this is inexact
				bssid: '00:81:c4:9d:b2:af',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .75, // todo: this is inexact
				bssid: '00:81:c4:9d:b2:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .75, // todo: this is inexact
				bssid: '00:81:c4:9d:b2:ff',
				mac: null
			},
			{ // todo: probably on the other side of the platform
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .75, // todo: this is inexact
				bssid: '00:81:c4:e7:0f:90',
				mac: null
			},
			{ // todo: probably on the other side of the platform
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: .75, // todo: this is inexact
				bssid: '00:81:c4:e7:0f:9f',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f6:26:f0',
				mac: null
			},
			{
				type: 'platform',
				platform: null,
				lines: [
					['U8', '900000009203'] // U Pankstr.
				],
				position: null, // todo
				bssid: '00:81:c4:f6:26:ff',
				mac: null
			},
			{
				type: 'other',
				comment: 'U8 south entrance',
				bssid: '00:81:c4:91:11:90',
				mac: null
			},
			{
				type: 'other',
				comment: 'U8 south entrance',
				bssid: '00:81:c4:91:11:9f',
				mac: null
			},
			{
				type: 'other',
				comment: 'U8 north entrance',
				bssid: '00:2a:10:09:ae:80',
				mac: null
			},
			{
				type: 'other',
				comment: 'U8 north entrance',
				bssid: '00:2a:10:09:ae:8f',
				mac: null
			},
			{
				type: 'other',
				comment: 'U8 north entrance',
				bssid: '00:5d:73:7e:02:40',
				mac: null
			},
			{
				type: 'other',
				comment: 'U8 north entrance',
				bssid: '00:5d:73:7e:02:4f',
				mac: null
			},
		]
	},

	// U Naturkundemuseum
	'900000100009': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				platform: null,
				lines: [
					['U6', '900000100501'] // U Schwartzkopffstr.
				],
				position: .5, // todo: this is not exact
				bssid: '00:81:c4:f6:24:c0',
				mac: null
			},
			// todo: there are more
		]
	},
}
