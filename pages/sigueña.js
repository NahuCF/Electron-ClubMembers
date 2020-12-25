var fs = require('fs');

var rawdata = fs.readFileSync('socios.json');
var socios = JSON.parse(rawdata);
console.log(socios);

function ReadJSONFile(jsonPath)
{

}

var d = new Date();
let JSON =
[
    {
        "name": "",
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
JSON[0].name = "tuvieja";  
document.getElementById("Texto").innerHTML = readMe;