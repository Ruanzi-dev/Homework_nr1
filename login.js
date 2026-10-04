document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email=="" || password==""){
        document.getElementById("error").textContent="You have to enter the details!";
    }else {
        window.location.href="../index.html"
    }

});