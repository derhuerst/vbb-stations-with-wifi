# Contributing

If you **have a question**, **found wrong/outdated data** or want to **propose a new data structure**, [create an Issue](https://github.com/derhuerst/location/issues).


## Scope

This project intends to include…

- …**S-Bahn stations**, but so far `WIFI@DB`/`FREE_WIFI@BAHNHOF` WiFis have been rare.
- …public WiFis at public transportation infrastructure **outside of Berlin**.


## How to record the WiFi data

1. Travel to the station.
2. Look for access points.
	- *BVG Wifi* APs are white, either hanging from the ceiling or mounted on the roof of conductor sheds.
	- I helps to have a phone showing the current WiFi signal strength accurately, walking around to find it.
3. Make sure you are connected to that specific access point.
	- I usually wait for the WiFi to hand my device over to the access point I've just walked to. With *BVG WiFi*, this takes ~5 seconds.
4. Determine the BSSID of the access point.
	- Keep in mind that access points might have 2 different BSSIDs for 2.4GHz/5Ghz. I haven't seen this with *BVG WiFi* though.
	- On iOS, you can only read the BSSID of the Wifi you're connected to. Use e.g. [*Net Analyzer*](https://itunes.apple.com/us/app/network-analyzer/id562315041).
	- On MacOS, you can read BSSIDs of all nearby access points and their signal strengths:
		1. Open [`Wireless Diagnostics.app`](https://support.apple.com/en-us/HT202663).
		2. Select *Window* > *Scan*.
5. Determine the MAC address(es) of the access point.
	- Keep in mind that access points usually have 2 MAC addresses for 2.4GHz/5Ghz.
	- On iOS, you cannot read the MAC address.
	- On most Unix/Linux operating systems, you can get the MAC address of the connected access point using `arp -a`.

Depending on the size of the station, for *BVG WiFi* this took me about 3-10 minutes per station.


## Copyright

Keep in mind that this project is [unlicensed](https://unlicense.org) and therefore in the [public domain](https://en.wikipedia.org/wiki/Public_domain). You will have to [waive your copyright claims when contributing](https://unlicense.org/#unlicensing-contributions).
