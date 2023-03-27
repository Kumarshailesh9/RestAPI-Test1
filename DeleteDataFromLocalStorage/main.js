
function bookAppoiment(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.mail.value;
    const mo = event.target.mob.value;
   // const dt = event.target.date.value;
   // const t = event.target.time.value;

    let userInfo = {
        name,
        email,
        mo,
       // dt,
       // t
    };
    localStorage.setItem(userInfo.email,JSON.stringify(userInfo));

    showuserInfo(userInfo);

    function showuserInfo(userInfo){
        // intialize a var for parent node
        const ulItem = document.getElementById('items');

        //intialize a var for child node or list item
        const newList = document.createElement('li');
        //value from object
        newList.textContent = userInfo.name+' '+userInfo.email+' '+userInfo.mo+' ';
        //create delet button
        const delbtn = document.createElement('input');
        delbtn.type="button";
        delbtn.value="Delete";
        //append delete button to child  node
        newList.appendChild(delbtn);
        //append child node to parent node
        ulItem.appendChild(newList);
        //function for delete elemet click on delete button
         delbtn.onclick = () => {
            localStorage.removeItem(userInfo.email);
            ulItem.removeChild(newList);
        }
       

    }

    
}
