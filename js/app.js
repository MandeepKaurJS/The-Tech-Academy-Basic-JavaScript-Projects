function UpdateButton(){
var greeting ="Hello World!";
document.getElementById('btn').innerHTML=greeting;
}

function converttocelicus(tempinf){
  tempinc=(tempinf-32)*5/9;
}
console.log(converttocelicus(201));
var person={
    fname:"mandeep",
    lname:"kaur",
    fullname: function(){
        return person.fname+""+person.lname;
    }
}
name=person.fullname();
console.log(name);

let randomNumber=Math.random();

if(randomNumber >= 0 && randomNumber < 0.25){
    console.log("Random number is less than 0.25");
}
else if(randomNumber >= 0.25 && randomNumber < 0.5){
    console.log("Random number is less than 0.5");
}
else if(randomNumber >= 0.5 && randomNumber < 0.75){
    console.log("Random number is less than 0.75");
}
else{
    console.log("out of condition");
}

var fruit = "orange";
switch (fruit){
    case "banana":
    console.log("Bnana is yellow");
    break;
    case "orange":
    console.log("orange is orange");
    break;
    default:
    console.log("no fruit no this color");
}
var randomNumber1 = Math.floor((Math.random()*10));
//var randomNumber1=11;
switch(randomNumber1){
    case 0:
    case 1:
    case 2:
    console.log(`the random number is ${randomNumber1}.`);
    break;
    case 3:
    case 4:
    case 5:
    case 6:
    console.log("the random number is between 3 to 7");
    break;
    case 7:
    case 8:
    case 9:
    console.log("the random number ks greater then 7");
    break;
    default:
    console.log("something went wrong");
}
for(var i=1;i<=100;i++){
    console.log(i);
}

