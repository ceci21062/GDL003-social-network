document.getElementById("dataLogin").style.display="block";
document.getElementById("email").value="";
document.getElementById("password").value="";
const enterLogin =()=>{
    document.getElementById("newUser").style.display = "block";
    document.getElementById("dataLogin").style.display = "none";
}
document.getElementById("register").addEventListener("click", enterLogin);