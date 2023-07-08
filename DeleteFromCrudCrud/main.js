
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
    axios.post("https://crudcrud.com/api/bda076a6e9424514967667b8c54fe33a/userDetails",userInfo)
    .then((res)=>{
       showuserInfo(res.data)
         console.log(res)
    })
    .catch((err)=>{
        document.body.innerHTML= document.body.innerHTML+"<h4>  Something went wrong </h4>";
        console.log(err)
    });
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/bda076a6e9424514967667b8c54fe33a/userDetails")
        .then((response) => {
            console.log(response)
            for(var i=0;i<response.data.length;i++){
                showuserInfo(response.data[i])
            }
        })
        .catch((err)=>{
            console.log(err)
        }) 

 })


   function showuserInfo(user){
        
     document.getElementById('mail').value="";
     document.getElementById('name').value ="";
     document.getElementById('mob').value="";

    //  if(localStorage.getItem(user.email) !== null){
    //     removeUserFromScreen(user.email)
    //  }
      
        const parentNode = document.getElementById('items');
        const childHTML = `<li id=${user._id}> ${user.name} -${user.email} - ${user.mo}
                            <button onclick=deleteUser('${user._id}')>DELETE</button>
                            <button onclick=editDetails('${user.email}')>EDIT</button>
                            </li>`
        parentNode.innerHTML = parentNode.innerHTML +childHTML;
   }
  
  function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/bda076a6e9424514967667b8c54fe33a/userDetails/${userId}`)
    .then((response) => {
        console.log(response)
        removeFromScreen(userId)
    })
    .catch((err) => console.log(err))

   }

function removeFromScreen(userId){
        const parentNode = document.getElementById('items');
        const childNodeToBeDeleted = document.getElementById(userId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted)
        }
}

        