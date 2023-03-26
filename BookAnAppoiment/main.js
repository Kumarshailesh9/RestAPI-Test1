
            function bookAppoiment(){
                const name = document.getElementById('name').value;
                localStorage.setItem('fullname',name);
                const mail = document.getElementById('mail').value;
                localStorage.setItem('Email',mail);
                const mob = document.getElementById('mob').value;
                localStorage.setItem('Mobile',mob);
                const d = document.getElementById('date').value;
                localStorage.setItem('AP date',d);
                const t = document.getElementById('time').value;
                localStorage.setItem('Ap time',t);
            }
      