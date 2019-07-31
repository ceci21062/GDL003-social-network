
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBgdr5ouFscnG69jfKQs2GBANr7qB1hNFA",
          authDomain: "find-your-pet-6f8c3.firebaseapp.com",
          databaseURL: "https://find-your-pet-6f8c3.firebaseio.com",
          projectId: "find-your-pet-6f8c3",
          storageBucket: "",
          messagingSenderId: "13483930838",
          appId: "1:13483930838:web:bd5d910cb6c4e465"
      };
      // Initialize Firebase
      let app = firebase.initializeApp(firebaseConfig);
          db=firebase.firestore(app);

     const handleSignUp =() => {
          let displayName = document.getElementById('name').value;

          let email = document.getElementById('email').value;
          let password = document.getElementById('password').value;
          let confirmPassword = document.getElementById('confirmPassword').value;
          
          if (email.length < 4) {
            alert('Por favor ingresa un correo electronico.');
            return;
          }
          if (password.length < 4) {
            alert('Por favor ingresa una contraseña.');
            return;
          }
          if (password !== confirmPassword){
            alert('Por favor verifica tu contraseña este correcta')
          }
          // Sign in with email and pass.
          // [START createwithemail]
          let promise = firebase.auth().createUserWithEmailAndPassword(email, password);
          promise.then(function(user) {
            //Se manda la verificación de cuenta al email registrado
            firebase.auth().currentUser.sendEmailVerification();
            alert("Tu cuenta ha sido creada, por favor verificala desde tu email");
          }, function(error) {
            console.log(error);
          });
            
     };
     

     const initApp = ()=> {
        // Listening for auth state changes.
        // [START authstatelistener]
  
const user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
};
}

        //podemos ver si el usuario esta conectado o no
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("infoUser").innerHTML+=
    `<div class = "styleInfo">
    <h1>Perfil</h1>
    <img src =${user.photoURL} alt = "imagen de usuario"  width="20%" height="20%" >
    <h2>Nombre de Usuario:<br>${user.displayName}</h2>
    <h2>Correo Electronico:<br>${user.email}</h2>
    </div>`
    document.getElementById("infoUserAdopt").innerHTML+=
    `<div class = "styleInfoSelect">
    <img src =${user.photoURL} alt = "imagen de usuario" width="15%" height="15%">
    </div>`
    document.getElementById("infoUserFind").innerHTML+=
    `<div class = "styleInfoSelect">
    <img src =${user.photoURL} alt = "imagen de usuario" width="15%" height="15%">
    </div>`
    console.log("El usuario esta conectado");
  } else {
    console.log("El usuario NO esta conectado");
  }
});

            
//document.getElementById('createUser').textContent = 'Ingresa con Google';
      ////////////////////////////////////////////////
/* const uiConfig = {
  signInSuccessUrl: 'home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
   //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
   //firebase.auth.GithubAuthProvider.PROVIDER_ID,
   firebase.auth.EmailAuthProvider.PROVIDER_ID,
   //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
   //firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl : '<bla bla bla>'
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
 /////////////////////////////////////////// 
}           
// [END_EXCLUDE]
            
 // [START_EXCLUDE silent]
         
// [END_EXCLUDE]
       
// [END authstatelistener]
        
  //document.getElementById('createUser').addEventListener('click', handleSignUp, false ); */

const signIn = () =>{
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let resetAlerts = document.getElementsByClassName('alerts');
  resetAlerts.innerHTML = "";

  let promise = firebase.auth().signInWithEmailAndPassword(email, password);
   promise.then(function(currentUser) {
     document.getElementById("dataLogin").style.display = "none";
     document.getElementById("home").style.display = "block";
     document.getElementById("headerLogo").style.display = "block";
     document.getElementById("logOut").style.display = "block";
     document.getElementById("footerMenu").style.display = "block";
     alert("Tu cuenta ha sido loggueada");
  }, function(error) {
  if(error.code === "auth/wrong-password"){
    document.getElementById("wrong").innerHTML = "Tu contraseña es incorrecta. Verifica que sea correcta";  
    console.log("hasta el error de la contraseña");
  } else if (error.code === "auth/invalid-email") {
    document.getElementById("wrong").innerHTML = "Tu email es incorrecto. Verifica que sea correcto";
    console.log("hasta el error del email mal escrito");
  } else if(error.code === "auth/user-not-found"){
    document.getElementById("wrong").innerHTML = "Usuario no registrado";
    console.log("hasta el error del usuario no registrado");  
  }  else {
    console.log(error);
  }
});
};

document.getElementById("login").addEventListener("click", signIn);
 
// acceder a database        
/* let contactosred =firebase.database().ref("contactosWeb");
const guardarFormulario = (e) =>{
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
 
  let nuevoComentarioRef =contactosred.push();
          nuevoComentarioRef.set({
              email: email,
              password: password,
          });
  }
document.getElementById("loginGoogle").addEventListener("click",guardarFormulario); */

window.onload = function() {
  initApp();
};

const loginGoogle = () =>{
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(user){
    document.getElementById("dataLogin").style.display = "none";
    document.getElementById("home").style.display = "block";       document.getElementById("logOut").style.display = "block"; 
    document.getElementById("footerMenu").style.display = "block";          
    alert("Google signIn");
    console.log(user);
  }).catch(function(error){
      alert("Error");
      console.log(error);
  });
};
document.getElementById("loginGoogle").addEventListener("click", loginGoogle);

/* //podemos ver si el usuario esta conectado o no
firebase.auth().onAuthStateChanged(function(user) {
  firebase.auth().currentUser;
  if (user) {
    console.log("El usuario esta conectado");
    console.log(user.email);
    console.log(user.displayName);
    document.getElementById("userName").innerHTML=user.email;
  } else {
    console.log("El usuario NO esta conectado");
  }
}); */


//cerrar sesion
const logOut = () =>{
  firebase.auth().signOut().then(function() {
  console.log("el usuario se desconectó correctamente");
}).catch(function(error) {
console.log(error);
});
};
document.getElementById("logOut").addEventListener("click", logOut);

//Mandar email para restablecer contraseña
const passwordReset = () =>{
var auth = firebase.auth();
var emailAddress = document.getElementById("email").value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  console.log("ya se envió el correo");
}).catch(function(error) {
  console.log(error);
});
};
document.getElementById("passwordReset").addEventListener("click", passwordReset);


const post = ()=>{
  let email= document.getElementById("email").value;
  let publication= document.getElementById("publication").value;
  db.collection("usuario").doc('email').set({
    email: email,
    publicacion: publication,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
}) 
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

} 
document.getElementById('crearPost').addEventListener('click',post);


