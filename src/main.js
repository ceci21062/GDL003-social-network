document.getElementById("dataLogin").style.display="block";
document.getElementById("email").value="";
document.getElementById("password").value="";
const enterLogin =()=>{
    document.getElementById("newUser").style.display = "block";
    document.getElementById("dataLogin").style.display = "none";
}
document.getElementById("register").addEventListener("click", enterLogin);

const enterGoogle=()=>{
firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
// Handle Errors here.
let errorCode = error.code;
let errorMessage = error.message;
console.log(errorCode);
console.log(errorMessage);
    }); 
  };
  
document.getElementById("loginGoogle").addEventListener("click", enterGoogle);

  