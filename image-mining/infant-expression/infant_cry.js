var Scraper = require('images-scraper')
var fs = require('fs')
var request = require('request')
var google = new Scraper.Google();

google.list({
    keyword: 'infant cry',
    num: 10000,
    rlimit: 10,
    detail: true,
    advanced: {
        imgType: 'face'
    }
})
.catch(function(err) {
    console.log('err', err);
});

// you can also watch on events
google.on('result', function (item) {
    console.log('out', item);
    var file = item.split('/');
    var r = request(item).pipe(item.createWriteStream(file[file.length-1]));
});
