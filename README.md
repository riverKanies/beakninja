Deploy:
`npm run build`
`npm run export`
`cd out`
`surge --domain beakninja.surge.sh`

Notes:
<image> tags were not working in svg on iOS safari.
I discovered it's because it won't load images within svg because it considers svg to be an image (... or something, never really found a great explanation)