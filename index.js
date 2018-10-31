var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

// kotek
// fs.stat('./cat.jpg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

// nadpisywanie pliku
// fs.writeFile('./text.txt', 'Tekst, który zapiszemy w pliku text.txt', function(err) {
//     if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//     console.log('Zapisano!');
// });

// fs.readFile('./text.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\n\nA tak wyglądają po zapisie!'.green, function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./text.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });



function writeFilesData(fileData, index) {
    fs.appendFile('./filesData.txt', '\n' + fileData, function(err) {
        if (err) throw err;
    });
};

function readDir(path) {
    fs.readdir(path, 'utf-8', function(err, files) {
        if (err) throw err;
        files.forEach(writeFilesData);
    });
};

readDir('./test-catalog');
fs.readFile('./filesData.txt', 'utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
});
