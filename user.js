
//LocalStorage


function signIn() {
    const userName = document.getElementById('username').value;
    document.getElementById("username").value = " ";
    localStorage.setItem("User", userName);
    document.getElementById("sign-in-form").style.display = 'none';
    document.getElementById("sign-out-form").style.display = 'block';
    document.getElementById("user-name-prompt").innerHTML = userName
    document.getElementById("user-name-prompt").style.display = 'block'
}

document.getElementById("sign-in-button").addEventListener('click', signIn );





function signOut () {
    const userName = document.getElementById('username').value;
    localStorage.removeItem("User", userName);
    document.getElementById("sign-in-form").style.display = 'block';
    document.getElementById("sign-out-form").style.display= 'none';
    document.getElementById("user-name-prompt").style.display = 'none';
}

document.getElementById("sign-out-button").addEventListener('click', signOut );




function checkIfUserIsSignedIn() {
    const userName = localStorage.getItem("User");
    
    if (userName) {
        
        document.getElementById("sign-in-form").style.display = 'none';
        document.getElementById("user-name-prompt").innerHTML = userName;
        document.getElementById("sign-out-form").style.display= 'block';
        
        
    }
    
}
checkIfUserIsSignedIn();