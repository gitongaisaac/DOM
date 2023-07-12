var form = document.querySelector('.add-form');
var itemList = document.querySelector('.items');
var search = document.querySelector('.search');

// Form submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Search Event
search.addEventListener('keyup', searchItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.querySelector('.items').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // Create delete button
    var deleteBtn = document.createElement('button');
    // Add Classes to the delete button
    deleteBtn.className = 'delete top';
    // append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

}


// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Search Items
function searchItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get List
    var items = itemList.getElementsByTagName('li');

    // Convet into an array
    Array.from(items).forEach(function(item) {
        var itemName =item.firstChild.textContent; 
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
        }
    )
}