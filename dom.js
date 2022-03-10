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

// let items = document.getElementsByClassName('list-item');

// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives an error
// //items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

/* 
================================================================================================================================
getElelmentByTagName
================================================================================================================================
*/

// let li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

/* 
================================================================================================================================
querySelector  // Grabs the first item
================================================================================================================================
*/

// let header = document.querySelector('#header');

// console.log(header);
// header.style.borderBottom = '4px solid #000';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "Send"

// let item = document.querySelector('.list-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-item:nth-child(2)');
// secondItem.style.color = 'grey';

/* 
================================================================================================================================
querySelectorAll
================================================================================================================================
*/

var titles = document.querySelectorAll('.title');
 
console.log(titles); 
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

/* 
================================================================================================================================
TRAVERSING THE DOM
================================================================================================================================
*/

var itemList = document.querySelector('.items');
console.log(itemList);

/* ===== parentNode ===== */
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


/* ===== parentElement ===== */
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);



/* ===== childNodes ===== */  // Don't use this, use children instead
// console.log(itemList.childNodes);

/* ===== children ===== */
// console.log(itemList.children); 
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';



/* ===== firstChild ===== */  // Don't use this, use firstElementchild instead
// console.log(itemList.firstChild); 

/* ===== firstElementChild ===== */
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';



/* ===== lastChild ===== */ // Don't use this, use lastElementChild instead
// console.log(itemList.lastChild);

/* ===== LastElementChild ===== */
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';



/* ===== nextSibling ===== */
// console.log(itemList.nextSibling);

/* ===== nextElementSibling ===== */
// console.log(itemList.nextElementSibling);



/* ===== previousSibling ===== */
// console.log(itemList.previousSibling);

/* ===== previousElementSibling ===== */
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';




/* 
================================================================================================================================
createElement
================================================================================================================================
*/