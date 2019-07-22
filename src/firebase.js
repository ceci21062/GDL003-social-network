
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

        let contactosred =firebase.database().ref("contactosWeb");

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

document.getElementById("login").addEventListener("click",guardarFormulario);