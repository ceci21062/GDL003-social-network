
// Configuración de firebase
const firebaseConfig = {
  apiKey: "AIzaSyBgdr5ouFscnG69jfKQs2GBANr7qB1hNFA",
  authDomain: "find-your-pet-6f8c3.firebaseapp.com",
  databaseURL: "https://find-your-pet-6f8c3.firebaseio.com",
  projectId: "find-your-pet-6f8c3",
  storageBucket: "",
  messagingSenderId: "13483930838",
  appId: "1:13483930838:web:bd5d910cb6c4e465"
};
// Inicia con Firebase
let app = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(app);

const handleSignUp = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  if (email.length < 4) {
    alert('Por favor ingresa un correo electrónico.');
    return;
  }
  if (password.length < 4) {
    alert('Por favor ingresa una contraseña.');
    return;
  }
  if (password !== confirmPassword) {
    alert('Por favor verifica tu contraseña este correcta');
  }
  // Crea usuario con contraseña
  let promise = firebase.auth().createUserWithEmailAndPassword(email, password);
  promise.then(() => {
  // Se manda la verificación de cuenta al email registrado
    firebase.auth().currentUser.sendEmailVerification();
    alert("Tu cuenta ha sido creada, por favor verifica la desde tu email");
  });
};
document.getElementById("createUser").addEventListener("click", handleSignUp);

const initApp = () => {
  // Escucha la llamada de los cambios de autenticar cuenta
  const user = firebase.auth().currentUser;

  if (user !== null) {
    user.providerData.forEach((profile) => {
      alert("Sign-in provider: " + profile.providerId, "Provider-specific UID: " + profile.uid, "Name: " + profile.displayName, "Email: " + profile.email, "Photo URL: " + profile.photoURL);
    });
  }
};

// Podemos ver si el usuario esta conectado o no
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("infoUser").innerHTML +=
      `<div class = "styleInfo">
    <br><br>
    <h1>Perfil</h1>
    <br>
    <img src =${user.photoURL} alt = "imagen de usuario"  width="20%" height="20%" >
    <br>
    <h2>Nombre de Usuario:<br>${user.displayName}</h2>
    <br>
    <h2>Correo Electrónico:<br>${user.email}</h2>
    </div>` ;
    document.getElementById("infoUserAdopt").innerHTML +=
      `<div class = "styleInfoSelect">
    <h1>Adopta:</h1>
    <br>
    <img src =${user.photoURL} alt = "imagen de usuario" width="15%" height="15%">
    </div>` ;
    document.getElementById("infoUserFind").innerHTML +=
      `<div class = "styleInfoSelect">
    <h1>Encuentra:</h1>
    <br>
    <img src =${user.photoURL} alt = "imagen de usuario" width="15%" height="15%">
    </div>` ;
    document.getElementById("login").textContent = 'Sesión abierta';
  }
});

// Inicio de sesión
const signIn = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let resetAlerts = document.getElementsByClassName('alerts');
  resetAlerts.innerHTML = "";

  let promise = firebase.auth().signInWithEmailAndPassword(email, password);
  promise.then(() => {
    document.getElementById("dataLogin").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("headerLogo").style.display = "block";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("footerMenu").style.display = "block";
    alert("Tu cuenta ha sido registrada");
  }, (error) => {
    if (error.code === "auth/wrong-password") {
      document.getElementById("wrong").innerHTML = "Tu contraseña es incorrecta. Verifica que sea correcta";
    } else if (error.code === "auth/invalid-email") {
      document.getElementById("wrong").innerHTML = "Tu email es incorrecto. Verifica que sea correcto";
    } else if (error.code === "auth/user-not-found") {
      document.getElementById("wrong").innerHTML = "Usuario no registrado";
    } else {
      alert("Error");
    }
  });
};

document.getElementById("login").addEventListener("click", signIn);

window.onload = () => {
  initApp();
};

// Inicia sesión con Google
const loginGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    document.getElementById("dataLogin").style.display = "none";
    document.getElementById("home").style.display = "block"; document.getElementById("logOut").style.display = "block";
    document.getElementById("footerMenu").style.display = "block";
    alert("Google signIn");
  }).catch(() => {
    alert("Error");
  });
};
document.getElementById("loginGoogle").addEventListener("click", loginGoogle);

