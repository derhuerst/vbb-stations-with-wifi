'use strict'

const omit = require('lodash.omit')
const raw = require('.')

const byBssid = Object.create(null)

for (const id of Object.keys(raw)) {
	for (const ap of raw[id].accessPoints) {
		if (ap.bssid === null) continue

		byBssid[ap.bssid] = omit(ap, 'bssid')
		byBssid[ap.bssid].station = id
	}
}

module.exports = byBssid
