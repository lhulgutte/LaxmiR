console.log(document.domain);
console.log(document.URL);

//console.log(document.getElementById('hello'));
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello';
items[1].style.color="green";
items[1].style.fontWeight="bold";
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}
