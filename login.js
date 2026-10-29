document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email=="" || password==""){
        alert("You have to fill both fields")
        document.getElementById("error").textContent="You have to enter the details!";
    }else {
        localStorage.setItem("usergmail", email)
        window.location.href="frontpage.html"
    }

})
