import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    
    carList= ["Ford","Tata","Jaguar","Audi","Porche","Bugati","Mercedes"];
    
    ceoList = [
        {
            id:1,
            company:"Google Inc",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"IBM",
            name:"Arvind Krishna"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Zukerberg"
        },
        {
            id:4,
            company:"Twitter",
            name:"Jack Dorsey"
        }
    ];


}