import { auth,db } from "./firebase.mjs";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {collection,addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

document.getElementById('signup').addEventListener('click',()=>{

let email= document.getElementById('email').value;
let password= document.getElementById('password').value;
let username= document.getElementById('user').value;

createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

    try {
      const docRef = await addDoc(collection(db, "next"), {
        Email:email,
       Paswword: password,
       Username :username,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  window.location.href='./signin.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode,errorMessage);
  });
})
