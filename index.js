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
			}
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
				comment: 'main entrace',
				bssid: '00:81:c4:e7:10:7f',
				mac: null
			}
		]
	}
}
