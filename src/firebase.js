
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
      firebase.initializeApp(firebaseConfig);

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
        firebase.auth().onAuthStateChanged(function(user) {
          // [START_EXCLUDE silent]
          
          // [END_EXCLUDE]
          if (user) {
            // User is signed in.
            let displayName = user.displayName;
            let email = user.email;
            let emailVerified = user.emailVerified;
            let photoURL = user.photoURL;
            let isAnonymous = user.isAnonymous;
            let uid = user.uid;
            let providerData = user.providerData;
            // [START_EXCLUDE]             

            
              //document.getElementById('createUser').textContent = 'Ingresa con Google';
      
            
// [END_EXCLUDE]
            } 
 // [START_EXCLUDE silent]
         
// [END_EXCLUDE]
        });
// [END authstatelistener]
        
        document.getElementById('createUser').addEventListener('click', handleSignUp, false )
        
      };

      const signIn = () =>{
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let resetAlerts = document.getElementsByClassName('alerts');
        resetAlerts.innerHTML = "";

        let promise = firebase.auth().signInWithEmailAndPassword(email, password);
        promise.then(function(currentUser) {
          document.getElementById("dataLogin").style.display = "none";
          document.getElementById("home").style.display = "block";
          document.getElementById("logOut").style.display = "block";
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

document.getElementById("loginGoogle").addEventListener("click", ()=>{
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(user){
      alert("Google signIn");
      console.log(user);
  }).catch(function(error){
      alert("Error");
      console.log(error);
  });
});

//document.getElementById("login").addEventListener("click", guardarFormulario);

//podemos ver si el usuario esta conectado o no
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
});


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

//Escribir un mensaje en el muro
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}