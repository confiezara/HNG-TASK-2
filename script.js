function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.length < 4) {
        alert("Please Enter valid Name");
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 4) {
        alert("Please Enter Correct Subject");
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6 || !email.includes(".")) {
        alert("Please Enter valid Email");
        return false;
    }
    if (message.length <= 20) {
        alert("Message is too short")
        return false;
    }
    return true;
}
