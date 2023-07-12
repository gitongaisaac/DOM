/* 
================================================================================================================================
EXAMINE THE  DOCUMENT OBJECT
================================================================================================================================
*/
/* ===== FINDING HTML ELEMENTS ===== */
// If you want to access any element in an HTML page, you always start with accessing the document object.
// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);  
console.log(document.all[10]);  
document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

/* 
================================================================================================================================
getElementById
================================================================================================================================
*/

console.log(document.getElementById('header'));
var subject = document.getElementById('subject');
var header = document.getElementById('header');

console.log(subject);
subject.textContent = 'Hello';
subject.innerText = 'Goodbye';
console.log(subject.innerText);
subject.innerHTML = '<h1>Hello</h1>';
header.style.borderBottom = '3px solid #000';

/* 
================================================================================================================================
getElementByClassName
================================================================================================================================
*/

let items = document.getElementsByClassName('list-item');

console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// Gives an error
//items.style.backgroundColor = '#f4f4f4';

for(let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

/* 
================================================================================================================================
getElelmentByTagName
================================================================================================================================
*/

let li = document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

/* 
================================================================================================================================
querySelector  // Grabs the first item
================================================================================================================================
*/

let header = document.querySelector('#header');

console.log(header);
header.style.borderBottom = '4px solid #000';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value = "Send"

let item = document.querySelector('.list-item');
item.style.color = 'red';

let lastItem = document.querySelector('.list-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-item:nth-child(2)');
secondItem.style.color = 'grey';

/* 
================================================================================================================================
querySelectorAll
================================================================================================================================
*/
// If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

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
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);


/* ===== parentElement ===== */
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);



/* ===== childNodes ===== */  // Don't use this, use children instead
console.log(itemList.childNodes);

/* ===== children ===== */
console.log(itemList.children); 
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';



/* ===== firstChild ===== */  // Don't use this, use firstElementchild instead
console.log(itemList.firstChild); 

/* ===== firstElementChild ===== */
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';



/* ===== lastChild ===== */ // Don't use this, use lastElementChild instead
console.log(itemList.lastChild);

/* ===== LastElementChild ===== */
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello';



/* ===== nextSibling ===== */  // Do not use this use nextElementSibling instead
console.log(itemList.nextSibling);

/* ===== nextElementSibling ===== */
console.log(itemList.nextElementSibling);



/* ===== previousSibling ===== */  // Do not use this, use previousElementSibling instead
console.log(itemList.previousSibling);

/* ===== previousElementSibling ===== */ 
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


/* 
================================================================================================================================
createElement
================================================================================================================================
*/

// Create a div
 var newDiv = document.createElement('div');

 // Add class
 newDiv.className = 'hello';

 // Add id
 newDiv.id = 'hello1';

 //Add att
 newDiv.setAttribute('title', 'Hello Div');

 // Create text node
 var newDivText = document.createTextNode('Hello world');

 //Add text to the Div
 newDiv.appendChild(newDivText);

 // Inserting the div into the dom
 var container = document.querySelector('#header .container-1');
 var h1 = document.querySelector('#header h1');

 console.log(newDiv);

 container.insertBefore(newDiv, h1);
 newDiv.style.fontSize = '30px';

/* 
================================================================================================================================
Events
================================================================================================================================
*/

var button = document.getElementById('span').addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log('Button Clicked');
    document.getElementById('subject-title').textContent = 'Modified';
    document.querySelector('.card').style.backgroundColor = '#f4f4f4';

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

    console.log(e.type);

    console.log(e.offsetx);
    console.log(e.offsety);

    console.log(e.clientx);
    console.log(e.clienty);

    console.log(e.altkey);
    console.log(e.ctrlkey);
    console.log(e.shiftkey);
}


/* ===== Mouse Events ===== */
var button = document.getElementById('span');
var box = document.getElementById('box');

button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

// Mouse Over is for the inner Element ie the h3
// Mouse Enter is for the actuall element ie the box element

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log('Event Type: '+e.type);

    output.innerHtml = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}


/* ===== KeyBoard and Input Events ===== */
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('.form');
var select = document.querySelector('.select');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('Event Type: ' +e.type);

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>' +e.target.value+'</h3>';
}