// Cerrar sesión
const logOut = () => {
  firebase.auth().signOut().then(() => {
    alert("La sesión se cerró correctamente");
  }).catch(() => {
    alert("error");
  });
};
document.getElementById("logOut").addEventListener("click", logOut);

// Mandar email para restablecer contraseña
const passwordReset = () => {
  var auth = firebase.auth();
  var emailAddress = document.getElementById("email").value;

  auth.sendPasswordResetEmail(emailAddress).then(() => {
    alert("El correo de verificación se ha enviado");
  }).catch(() => {
    alert("Error");
  });
};
document.getElementById("passwordReset").addEventListener("click", passwordReset);

// Se imprimen los post en tiempo real
const printPosts = () => {
  db.collection("post").onSnapshot((querySnapshot) => {
    document.getElementById("startPublication").innerHTML = "";
    querySnapshot.forEach((doc) => {
      document.getElementById("startPublication").innerHTML +=
        `
      <article id="boxPublication">
        <h4>${doc.data().email}</h4>
        <textarea class="textPublication" id="textPublication-${doc.id}" disabled="disabled">${doc.data().publication}</textarea> 
        <h6> ${doc.data().date}</h6>
        <h6> ${doc.data().hour}</h6>
        <button id="edit-${doc.id}" onclick="editPost('${doc.id}','${doc.data().publication}')">
        <i id="btnEdit" class="icono fas fa-edit"></i>
        </button>
        <button id="remove-${doc.id}" onclick="deletePost('${doc.id}')">
        <i id="btnDelete" class="icono fas fa-trash-alt"></i>
        </button>
        <button id="like" onclick="totalLike('${doc.id}')">${doc.data().like}
        <i id="btnLike" class=" icono fas fa-paw"></i> 
        </button>
        <br>
      </article>
      ` ;
    });
  });
};
document.getElementById("adopt").addEventListener("click", printPosts);

// Se publican posts con la caja de texto
const post = (() => {
  let id = firebase.auth().currentUser;
  let email = id.email;
  let publication = document.getElementById("publication").value;
  let like = 0;

  if (publication === "") {
    alert("Error, primero escribe algo");
  } else {
    db.collection("post").add({
      email,
      publication,
      date: new Date().toLocaleDateString(),
      hour: new Date().toLocaleTimeString(),
      like
    }).then(() => {

    });
  }
  document.getElementById("publication").value = "";
});

document.getElementById('crearPost').addEventListener('click', post);

// borrar post
const deletePost = (id) => {
  if (confirm('¿Estas seguro de eliminar este post?')) {
    db.collection("post").doc(id).delete().then(() => {
      alert('La publicación se ha eliminado correctamente!');
    })
    .catch(() => {
        alert("El mensaje no se eliminó");
      });
  }
};

// Editar mensajes correctamente en el campo seleccionado
const editPost = (id, publication) => {
  if (confirm('¿Estas seguro de editar esta publicación')) {
    document.getElementById(`textPublication-${id}`).value = publication;
    document.getElementById(`textPublication-${id}`).disabled = false;
    let btn = document.getElementById(`edit-${id}`);
    btn.innerHTML = "Guardar";

    btn.onclick = () => {
      let edited = db.collection("post").doc(id);
      let publication = document.getElementById(`textPublication-${id}`).value;
      return edited.update({
        publication,
        date: new Date().toLocaleDateString(),
        hour: new Date().toLocaleTimeString()

      }).then(() => {
        alert(" La publicación se ha editado exitosamente!");
        btn.innerHTML =
          `
        <i class="icono fas fa-edit"></i>
        ` ;
      })
        .catch((error) => {
          // The document probably doesn't exist.
          alert("Error , no se encuentra la publicación: ", error);
        });
    };
  }
};

const totalLike = (id)=>{
    let refLike = db.collection("post").doc(id);
    refLike.update("like", firebase.firestore.FieldValue.increment(1));
    };