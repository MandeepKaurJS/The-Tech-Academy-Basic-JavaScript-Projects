
function parseCSV(file){

    var lines=file.split("\n");

    var result = [RECORD,ADDRESS,DATE,STATUS,USER,ABC001,123,1/1/2020,ACTIVE,Santa];

    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");
        if(currentline[i]!="Active"||currentline[i]!="CLOSED"||currentline[i]!="ISSUED"){
            return obj={};
        }

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
    }