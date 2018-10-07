'use strict'

const test = require('tape')
const isMac = require('is-mac')
const findStations = require('vbb-stations')
const data = require('.')

const strNotEmpty = str => 'string' === typeof str && str.length > 0

const checkAccessPoint = (t, name, ap) => {
	if (ap.bssid !== null) {
		t.ok(typeof ap.bssid, 'string', `${name}.bssid must be a string`)
		t.ok(isMac(ap.bssid), `${name}.bssid must be in MAC address format`)
		t.equal(ap.bssid, ap.bssid.toLowerCase(), `${name}.bssid must lower-case`)
	}
	if (ap.mac !== null) {
		t.ok(typeof ap.mac, 'string', `${name}.mac must be a string`)
		t.ok(isMac(ap.mac), `${name}.mac must be in MAC address format`)
		t.equal(ap.mac, ap.mac.toLowerCase(), `${name}.mac must lower-case`)
	}

	if (ap.type === 'platform') {
		t.ok(strNotEmpty(ap.line), `${name}.line must be string & not empty`)
		if (ap.platform !== null) {
			t.ok(strNotEmpty(ap.platform), `${name}.platform must be string & not empty`)
		}

		t.ok(strNotEmpty(ap.nextStation), `${name}.nextStation must be string & not empty`)
		const [next] = findStations(ap.nextStation)
		t.ok(next, `${name}.nextStation: no station found`)
		t.equal(ap.nextStation, next.id, `${name}.nextStation: invalid ID`)

		if (ap.position !== null) {
			t.equal(typeof ap.position, 'number', `${name}.position must be a number`)
			t.ok(ap.position >= 0 && ap.position <= 1, `${name}.position must be >=0, <=1`)
		}
	} else if (ap.type === 'entrance') {
		t.ok(strNotEmpty(ap.comment), `${name}.comment must be string & not empty`)
	} else t.fail(`${name}.type must be \`platform\` or \`entrance\``)
}

test('each station ID is valid', (t) => {
	const ids = Object.keys(data)
	for (const id of ids) {
		const [station] = findStations(id)
		t.ok(station, `no station found for ID "${id}"`)
		t.equal(id, station.id, `invalid ID "${id}"`)
	}
	t.end()
})

test('each entry is valid', (t) => {
	const ids = Object.keys(data)
	for (const id of ids) {
		const {wifi, accessPoints} = data[id]

		t.equal(typeof wifi, 'boolean', `data.${id}.wifi must be a boolean`)
		t.ok(Array.isArray(accessPoints), `data.${id}.accessPoints must be an array`)
		for (let i = 0; i < accessPoints.length; i++) {
			const ap = accessPoints[i]
			checkAccessPoint(t, `data.${id}.accessPoints[${i}]`, ap)
		}
	}
	t.end()
})

test('each BSSID exists only once', (t) => {
	const known = Object.create(null)

	const ids = Object.keys(data)
	for (const id of ids) {
		const {accessPoints} = data[id]
		for (let i = 0; i < accessPoints.length; i++) {
			const ap = accessPoints[i]
			if (ap.bssid === null) continue

			const name = `data.${id}.accessPoints[${i}].bssid`
			if (known[ap.bssid]) t.fail(`${name} and ${known[ap.bssid]} are equal`)
			known[ap.bssid] = name
		}
	}
	t.end()
})
