const fs = require('fs');
var parseString = require('xml2js').parseString;


var d = fs.readdirSync(__dirname + '/../archive.tw/');
d.forEach(function (f) {
    if (f.match(/\.xml$/)) {
        var file = fs.readFileSync(__dirname + '/../archive.tw/' + f);
        parseString(file, function (err, result) {
            var arr = [];
            try {
              arr = result.akomaNtoso.debate[0].debateBody[0].debateSection[0].speech;
            } catch (err) {
              return true;
            }
            arr.forEach(function (sp) {
              if (sp.$.by == '#廠商') {
                sp.p.forEach(function(t) {console.log(t)})
              }
            });
        });
    }
});
