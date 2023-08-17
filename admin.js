import{db,storage} from "./firebase.mjs"
import {  collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import {  ref, uploadBytes  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";


let add =document.getElementById('add')
add.addEventListener('click',async()=>{
    let price= document.getElementById('price').value
    let desc= document.getElementById('desc').value
    let file= document.getElementById('file').files[0]
    // let email = document.getElementById('email').value


    try {
        const docRef = await addDoc(collection(db, "product"), {
          pricee:price,
         description: desc,
         
        });

        const storageRef = ref(storage,"pics");

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
   
      // ...
    })
  
