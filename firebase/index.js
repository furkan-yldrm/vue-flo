import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjTnDo8OZ4yeUalhNpReR_UEiVgGeLdFM",
  authDomain: "vue-project-a84b7.firebaseapp.com",
  projectId: "vue-project-a84b7",
  storageBucket: "vue-project-a84b7.appspot.com",
  messagingSenderId: "532611654656",
  appId: "1:532611654656:web:ab6f743dc0f4b355d764e5",
  measurementId: "G-R7WLSGZD70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{
  db
}