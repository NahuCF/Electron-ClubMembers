(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const fs = require('fs');

//var rawdata = fs.readFileSync('../socios.json');
//var socios = JSON.parse(rawdata);

fs.appendFile('./mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

function ReadJSONFile(jsonPath)
{

}

var d = new Date();
let JSON =
[
    {
        "name": "Nahuel",
        "photoPath": name + "IMG",
        "inscriptionDay": 14,
        "inscriptionMonth": 3,
        "inscriptionYear": 2020
    },
    {
        "name": "Nahuel",
        "photoPath": name + "IMG",
        "inscriptionDay": 14,
        "inscriptionMonth": 3,
        "inscriptionYear": 2020
    }
]

    //console.log(JSON[0].name);
    //console.log(Object.keys(JSON).length);
    //JSON[0].name = "tuvieja";  
//document.getElementById("Texto").innerHTML = socios[0].name;
},{"fs":1}]},{},[2]);
