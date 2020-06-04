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
      	console.log(`> Your document is loaded @ ${data} bytes`);
      }
      else {
      	console.log(`> Alert -- ${err}`);  
      }
    }
  );
  console.log('> Done.');
}

document.getElementById("getReportDataButton").addEventListener("click", getReportData);