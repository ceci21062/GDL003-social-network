
document.getElementById("pageInit").style.display="block"
document.getElementById("headerLogo").style.display = "none";
document.getElementById("dataLogin").style.display = "none";
//document.getElementById("createUser").style.display = "none";



const startApp = ()=>{
  document.getElementById("pageInit").style.display="none";
  document.getElementById("dataLogin").style.display = "block";
  document.getElementById("headerLogo").style.display = "block";
}

document.getElementById("start").addEventListener("click", startApp);

/*const enterRegister = () => {
  
  document.getElementById("createUser").style.display = "inline-block";
  document.getElementById("login").style.display = "none";
  document.getElementById("loginGoogle").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};
document.getElementById("register").addEventListener("click", enterRegister);*/
 

