import { auth } from "./firebase.mjs";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";




let signbtn = document.getElementById("btn1")
signbtn.addEventListener('click',()=>{

    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
     
      if(user.email =="ahbab5@gmail.com" ||user.password =="12345678"){
       window.location.href='./admin.html'
      }else{
        window.location.href='./index.html'
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  
})



