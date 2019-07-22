document.getElementById("dataLogin").style.display="block";
//document.getElementById("email").value="";
//document.getElementById("password").value="";

const enterLogin =()=>{
    document.getElementById("newUser").style.display = "block";
    document.getElementById("dataLogin").style.display = "none";
}
document.getElementById("register").addEventListener("click", enterLogin);















const enterGoogle=()=>{
  document.getElementById("googleUser").style.display = "block";
  document.getElementById("dataLogin").style.display = "none";
  };
document.getElementById("loginGoogle").addEventListener("click", enterGoogle);
 
const sendHome=()=>{
  document.getElementById("googleUser").style.display = "none";
  document.getElementById("dataLogin").style.display = "none";
  document.getElementById("home").style.display = "block";
  };
document.getElementById("enterWithGoogle").addEventListener("click", sendHome);