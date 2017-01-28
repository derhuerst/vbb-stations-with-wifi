'use strict'

const test = require('tape')
const stations = require('vbb-stations')
const withWifi = require('.')

test('each station exists', (t) => {
	t.plan(withWifi.length * 2)

	for (let id of withWifi) {
		const [station] = stations(id)
		t.ok(station)
		t.equal(id, station.id)
	}
})
