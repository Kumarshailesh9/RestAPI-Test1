var inputprice = document.getElementById('price');
var inputDesc = document.getElementById('desc');
var selection =document.getElementById('mySelection');
function  ExpenseTracker(event){
    event.preventDefault();
    const price = event.target.price.value;
    const desc = event.target.desc.value;
    const sel = event.target.mySelection.value;

    let userData = {
        price,
        desc,
        sel
    }
    localStorage.setItem(price,JSON.stringify(userData));

    let li = document.getElementById('items');
    let newList = document.createElement('li');
    let newText = document.createTextNode(userData.price+' '+userData.desc+' '+ userData.sel+' ');
    newList.appendChild(newText);
    const delbtn = document.createElement('input');
    delbtn.type='button';
    delbtn.value='Delete';
    const editbtn = document.createElement('input');
    editbtn.type ='button';
    editbtn.value='Edit';
    newList.appendChild(delbtn);
    newList.appendChild(editbtn);
    li.appendChild(newList);
    
    delbtn.onclick = () => {
        localStorage.removeItem(userData.price);
        li.removeChild(newList);
    }
    editbtn.onclick = () => {
        localStorage.removeItem(userData.price);
        li.removeChild(newList);
       inputprice.value=userData.price;
       inputDesc.value =userData.desc;
       inputSelection.value= userData.sel;
    }

}