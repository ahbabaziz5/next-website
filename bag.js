import { auth ,db} from "./firebase.mjs";
import {onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";



window.bag = ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
      
          // ...
        } else {
          // User is signed out
          alert("error")
          window.location.href="./sigin.html"
        }
      });
}

