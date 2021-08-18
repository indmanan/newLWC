import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname = "Manan Kumar Singh";
    // name
    // age = 30;
    // fullName = "Salesforce India";
    // showData = "true";
    details = {
        name:"dummy",
        location:"seatel",
        state:"wasington"
    }
    // userList = ["manan2one.com", "manan@two.com" , "manan@three.com" , "manan@four.com"];
    name = "Manan Kumar";
    company = "IBM"
    time = "1 month"
    get companyname(){
        return this.company;
    }
    changeHandler(event){
        this.time = event.target.value;
    }

    @track address = {
        city:"Siwan",
        state:"Bihar",
        country:"INDIA",
        pin: 841226
    }
    trackHandler(event){
        this.address.city = event.target.value;
    }

    //use of spread operator to avoid the @track

    people ={
        name:"Manan Kumar"
    }
    
    spreadHandler(event){
        this.people = {...this.people, "name":event.target.value}
    }
// getter example solution
    no1 = 5;
    no2 = 14;
    get square(){
        return this.no1 * this.no2;
    }
    arr = ["Zero Data Index","First Data Index","Second Data Index","Third Data iNdex"];
    get arrdata(){
        return this.arr[0].toUpperCase();
    }

}


