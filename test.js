var ts = require('./index.js');

console.log(ts.scrapers); // list of all scrapers

var args = process.argv.slice(2);
var searchStr = args.join(' ');


//search for deadpool in all scrapers
ts.search(searchStr, function(entries) {
        var entry = entries[0];
        console.log(entry);
        
        for (var entry in entries){
          console.log(entry);
        }
        
});