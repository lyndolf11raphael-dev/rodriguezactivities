function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    if(username.length === 0 ||  password.length === 0 || confirm.length === 0){
        alert("Info. Needed");
    } else if (password === confirm) {
        alert("Goods");
    } else {
        alert("Info Mismatch");
    }

}