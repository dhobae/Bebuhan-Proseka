const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/src/assets/images/character/miku.png'; // Example if we needed external, but we'll fetch from sekai.best or write a web scraper if needed.

// Let's scrape the official site for a character image.
https.get('https://pjsekai.sega.jp/character/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const matches = data.match(/src="([^"]+img_character[^"]*)"/g);
        if (matches) {
            console.log(matches.slice(0, 5));
        } else {
            console.log("No images found");
        }
    });
});
