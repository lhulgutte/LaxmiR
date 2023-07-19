//Get All Value
let submitBtn = document.getElementById('submit1');
let form = document.getElementById('form');

let users=[];

if(localStorage.getItem('obj')){
    //parse to JSON object
    let usersArray=JSON.parse(localStorage.getItem('obj')) || []
     console.log(usersArray);
     console.log(typeof usersArray);
   
}

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Start SendBtn
submitBtn.addEventListener('click', (e) => {
    let name = document.getElementById('username');
    let email = document.getElementById('useremail');
    
    let obj={
        name:name.value,
        email:email.value
    };

    users.push(obj);

 //Set Value And LocalStorage
    localStorage.setItem('obj',JSON.stringify(users));
   console.log(JSON.stringify(users));
   alert("Your details are stored in localStorage");
 

});