const password = document.querySelector("#txtPass");
const check = document.querySelector(".checkPass");

check.addEventListener("click",function(){
    var type = password.getAttribute("type") == "password" ? "text" : "password";
    password.setAttribute("type",type)
})