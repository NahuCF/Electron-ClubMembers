var fs = require('fs');

var rawdata = fs.readFileSync('socios.json');
var socios = JSON.parse(rawdata);
console.log(socios);

function ReadJSONFile(jsonPath)
{

}

document.getElementById("Texto").innerHTML = readMe;