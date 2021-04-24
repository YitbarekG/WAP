
let a = [1,50,40,3,10];

let result  = a.filter(function(e,i,a){
    return e>20;
}).reduce(function(a1,cur,i,arr){return a1+=cur;},0);

console.log("The sum of numbers greater than 20 is:  "+result);


let string1 = ['hello', 'this', 'is', 'javascript', 'with' , 'tinaa'];

let newString = string1.filter(function(a,b,c){
    return a.length>=5 && a.includes("a");
});

console.log("Strings with length grater than 5 and have letter 'a' are  "+ newString);



function Empployee(firstName, lastName, birthDate){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.birthDate = birthDate;
    this.getFullname  = function(){ return this.firstName  +" "+ this.lastName;};
    this.getAge = function(){return (new Date().getFullYear() - new Date(this.birthDate).getFullYear())};
    
}
//

emps = [new Empployee('a','b',"02/24/2001"),
new Empployee('a1','b1',"02/24/2016"),
new Empployee('a2','b2',"02/24/1993"),
new Empployee('a3','b3',"02/24/2014"),
new Empployee('a4','b4',"02/24/2000"),
new Empployee('a5','b5',"02/24/1996"),
new Empployee('a6','b6',"02/24/2012")
];



let EmployeeAgeG20  = emps.filter(function(e,index, arr){return e.getAge() > 20;});

let nameEmployeeBornAfter2000  = emps.filter(function(e,index, arr){return new Date(e.birthDate).getFullYear() > 2000;}).map(function(e){return e.getFullname();});

console.log("Employee age greater than 20 are:  " + EmployeeAgeG20.length);
console.log(nameEmployeeBornAfter2000);
