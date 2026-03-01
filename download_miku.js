import https from 'https';
import fs from 'fs';

const urls = [
    'https://raw.githubusercontent.com/Deatrash/pjsekai-assets/main/character/01/01.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Hatsune_Miku_V4X_box_art.png/300px-Hatsune_Miku_V4X_box_art.png',
    'https://raw.githubusercontent.com/toriato/sekai-assets/master/character/member_cutout/chr_ts_1/sekai/01.png'
];

function download(index) {
    if (index >= urls.length) {
        console.log("All failed.");
        return;
    }
    const url = urls[index];
    console.log("Trying " + url);
    https.get(url, (res) => {
        if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
            console.log("Success! " + res.statusCode);
            if (res.statusCode === 200) {
               const file = fs.createWriteStream('public/img/miku.png');
               res.pipe(file);
            }
        } else {
            console.log("Failed " + res.statusCode);
            download(index + 1);
        }
    }).on('error', () => download(index+1));
}

download(0);
