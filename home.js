import { auth ,db,storage} from "./firebase.mjs";
import {onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getDocs,collection} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {  ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";





window.bag = ()=>{
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      location.href="./bag.html"
     
      // ...
    } else {
      // User is signed out
      alert("error")
      location.href="./signin.html"
      
    }
  });

}


window.getter = async()=>{
  const querySnapshot = await getDocs(collection(db, "product"));
  querySnapshot.forEach((doc) => {
  console.log(doc.data());
  console.log(doc.id);
 

 let up =  document.getElementById("up")
 up.innerHTML+=`
 
  <div class="card-body" id='cl'>
  <img  class="card-img-top" alt="..." id='myimg'>
    <h5 class="card-title">${doc.data().pricee}</h5>
    <p class="card-text">${doc.data().description}</p>
    <a  class="btn btn-primary" onclick="bag()">Add  to bag</a>
  </div>
</div>`

getDownloadURL(ref(storage, "pics"))
.then((url) => {
  const img = document.getElementById('myimg');
  img.style.height='200px'
  img.style.width='200px'
  img.setAttribute('src', url);
})
.catch((error) => {
  // Handle any errors
});

  })

}
getter()

window.cl = async() =>{





}

//   document.getElementById('log').addEventListener('click',()=>{

//     signOut(auth).then(() => {
//         // Sign-out successful.
//         alert('Sign-out successful.')
//       }).catch((error) => {
//         // An error happened.
//         alert('An error happened.')
//       });
      


//   })

