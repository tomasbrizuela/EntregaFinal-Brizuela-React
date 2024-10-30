import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";
let productsCollection = collection(db, "productos");
let docs = getDocs(productsCollection)

docs.then((res) => {
    res.docs.map((item, index) => {
        console.log(item.data().id)
    })
})

