for(let i=0; i<=10000;i++){
    if(i%2===0){
        console.log("number is even:  "+ i);
    }
    else{
        console.log("number is odd:  "+ i);
    }
}
function myfunction(){
    var status;
    var age=19;
    status=age>18?"adult":"minor";
    console.log(status);
}
myfunction();
