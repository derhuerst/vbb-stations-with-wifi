'use strict'

const test = require('tape')
const isMac = require('is-mac')
const findStations = require('vbb-stations')
const data = require('.')
const byBssid = require('./by-bssid')

const strNotEmpty = str => 'string' === typeof str && str.length > 0

const checkAccessPoint = (t, name, ap) => {
	if (ap.bssid !== null) {
		t.ok(typeof ap.bssid, 'string', `${name}.bssid must be a string`)
		t.ok(isMac(ap.bssid), `${name}.bssid must be in MAC address format`)
		t.equal(ap.bssid, ap.bssid.toLowerCase(), `${name}.bssid must lower-case`)
		t.notOk(ap.bssid.includes('-'), `${name}.bssid must use the : notation`)
	}
	if (ap.mac !== null) {
		t.ok(typeof ap.mac, 'string', `${name}.mac must be a string`)
		t.ok(isMac(ap.mac), `${name}.mac must be in MAC address format`)
		t.equal(ap.mac, ap.mac.toLowerCase(), `${name}.mac must lower-case`)
	}

	if (ap.type === 'platform') {
		if (ap.platform !== null) {
			t.ok(strNotEmpty(ap.platform), `${name}.platform must be string & not empty`)
		}

		t.ok(Array.isArray(ap.lines), `${name}.lines must be an array`)
		for (let i = 0; i < ap.lines.length; i++) {
			const l = ap.lines[i]
			const n = `${name}.lines[${i}]`
			t.ok(l, `${n} must be an object`)

			const [line, nextStation] = l
			t.ok(strNotEmpty(line), `${n}: line must be string & not empty`)
			t.ok(strNotEmpty(nextStation), `${n}: next must be string & not empty`)
			const [next] = findStations(nextStation)
			t.ok(next, `${n}: no station found for ID from nextStation`)
			t.equal(nextStation, next.id, `${n}: nextStation is an invalid ID`)
		}

		if (ap.position !== null) {
			t.equal(typeof ap.position, 'number', `${name}.position must be a number`)
			t.ok(ap.position >= 0 && ap.position <= 1, `${name}.position must be >=0, <=1`)
		}
	} else if (ap.type === 'other') {
		t.ok(strNotEmpty(ap.comment), `${name}.comment must be string & not empty`)
	} else t.fail(`${name}.type must be \`platform\` or \`other\``)
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

test('byBssid is valid', (t) => {
	const bssids = Object.keys(byBssid)
	for (const bssid of bssids) {
		const ap = byBssid[bssid]
		const name = `byBssid.${bssid}`

		checkAccessPoint(t, name, Object.assign({bssid}, ap))
		t.ok(strNotEmpty(ap.station), `${name}.station must be string & not empty`)
	}
	t.end()
})
