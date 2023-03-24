

var newDiv = document.getElementById('header-title');
var newNode = document.createElement('div');
newNode.textContent='hello world';
newDiv.parentNode.insertBefore(newNode,newDiv);




var newlist = document.getElementById('items');
var newlistitem = document.createElement('li');
var newtext = document.createTextNode('Hello 1');
newlistitem.appendChild(newtext);
newlist.insertBefore(newlistitem,newlist.firstChild);