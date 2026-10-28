let logo = document.querySelector(".logo")
let dropdown = document.querySelector(".dropdown")
dropdown.style.display = "none"
logo.addEventListener("click", function(){
  if (dropdown.style.display == "none"){
    dropdown.style.display = "block"
  }else {
    dropdown.style.display = "none";
  }
});
