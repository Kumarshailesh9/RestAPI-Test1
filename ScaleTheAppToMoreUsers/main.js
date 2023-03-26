
function bookAppoiment(event){
    event.preventDefault();
    const name = event.target.name.value;
    //localStorage.setItem('user',name);
    const email = event.target.mail.value;
    //localStorage.setItem('emailID',email);
    const mo = event.target.mob.value;
    //localStorage.setItem('number',mo);
    const dt = event.target.date.value;
    //localStorage.setItem('date',dt);
    const t = event.target.time.value;
    //localStorage.setItem('time',t);

    let userInfo = {
        name,
        email,
        mo,
        dt,
        t
    };
    // use email for Scale the app to more users
    localStorage.setItem(email,JSON.stringify(userInfo));

}
