function validate() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let msg = document.getElementById("msg");
    msg.style.color = "red";
    if (username==="") {
        msg.textContent = "Enter username";
        return false;
    }
    else if (email==="") {
        msg.textContent = "Enter email";
        return false;
    }
    else if (message==="") {
        msg.textContent = "Enter message";
        return false;
    }
    else{
        return true;
    }
}