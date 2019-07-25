
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

      let bigOne = document.getElementById('bigOne');
      let dbRef = firebase.database().ref().child('text');
      dbRef.on('value', snap => bigOne.innerText = snap.val());


     const handleSignUp =() => {
          let nameUser = document.getElementById('name').value;
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
        let promise = firebase.auth().signInWithEmailAndPassword(email, password);
        promise.then(function(currentUser) {
          alert("Tu cuenta ha sido loggueada");
        }, function(error) {
          console.log(error);
        });
       /* .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        }); */
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

document.getElementById("login").addEventListener("click", guardarFormulario);

//podemos ver si el usuario esta conectado o no
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("El usuario esta conectado");
  } else {
    console.log("El usuario NO esta conectado");
  }
});
