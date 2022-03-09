/* 
================================================================================================================================
EXAMINE THE  DOCUMENT OBJECT
================================================================================================================================
*/
// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);  
// console.log(document.all[10]);  
// //document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

/* 
================================================================================================================================
getElementById
================================================================================================================================
*/

//console.log(document.getElementById('header'));
// var subject = document.getElementById('subject');
// var header = document.getElementById('header');

// console.log(subject);
// subject.textContent = 'Hello';
// subject.innerText = 'Goodbye';
// console.log(subject.innerText);
// subject.innerHTML = '<h1>Hello</h1>';
// header.style.borderBottom = '3px solid #000';

/* 
================================================================================================================================
getElelmentByClassName
================================================================================================================================
*/

var items = document.getElementsByClassName('list-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// Gives an error
//items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < items.length; i) {
    items[i].style.backgroundColor = '#f4f4f4';
}


