/*let firstName=" Harshit ";
console.log(firstName[-1]);
console.log(firstName.length);
console.log(firstName[firstName.length-1]);
console.log(firstName.trim());
firstName=firstName.trim();
console.log(firstName[firstName.length-1]);
console.log(firstName.toUpperCase());
let newString=firstName.slice(0,4);
console.log(newString);*/
/*let age="22";
age=Number(age);
let firstName1="harsh";
console.log(typeof (age+"harshit"));
console.log(typeof (age));*/

/*let string1=10;
let string2="harshit";
console.log(string1+string2);
console.log(`my name is ${string2} and my age is ${string1}`);*/

//console.log(typeof null);

/*let myNum=123;
console.log(Number.MAX_SAFE_INTEGER);
myNum=BigInt(123); //myNum=123n;*/

/*let name=["hello", 2,4];
let name1=name.slice(0).concat(["Amit",100]); //slice method
//console.log(name===name1);
//let name1=[].concat(name); //concat method
//console.log(name===name1);
console.log(name);
console.log(name1);
let name3=[...name1]; //spread operator
console.log(name3);
console.log(name1===name3);*/

/*const mein=["Apple", "Mango"];
mein=["hello","world"]; //error
mein.push("Radha"); //no error
console.log(mein);*/

/*const key1="obj1";
const key2="obj2";

const value1="objval1";
const value2="objval2";

const obj={
  
}
obj[key1]=value1;
obj[key2]=value2;

console.log(obj);*/

/*const arr1=[1,2,3];
const arr2=[4,5,6]
const newArray=[...arr1,...arr2,..."abc",12345];
console.log(newArray);

const obj1={
  array1:"value1",
  array2:"value2"
};

console.log(obj1);

const obj2={
  array1:"value3",
  array4:"value4"
};

console.log(obj2);
const ar=["item1",1,7,"and","f"];
const obj={...obj1,...obj2,key67:"value68",...ar,..."abcd"};

console.log(obj);*/
/*const ar=["item1",1,7,"and","f"];
const [it,it1,]=ar;
console.log(it);*/

/*let array1=[{userid:1,firstName:"Amit",gender:"male"},
{userid:1,firstName:"Amita",gender:"female"},{userid:1,firstName:"Amar",gender:"male"},
]

const [{userid},,{gender}]=array1;

console.log(gender);
console.log(userid);*/

/*function myfunc(){
  return function(){
    return "Hello";
  };
 // return hello();
}

const ans=myfunc();
console.log(ans);*/

/*const numbers=[4,2,5,8];



const hello=numbers.map(function (number){
  return ` number is ${number}`;
 
 })

console.log(hello);*/

//object is not iterable
/*const userMethod={
  about:function(){
    return `user name is ${this.firstName} ${this.lastName} and email is ${this.email}`
}
}*/
/*function createUser(firstName, lastName, email)
{
  const user=Object.create(createUser.prototype);
  user.firstName=firstName;
  user.lastName=lastName;
  user.email=email;
  //user.about=userMethod.about;
  createUser.prototype.about=function(){
    return `user name is ${this.firstName} ${this.lastName} and email is ${this.email}`
}
  return user;
}
const user1=createUser('harshit', 'vashisht', 'h@gmail.com');
console.log(user1.firstName);
console.log(user1.about()); */


//What will() be the output of the following code snippet?
/*const name = (arr) => { 
  let index = 0; 
  // Define an inner function that will be returned by the outer function 
  function inner() { 
    if (index >= arr.length) {
       // Reset the index if it reaches the end of the array 
       index = 0; } 
       // Print "Hello" followed by the name at the current index 
       console.log("Hello " + arr[index]); // Increment the index for the next name 
       index++; } // Return the inner function 
       return inner; }
        let fun = name(["Ram", "Shyam"]);
         fun(); // Print "Hello Ram" 
       fun(); // Print "Hello Shyam"

       function y(){



        for(let i=1;i<6;i++){
        
        setTimeout(() => console.log(i ), i * 1000)
        
        }
        
        console.log('Done Coding')
        
        
        
        }
        
        y();*/
        var fun = a =>{ a }

        var a =10;
        
        console.log(fun(a))