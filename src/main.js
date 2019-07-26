
document.getElementById("pageInit").style.display="block"
document.getElementById("headerLogo").style.display = "none";
document.getElementById("dataLogin").style.display = "none";
document.getElementById("nameText").style.display = "none";
document.getElementById("name").style.display = "none";
document.getElementById("confirmText").style.display = "none";
document.getElementById("confirmPassword").style.display = "none"; 
document.getElementById("createUser").style.display = "none";
document.getElementById("enterWithGoogle").style.display = "none";
document.getElementById("footerMenu").style.display = "none";
document.getElementById("home").style.display = "none"
document.getElementById("adoptPage").style.display = "none";

const startapp = ()=>{
  document.getElementById("pageInit").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("dataLogin").style.display = "block";
  document.getElementById("headerLogo").style.display = "block";
  document.getElementById("home").style.display = "none";
}

document.getElementById("start").addEventListener("click", startapp);

const enterRegister = () => {
  document.getElementById("nameText").style.display = "inline-block";
  document.getElementById("name").style.display = "inline-block";
  document.getElementById("confirmText").style.display = "inline-block";
  document.getElementById("confirmPassword").style.display = "inline-block";
  document.getElementById("createUser").style.display = "inline-block";
  document.getElementById("login").style.display = "none";
  document.getElementById("loginGoogle").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};
document.getElementById("register").addEventListener("click", enterRegister);
 
/* const sendHome = () => {
  document.getElementById("dataLogin").style.display = "none";
  document.getElementById("home").style.display = "block";
  
};
document.getElementById("login").addEventListener("click", sendHome);*/

 const sendStart = () => {
  location.reload();
};
document.getElementById("logOut").addEventListener("click", sendStart);

const sendFind = () => {
  document.getElementById("findPage").style.display = "block";
  document.getElementById("home").style.display = "none";
}
document.getElementById("find").addEventListener("click", sendFind);

const sendAdopt = () => {
  document.getElementById("adoptPage").style.display = "block";
  document.getElementById("home").style.display = "none";
}

document.getElementById("adopt").addEventListener("click", sendAdopt);
