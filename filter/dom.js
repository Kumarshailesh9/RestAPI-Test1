var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
function addItem(e){
  e.preventDefault();

  // add item and get value from input 
  var newItem = document.getElementById('item').value;
  var desItem = document.getElementById('description').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem+' '));
  //li.appendChild(document.createTextNode(' '));
  li.appendChild(document.createTextNode(desItem));

  // Create delete  button
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);

  // Add Edit Button 
  var newtag = document.createElement('button');
  newtag.className = 'btn btn-sm float-right ';
  var newtxt = document.createTextNode('Edit');
  newtag.appendChild(newtxt);
  li.appendChild(newtag);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
    const disName = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || disName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
