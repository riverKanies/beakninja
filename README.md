Deploy:
`npm run build`
`npm run export`
`cd out`
`surge --domain beakninja.surge.sh`

Notes:

- status bar: I tried using "black-translucent" which made it so the web view would take up the whole height of the screen (horizontal), but unfortunately it creates weird behavior when swiping vertically (status bar would appear at bottom...?). So I guess you just have to accept the status bar on progressive web apps (that care about vertical swiping like this game)

- caching: surge uses cache validation, which means that each time an image renders (changes) in the game, the browser sends a request to the surge server to verify that the image resource hasn't changed. This really hurts game performance.
https://surge.sh/help/using-lucid-caching-automatically
So I moved images to s3 and now browsers will cache by default

- <image> tags were not working in svg on iOS safari.
I discovered it's because it won't load images within svg because it considers svg to be an image (... or something, never really found a great explanation)