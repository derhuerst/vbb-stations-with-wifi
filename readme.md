# vbb-stations-with-wifi

**VBB stations with free wifi** and their [BSSIDs](https://en.wikipedia.org/wiki/Service_set_(802.11_network)#Basic_service_sets_(BSSs)). [Contribute](contributing.md)!

[![npm version](https://img.shields.io/npm/v/vbb-stations-with-wifi.svg)](https://www.npmjs.com/package/vbb-stations-with-wifi)
[![build status](https://img.shields.io/travis/derhuerst/vbb-stations-with-wifi.svg)](https://travis-ci.org/derhuerst/vbb-stations-with-wifi)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-stations-with-wifi.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install vbb-stations-with-wifi
```


## Usage

```js
const stations = require('vbb-stations-with-wifi')

console.log(stations['900000023101']) // U Ernst-Reuter-Platz
```

```js
{
	wifi: true,
	accessPoints: [ {
		type: 'platform',
		platform: null,
		lines: [
			['U2', '900000022201'] // U Deutsche Oper
		],
		position: 0.35,
		bssid: '00:81:c4:e7:0d:8f',
		mac: null
	}, {
		type: 'platform',
		platform: null,
		lines: [
			['U2', '900000022201'] // U Deutsche Oper
		],
		position: 0.65,
		bssid: '00:81:c4:e7:0e:7f',
		mac: null
	}, {
		type: 'other',
		comment: 'entrance to U2 towards Pankow',
		bssid: '00:81:c4:9d:b4:af',
		mac: null
	}, {
		type: 'other',
		comment: 'entrance to U2 towards Ruhleben',
		bssid: '00:f6:63:af:f8:af',
		mac: null
	} ]
}
```

### By BSSID

```js
const byBssid = require('vbb-stations-with-wifi/by-bssid')

console.log(byBssid['00:81:c4:e7:0e:7f'])
```

```js
{
	station: '900000023101',
	type: 'platform',
	platform: null,
	lines: [
		['U2', '900000022201'] // U Deutsche Oper
	],
	position: 0.65,
	bssid: '00:81:c4:e7:0e:7f',
	mac: null
}
```


## Data structure

[`index.js`](index.js) looks like this:

```js
{
	'station-id-123': {
		wifi: true,
		accessPoints: […]
	}
	// …
}
```

An item in `accessPoints` should either have `type: 'platform'` (an access point located close to or at a platform) or `type: 'other'` (an access point located somewhere else). The markup for `type: 'platform'` is as follows:

| key | description | required | example |
| -------- | ----------- | -------- | ------- |
| `platform` | the name of the platform | no | `'3a'` |
| `lines` | an array of pairs: 1) a line and 2) the ID of the next station on this line | yes | `[['U2', '900000022201']]` |
| `position`| position of the access point at the platform, between `0` (rear end of the station) and `1` (front end of the station) ¹ | yes | `0.2` |
| `bssid`| [BSSID](https://en.wikipedia.org/wiki/Service_set_(802.11_network)#Basic_service_sets_(BSSs)), lower case | yes | `'00:f6:63:cc:00:9f'` |
| `mac` | [MAC address](https://en.wikipedia.org/wiki/MAC_address), lower case | no | `'00:f6:63:cc:00:9f'` |

¹ "front end" is the end *of the station* that the a vehicle running at the platform points to (*not* where the "front end" of the vehicle will be).

*Pro tip:* Use [`vbb-stations-cli`](https://npmjs.com/package/vbb-stations-cli) to find station IDs.
