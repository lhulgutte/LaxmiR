/*console.log("Script states");

const id=setTimeout(() =>{
    console.log("Inside Settimeout");
},0);
for(let i=0;i<5;i++)
{
    console.log("inside loop");
}
clearTimeout(id);
console.log("Script ends"); */
/*console.log("Script states");

setInterval(() =>{
    console.log("Inside Settimeout");
},100);
for(let i=0;i<5;i++)
{
    console.log("inside loop");
}
console.log("Script ends");*/

/*function myfunc(number1,number2,onSuccess,onFailure){
    if(typeof number1==="number" && typeof number2==="number")
    onSuccess(number1,number2);
else{
    onFailure();
}
    
}


myfunc(3,4,(num1,num2) =>{
    console.log(num1+num2);
}, () =>{
    console.log("Wrong datatype. Please enter correct data");
});*/

/*const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");

setTimeout(() =>{
    heading1.textContent="Heading1";
    heading1.style.color="red";
    setTimeout(() =>{
        heading2.textContent="Heading2";
        heading2.style.color="green";
        setTimeout(() =>{
            heading3.textContent="Heading3";
            heading3.style.color="blue";
            setTimeout(() =>{
                heading4.textContent="Heading4";
                heading4.style.color="yellow";
                setTimeout(() =>{
                    heading5.textContent="Heading5";
                    heading5.style.color="pink";
                    setTimeout(() =>{
                        heading6.textContent="Heading6";
                        heading6.style.color="orange";
                        setTimeout(() =>{
                            heading7.textContent="Heading7";
                            heading7.style.color="indigo";  
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);*/

/*function changeText(element, text,color,time,onSuccess,onFailure){
     setTimeout(() =>{
        if(element){
        element.textContent=text;
        element.style.color=color;
        if(onSuccess){
        onSuccess();
        }
        }
        else{
            if(onFailure)
            onFailure();
            //console.log("Your Element does not exist");
        }
     },time)
}
//Pyramid of Doom
changeText(heading1,"heading1","red",1000,()=>{
    changeText(heading2,"heading2","green",1000,()=>{
        changeText(heading3,"heading3","blue",1000,()=>{
            changeText(heading4,"heading4","orange",1000,()=>{
                changeText(heading5,"heading5","pink",1000,()=>{
                    changeText(heading6,"heading6","indigo",1000,()=>{
                        changeText(heading7,"heading7","yellow",1000,()=>{
                       changeText(heading8,"heading8","red",1000,()=>{},()=>{});
                        },()=>{ console.log("Your Element does not exist");});
                    },()=>{ console.log("Your Element does not exist");});
                },()=>{ console.log("Your Element does not exist");});
            },()=>{ console.log("Your Element does not exist");});
        },()=>{ console.log("Your Element does not exist");});
    },()=>{ console.log("Your Element does not exist");});
},()=>{ console.log("Your Element does not exist");});*/
/*console.log("Script Start");
setTimeout(()=>{
    console.log("Hello from setout");
},1000);
const bucket=['coffee','chips','vegetables','salt','rice'];
const friedrice=new Promise((resolve,reject)=>{
   if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice"))
   {
    resolve("Fried Rice");
   }else{
    reject(new Error("couldn't do it, something is missing in bucket to prepare fried rice"));
   }
})

friedrice.then((myfriedrice)=>{
    console.log("let's eat",myfriedrice);
}).catch((error)=>{
    console.log(error);
});

for(let i=0;i<5;i++)
{
    console.log(i);
}
console.log("Script End");*/
/*function fun(){
    const bucket=['coffee','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
        //const value=true;
        setTimeout(()=>{
       
       
   if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice"))
   {
    resolve("Fried Rice");
   }else{
    reject(new Error("couldn't do it, something is missing in bucket to prepare fried rice"));
   }
},0)
})
}
fun().then((myfriedrice)=>{
    console.log("let's eat",myfriedrice);
    myfriedrice +="  is yummy";
    return myfriedrice;
}).then((myfriedrice)=>{
    myfriedrice += " come eat na!"
    console.log(myfriedrice);
}).catch((error)=>{
    console.log(error);
});*/

/*const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");
const a=document.querySelector("a");
console.log(a.getAttribute("href"));
a.setAttribute("href","#hello");
console.log(a.getAttribute("href").slice(1));

function changeText(element, text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            if(element){
            element.textContent=text;
            element.style.backgroundColor=color;
             resolve("now see it");
            }
            else{
                reject("elementnot found");
            }
         },time)
    })
    
}

const returnedpromise=changeText(heading1,"one","red",1000)
.then(()=>changeText(heading2,"two","purple",1000)) //return changeText(heading2,"two","purple",1000);
.then(()=>changeText(heading3,"three","green",1000))   
.then(()=>changeText(heading4,"four","blue",1000))
.then(()=>changeText(heading5,"five","yellow",1000))
.then(()=>changeText(heading6,"six","orange",1000))
.then(()=>changeText(heading7,"seven","indigo",1000))
.catch((error)=>{
    alert(error);
})*/