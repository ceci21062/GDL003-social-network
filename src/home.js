document.getElementById("home").style.display = "block";
document.getElementById("footerMenu").style.display = "block";
document.getElementById("findPage").style.display = "none";
document.getElementById("adoptPage").style.display = "none";
document.getElementById("infoUser").style.display = "none";

const sendStart = () => {
    location.reload();
  };
  document.getElementById("logOut").addEventListener("click", sendStart);

  const sendFind = () => {
    document.getElementById("findPage").style.display = "block";
    document.getElementById("adoptPage").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("footerMenu").style.display = "block";
  }
  document.getElementById("find").addEventListener("click", sendFind);
  
  const sendAdopt = () => {
    document.getElementById("adoptPage").style.display = "block";
    document.getElementById("findPage").style.display = "none";
    document.getElementById("home").style.display = "none";
   document.getElementById("footerMenu").style.display = "block";
  }
  
  document.getElementById("adopt").addEventListener("click", sendAdopt);
  
  const goHome = () => {
    document.getElementById("adoptPage").style.display = "none";
    document.getElementById("findPage").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("footerMenu").style.display = "block";
  }
  document.getElementById("goHome").addEventListener("click", goHome);
  
  const infoUser = () => {
    document.getElementById("adoptPage").style.display = "none";
    document.getElementById("findPage").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("infoUser").style.display = "block";
  }
  document.getElementById("goUser").addEventListener("click",infoUser);

  const logOut = () =>{
    firebase.auth().signOut().then(function() {
    console.log("el usuario se desconectó correctamente");
  }).catch(function(error) {
  console.log(error);
  });
  };
  document.getElementById("logOut").addEventListener("click", logOut);