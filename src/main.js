document.getElementById("dataLogin").style.display = "block";
document.getElementById("nameText").style.display = "none";
document.getElementById("name").style.display = "none";
document.getElementById("confirmText").style.display = "none";
document.getElementById("confirmPassword").style.display = "none"; 
document.getElementById("createUser").style.display = "none";
document.getElementById("enterWithGoogle").style.display = "none";



const enterRegister = () => {
  document.getElementById("nameText").style.display = "block";
  document.getElementById("name").style.display = "block";
  document.getElementById("confirmText").style.display = "block";
  document.getElementById("confirmPassword").style.display = "block";
  document.getElementById("createUser").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("loginGoogle").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};
document.getElementById("register").addEventListener("click", enterRegister);
 
const sendHome = () => {
  document.getElementById("googleUser").style.display = "none";
  document.getElementById("dataLogin").style.display = "block";
  document.getElementById("home").style.display = "block";
};
document.getElementById("enterWithGoogle").addEventListener("click", sendHome);

