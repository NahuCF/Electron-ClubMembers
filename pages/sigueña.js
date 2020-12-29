var fs = require('fs');

var varNames;
var varLastName;
var varDirection;
var varDni;
var varCellphone;
var varAlternativeCellPhone;
var varEmail;
var varObservations;

var sociosElement = 
{
    "names": "",
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


document.getElementById("Send-Data").onclick = SendDataToVariables;

function SendDataToVariables()
{
    varNames = document.getElementById("Texto").textContent;
    CopyDataToArray();
}

function CopyDataToArray()
{
    sociosElement.names = varNames;
    sociosElement.lastName = varLastName;
    sociosElement.direction = varDirection;
    sociosElement.dni = varDni;
    sociosElement.cellphone = varCellphone;
    sociosElement.alternativeCellphone = varAlternativeCellPhone;
    sociosElement.email = varEmail;
    sociosElement.observations = varObservations;
    
    WriteJSONFile();
}
function WriteJSONFile()
{  
    var rawdata = fs.readFileSync('socios.json');

    sociosArray[0] = sociosElement;

    if(rawdata.byteLength == 0)
    {
        sociosArray.splice(0, sociosArray.length);

        sociosArray[0] = sociosElement; 
    }
    else if(rawdata.byteLength > 0)
    {
        sociosArray.splice(0, sociosArray.length);
        let socios = JSON.parse(rawdata)

        for(var i = 0; i < Object.keys(socios).length; i++)
        {
            sociosArray[i] = socios[i];
        }
        sociosArray[sociosArray.length] = sociosElement;
    }
    
    let data = JSON.stringify(sociosArray, null, 2);
    fs.writeFileSync('socios.json', data);
}