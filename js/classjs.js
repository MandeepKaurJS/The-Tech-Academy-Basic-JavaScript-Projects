class Person{
    constructor(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
    getnanme(){
        return this.firstname+""+this.lastname;
    }
}
var me=new Person('mandeep','kaur');
 console.log(me.getnanme());