# vbb-stations-with-wifi

**VBB stations with free wifi** and their [BSSIDs](https://en.wikipedia.org/wiki/Service_set_(802.11_network)#Basic_service_sets_(BSSs)).

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
		line: 'U2',
		platform: null,
		nextStation: '900000022201',
		position: 0.35,
		bssid: '00:81:c4:e7:0d:8f',
		mac: null
	}, {
		type: 'platform',
		line: 'U2',
		platform: null,
		nextStation: '900000022201',
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
	line: 'U2',
	platform: null,
	nextStation: '900000022201',
	position: 0.65,
	bssid: '00:81:c4:e7:0e:7f',
	mac: null
}
```

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).

Keep in mind that this project is [unlicensed](https://unlicense.org) and therefore in the [public domain](https://en.wikipedia.org/wiki/Public_domain). You will have to [waive your copyright claims when contributing](https://unlicense.org/#unlicensing-contributions).
