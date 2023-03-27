
function bookAppoiment(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.mail.value;
    const mo = event.target.mob.value;

    let userInfo = {
        name,
        email,
        mo
    };
    localStorage.setItem(userInfo.email,JSON.stringify(userInfo));

    showuserInfo(userInfo);

    function showuserInfo(userInfo){
        const ulItem = document.getElementById('items');

        const newList = document.createElement('li');
        
        newList.textContent = userInfo.name+' '+userInfo.email+' '+userInfo.mo+' ';
       
        const delbtn = document.createElement('input');
        delbtn.type="button";
        delbtn.value="Delete";
       
        delbtn.onclick = () => {
            localStorage.removeItem(userInfo.email);
            ulItem.removeChild(newList);

        }

        const editbtn = document.createElement('input');
        editbtn.type="button";
        editbtn.value="Edit";

        editbtn.onclick = () => {
            localStorage.removeItem(userInfo.email)
            ulItem.removeChild(newList)
            document.getElementById('username').value = userinfo.name
            document.getElementById('mail').value = userInfo.email
            document.getElementById('mob').value = userInfo.mo
            
        }
        newList.appendChild(delbtn);
        newList.appendChild(editbtn);
        ulItem.appendChild(newList);

    }

    
}
