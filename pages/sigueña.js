var fs = require('fs');

var rawdata = fs.readFileSync('socios.json');
var socios = JSON.parse(rawdata);;

var nombresito = "OsitoSimon";

var sociosElement = 
{
    "names": nombresito,
    "lastName": "",
    "direction": "",
    "dni": "",
    "cellphone": "",
    "alternativeCellphone": "",
    "email": "",
    "observations": ""
}
var sociosArray =
[
    
]

for(var i = 0; i < 10; i++)
{
    sociosArray[i] = sociosElement;
}
var data = JSON.stringify(sociosArray, null, 2);
fs.writeFileSync('socios.json', data);
console.log(data);
console.log(socios[5]);

console.log(Object.keys(sociosArray).length);


function ReadJSONFile(jsonPath)
{

}

//document.getElementById("Texto").innerHTML = readMe;