
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

       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        function handleSignUp() {
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
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
        function initApp() {
          // Listening for auth state changes.
          // [START authstatelistener]
          firebase.auth().onAuthStateChanged(function(user) {
            // [START_EXCLUDE silent]
            
            // [END_EXCLUDE]
            if (user) {
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // [START_EXCLUDE]
             
              document.getElementById('enterWithGoogle').textContent = 'Sign out';
              
              // [END_EXCLUDE]
            } 
            // [START_EXCLUDE silent]
           
            // [END_EXCLUDE]
          });
          // [END authstatelistener]
          
          document.getElementById('enterWithGoogle').addEventListener('click', handleSignUp, false);
         
        }
        window.onload = function() {
          initApp();
        };
       
    
/*const data = firebase.database();
let data = {
    "Moscow": {
      country: "Russia"
    },
    "Berlin": {
      name: "Germany"
    }
  }
//Obtener una referencia a la raíz de la base de datos
let refToData = data.ref('cities'); 
//Obtener una console.log de todos los datos 
dataRef.once('value', snapshot => {
  console.log(snapshot.val());
});
let dataPush = dataRef.push(data);*/

        