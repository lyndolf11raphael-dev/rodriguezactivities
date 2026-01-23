function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username.length === 0 ||  password.length === 0) {  //data type === compare , value == compare
        alert("Username and Password needed");
    } else if (username === "admin" && password === "nimda"){
        alert("Goods");
    } else {
        alert("Invalid Data");
    }
    
    
    
}