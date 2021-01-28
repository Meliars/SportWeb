

function writeUserName() {
    let userName = usrInput.value;
    return userName;
}

function writeUserPassword () {
    let userPassword = usrPassword.value;
    return userPassword;
}

function show (name, password) {
    const userName = writeUserName();
    const userPassword = writeUserPassword();
    alert(userName + ' ' + userPassword);

}

loginInput.addEventListener('click', show);