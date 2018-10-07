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
				line: 'U9',
				platform: null,
				nextStation: '900000009101', // U Amrumer Str.
				position: 0.25, // todo: this is inexact
				bssid: '00:f6:63:cc:00:9f',
				mac: null
			},
			{
				type: 'platform',
				line: 'U9',
				platform: null,
				nextStation: '900000009101', // U Amrumer Str.
				position: 0.6, // todo: this is inexact
				bssid: '00:81:c4:f6:12:8f',
				mac: null
			},
			{
				type: 'platform',
				line: 'U9',
				platform: null,
				nextStation: '900000009201', // U Nauener Platz
				position: 0.25, // todo: this is inexact
				bssid: '00:f6:63:cc:26:af',
				mac: null
			},
			{
				type: 'platform',
				line: 'U9',
				platform: null,
				nextStation: '900000009201', // U Nauener Platz
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
				line: 'U9',
				platform: null,
				nextStation: '900000001201', // S+U Westhafen
				position: 0.5,
				bssid: '00:81:c4:93:c6:ef',
				mac: null
			},
			{
				type: 'platform',
				line: 'U9',
				platform: null,
				nextStation: '900000001201', // S+U Westhafen
				position: 0.75, // todo: this is inexact
				bssid: '00:81:c4:93:c5:cf',
				mac: null
			},
			{
				type: 'platform',
				line: 'U9',
				platform: null,
				nextStation: '900000009202', // U Osloer Str.
				position: 0.5,
				bssid: '00:81:c4:90:cf:4f',
				mac: null
			},
			{
				type: 'platform',
				line: 'U9',
				platform: null,
				nextStation: '900000009202', // U Osloer Str.
				position: 0.75, // todo: this is inexact
				bssid: '00:81:c4:91:06:7f',
				mac: null
			},
			{
				type: 'entrance',
				comment: 'west',
				bssid: '00:81:c4:f8:88:cf',
				mac: null
			}
		]
	},
	// U Ernst-Reuter-Platz
	'900000023101': {
		wifi: true,
		accessPoints: [
			{
				type: 'platform',
				line: 'U2',
				platform: null,
				nextStation: '900000022201', // U Deutsche Oper
				position: 0.35,
				bssid: '00:81:c4:e7:0d:8f',
				mac: null
			},
			{
				type: 'platform',
				line: 'U2',
				platform: null,
				nextStation: '900000022201', // U Deutsche Oper
				position: 0.65,
				bssid: '00:81:c4:e7:0e:7f',
				mac: null
			},
			{
				type: 'entrance',
				comment: 'to U2 towards Pankow',
				bssid: '00:81:c4:9d:b4:af',
				mac: null
			},
			{
				type: 'entrance',
				comment: 'to U2 towards Ruhleben',
				bssid: '00:f6:63:af:f8:af',
				mac: null
			}
		]
	}
}
