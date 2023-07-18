//Get All Value
let submitBtn = document.getElementById('submit1');
let form = document.getElementById('form');

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

 //Set Value And LocalStorage
    localStorage.setItem('obj',JSON.stringify(obj));
   });

   //NOTE:Big problem of the app - Everytime you add a new user, the older user gets removed. Why does this happen any ideas. Write the reason in the answer.
   //Ans:To solve this you have to use an array, stringify it and then store it.