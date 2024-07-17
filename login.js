function onFormSubmit() {
    if (validate() == true) {
            if (document.getElementById("username").value == "admin" &&
            document.getElementById("password").value == "admin")
            {
                window.location.replace("crud.html")
            }
            else window.location.replace("carrito.html")
    }
}

function validate(){
    isValid = false;
    if (document.getElementById("username").value == "" ||
        document.getElementById("password").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    }
    else{
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}