function showUser() {
    let logout = document.getElementById('logout');

    if (logout.style.display == 'flex') {
        logout.style.display = 'none';
    } else {
        logout.style.display = 'flex';
        logout.style.alignItems = 'flex-end';
        logout.style.height = '50px';
    }
};

function logIn() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    for (const user of users) {
        if (user.email == email.value && user.password == password.value) {
            localStorage.setItem('loged', user.email);
        }
    }
    checkLoged();
};

function logOut() {
    localStorage.removeItem('loged');
    checkLoged();
};

function checkLoged() {
    let login = document.getElementById('login');
    let content = document.getElementById('content');
    let nav = document.getElementById('navigation');
    let loged = localStorage.getItem('loged');

    if (loged) {
        console.log(`User loged: ${loged}`);
        login.style.display = 'none';
        content.style.display = 'flex';
        nav.style.display = 'flex';
    } else {
        login.style.display = 'flex';
        content.style.display = 'none';
        nav.style.display = 'none';
    }
};

checkLoged();