var getData = function(url, callback) {
    console.log(`> Getting data from ${url}...`);
    var httpReq = new XMLHttpRequest();
    httpReq.open('GET', url);
    httpReq.responseType = 'application/json';
    
    httpReq.addEventListener('progress', updateProgress);
    httpReq.setRequestHeader('Content-Type', 'text/plain');
		httpReq.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) {
        callback(null, this.responseText);
        var json=JSON.parse(this.responseText);
        //document.getElementById("reportData").innerHTML=JSON.stringify(json);
        var mainContainer = document.getElementById("reportData");
        var container=document.getElementById("Counties");
  for (var i = 0; i < json.length; i++) {
    var div = document.createElement("div");
    var div1=document.createElement("div");
     var Counties=json[i].Counties;
    //console.log(Counties);
    for(var j=0;j<Counties.length;j++){
    	//console.log(Counties[j].CountyName);
    div.innerHTML = 'State: ' + json[i].StateName+' CountyName: '+Counties[j].CountyName +' Population: '+ Counties[j].Population;
    //div1.innerHTML='CountyName: ' +Counties[j].CountyName;
   }
   // container.appendChild(div1);
    mainContainer.appendChild(div);
    
  }
      } 
      else {
        callback(`readyState = ${this.readyState}, status = ${this.status}`);
      }
    }
    httpReq.send();
}

function updateProgress(e) {
    console.log(`> Progress -- ${e.type} @ ${e.loaded} bytes`);
}

function getReportData() {
	console.log('> Running getReportData...');
  var remoteUrl = 'https://bhamilton1000.github.io/SampleData/Web-Question-001/UnitedStatesWithCounties.json';
  
	getData(remoteUrl, 
    function(err, data) {
      if (err === null) {
      	console.log(`> Your document is loaded @ ${data.result} bytes`);
      }
      else {
      	console.log(`> Alert -- ${err}`);  
      }
    }
  );
  console.log('> Done.');
}

document.getElementById("getReportDataButton").addEventListener("click", getReportData);