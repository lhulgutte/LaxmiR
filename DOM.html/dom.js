console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title="123";
//console.log(document.title);
console.log(document.head);
console.log(document.all);
console.log(document.getElementById('hello'));
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var items=document.getElementByClass('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello';
items[1].style.color="green";
items[1].style.fontWeight="bold";
