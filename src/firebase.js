
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
          let email = document.getElementById('email').value;
          let password = document.getElementById('password').value;
          if (email.length < 4) {
            alert('Please enter an email address.');
            return;
          }
          if (password.length < 4) {
            alert('Please enter a password.');
            return;
          }
          // Sign in with email and pass.
          // [START createwithemail]
          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
          });
          // [END createwithemail]
        }

        
        const initApp= ()=> {
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
             
              document.getElementById('loginGoogle').textContent = 'Sign out';
              
// [END_EXCLUDE]
            } 
 // [START_EXCLUDE silent]
           
// [END_EXCLUDE]
          });
 // [END authstatelistener]
          
          document.getElementById('loginGoogle').addEventListener('click', handleSignUp, false);
         
        }
       
       


// acceder a database        
/*let contactosred =firebase.database().ref("contactosWeb");

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
document.getElementById("loginGoogle").addEventListener("click",guardarFormulario);*/

window.onload = function() {
    initApp();
  };

document.getElementById("loginGoogle").addEventListener("click",()=>{
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(user){
        alert("Google signIn");
        console.log(user);
    }).catch(function(error){
        alert("Error");
        console.log(error);
    })
});

document.getElementById("login").addEventListener("click", guardarFormulario);